import { useEffect, useState } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";
import styles from "./App.module.css";
import { InputGridRenderer } from "./InputGridRenderer";

interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[];
    readonly userChoice: Promise<{
        outcome: "accepted" | "dismissed";
        platform: string;
    }>;
    prompt: () => Promise<void>;
}

function PwaUpdateToast() {
    const {
        offlineReady: [offlineReady, setOfflineReady],
        needRefresh: [needRefresh, setNeedRefresh],
        updateServiceWorker,
    } = useRegisterSW();

    const close = () => {
        setOfflineReady(false);
        setNeedRefresh(false);
    };

    if (!offlineReady && !needRefresh) {
        return null;
    }

    const message = offlineReady
        ? "App is ready to work offline."
        : "A new version is available.";

    return (
        <div className={styles["pwa-toast"]} role="status" aria-live="polite">
            <div className={styles["pwa-toast__message"]}>{message}</div>
            <div className={styles["pwa-toast__actions"]}>
                {needRefresh && (
                    <button
                        type="button"
                        className={styles["pwa-toast__button"]}
                        onClick={() => updateServiceWorker(true)}
                    >
                        Reload
                    </button>
                )}
                <button
                    type="button"
                    className={styles["pwa-toast__button"]}
                    onClick={close}
                >
                    Dismiss
                </button>
            </div>
        </div>
    );
}

function InstallShareStrip() {
    const [installEvent, setInstallEvent] =
        useState<BeforeInstallPromptEvent | null>(null);
    const [canInstall, setCanInstall] = useState(false);
    const [installDismissed, setInstallDismissed] = useState(false);
    const [canShare, setCanShare] = useState(false);
    const [copyStatus, setCopyStatus] = useState<"idle" | "copied">("idle");
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        const handler = (event: Event) => {
            event.preventDefault();
            setInstallEvent(event as BeforeInstallPromptEvent);
            setCanInstall(true);
        };

        window.addEventListener("beforeinstallprompt", handler);
        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    useEffect(() => {
        if (typeof navigator !== "undefined" && "share" in navigator) {
            setCanShare(true);
        }
    }, []);

    useEffect(() => {
        if (typeof navigator !== "undefined") {
            const ua = navigator.userAgent || navigator.vendor || "";
            if (/iphone|ipad|ipod/i.test(ua)) {
                setIsIOS(true);
            }
        }
    }, []);

    const handleInstall = async () => {
        if (!installEvent) return;

        try {
            await installEvent.prompt();
            const choice = await installEvent.userChoice;
            if (choice.outcome === "accepted") {
                setCanInstall(false);
            } else {
                setInstallDismissed(true);
            }
        } catch {
            setInstallDismissed(true);
        } finally {
            setInstallEvent(null);
        }
    };

    const handleShareOrCopy = async () => {
        const url = window.location.href;

        if (canShare && "share" in navigator) {
            try {
                await (
                    navigator as Navigator & {
                        share?: (data: ShareData) => Promise<void>;
                    }
                ).share?.({
                    title: "Yearly Goals Bingo",
                    text: "Turn your yearly goals into a bingo card.",
                    url,
                });
                return;
            } catch {
                // fall through to copy
            }
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
            try {
                await navigator.clipboard.writeText(url);
                setCopyStatus("copied");
                setTimeout(() => setCopyStatus("idle"), 2000);
            } catch {
                // ignore copy failures
            }
        }
    };

    const showInstallButton = canInstall && !installDismissed;

    return (
        <div className={styles["app-cta-strip"]}>
            <span className={styles["app-cta-strip__label"]}>
                Keep this handy:
            </span>
            {showInstallButton && (
                <button
                    type="button"
                    className={styles["app-cta-strip__button"]}
                    onClick={handleInstall}
                >
                    Install app
                </button>
            )}
            <button
                type="button"
                className={styles["app-cta-strip__button"]}
                onClick={handleShareOrCopy}
            >
                {copyStatus === "copied"
                    ? "Link copied"
                    : canShare
                    ? "Share link"
                    : "Copy link"}
            </button>
            {!showInstallButton && isIOS && (
                <span className={styles["app-cta-strip__label"]}>
                    On iPhone or iPad, use Safari&apos;s Share button and choose
                    &quot;Add to Home Screen&quot; to install.
                </span>
            )}
        </div>
    );
}

