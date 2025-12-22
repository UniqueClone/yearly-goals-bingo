import { useEffect, useState } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";
import styles from "./App.module.css";
import { InputGridRenderer } from "./InputGridRenderer";

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
                            If this tool helped you, you can support it at
                            {" "}
                            <a
                                href="https://buymeacoffee.com/ryanlynch"
                                target="_blank"
                                rel="noreferrer"
                                className={styles["app-footer__link"]}
                            >
                                buymeacoffee.com/ryanlynch
                            </a>
                            .
                        </p>
                    </div>
                </section>
            </main>
            <PwaUpdateToast />
        </>
    );
}

export default App;