function App() {
    const [name, setName] = useState<string>("");
    const [goals, setGoals] = useState<string[]>(Array(25).fill(""));
    const [canCreatePdf, setCanCreatePdf] = useState<boolean>(true);
    const year = new Date().getFullYear();

    // Local Storage: Initialize the values from local storage on first render
    useEffect(() => {
        const storedName = localStorage.getItem("name");
        const storedValues = localStorage.getItem("values");

        if (storedName) {
            setName(storedName);
        }
        if (storedValues) {
            const parsed = JSON.parse(storedValues) as string[];
            setGoals(parsed);
        }
    }, []);

    // Local Storage: Persist values whenever they change
    useEffect(() => {
        localStorage.setItem("name", name);
    }, [name]);

    useEffect(() => {
        localStorage.setItem("values", JSON.stringify(goals));
    }, [goals]);

    const pdfConfig = {
        year: year.toString(),
        name: name,
    };

    const handleGoalChange = (index: number, value: string) => {
        if (index < 0 || index >= goals.length) {
            return;
        } else {
            const updatedGoals = [...goals];
            updatedGoals[index] = value;
            setGoals(updatedGoals);
        }
    };

    useEffect(() => {
        if (validateGoals(goals)) {
            setCanCreatePdf(true);
        } else {
            setCanCreatePdf(false);
        }
    }, [goals]);

    const validateGoals = (goals: string[]) => {
        for (const goal of goals) {
            if (goal.length > 80) {
                return false;
            }
        }
        return true;
    };

    // PDF Generation
    // Dynamically import the PDF generation code only when needed to
    // keep the initial bundle size smaller.
    const handleCreatePdf = async () => {
        const { CreatePdf } = await import("./PdfTools");
        CreatePdf(pdfConfig, goals);
    };

    return (
        <>
            <main className={styles["app-shell"]}>
                <header className={styles["app-hero"]}>
                    <h1 className={styles["app-hero__title"]}>
                        Yearly Goals Bingo {year}
                    </h1>
                    <p className={styles["app-hero__subtitle"]}>
                        Turn your goals for the year into a playful bingo card
                        you can print and keep somewhere you&apos;ll see every
                        day.
                    </p>
                </header>

                <section
                    className={`${styles["app-panel"]} ${styles["app-panel--name"]}`}
                >
                    <h2 className={styles["app-panel__title"]}>
                        Start with your name
                    </h2>
                    <p className={styles["app-panel__body"]} id="name-help">
                        We&apos;ll add it to the top of your bingo card so it
                        feels personal and fun to complete.
                    </p>
                    <div className={styles["app-name-input"]}>
                        <label
                            className={styles["app-name-input__label"]}
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            className={styles["app-name-input__field"]}
                            type="text"
                            autoComplete="name"
                            placeholder="e.g. Alex, The Lynch Family, Team Alpha"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            aria-describedby="name-help"
                        />
                    </div>
                </section>

                <section
                    className={`${styles["app-panel"]} ${styles["app-panel--goals"]}`}
                >
                    <InputGridRenderer
                        name={name}
                        setName={setName}
                        goals={goals}
                        handleGoalChange={handleGoalChange}
                        setAllGoals={setGoals}
                    />
                </section>

                <section
                    className={`${styles["app-panel"]} ${styles["app-panel--action"]}`}
                >
                    <div className={styles["app-panel__action"]}>
                        <button
                            disabled={!canCreatePdf}
                            onClick={handleCreatePdf}
                            className={`button ${styles["app-create-button"]}`}
                            id="create-pdf"
                        >
                            Create my bingo PDF
                        </button>
                        <p className={styles["app-panel__hint"]}>
                            You can update your goals any time. When you&apos;re
                            happy with them, generate a fresh PDF and print it
                            out.
                            {!canCreatePdf &&
                                " Shorten any goals over 80 characters to enable the button."}
                        </p>
                        <p className={styles["app-footer"]}>
                            If this tool helped you, you can support it at{" "}
                            <a
                                href="https://buymeacoffee.com/ryanlynch"
                                target="_blank"
                                rel="noreferrer"
                                className={styles["app-footer__link"]}
                            >
                                buymeacoffee.com/ryanlynch
                            </a>
                            .
                            <br />
                            For feedback or suggestions, email{" "}
                            <a
                                href="mailto:ryanjetbox@gmail.com"
                                className={styles["app-footer__link"]}
                            >
                                ryanjetbox@gmail.com
                            </a>{" "}
                            or open an issue on{" "}
                            <a
                                href="https://github.com/UniqueClone/yearly-goals-bingo/issues/new"
                                target="_blank"
                                rel="noreferrer"
                                className={styles["app-footer__link"]}
                            >
                                GitHub
                            </a>
                            .
                        </p>
                        <InstallShareStrip />
                    </div>
                </section>
            </main>
            <PwaUpdateToast />
        </>
    );
}

export default App;
