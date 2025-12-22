import React from "react";
import styles from "./InputTable.module.css";

interface InputTableProps {
    values: string[];
    onChange: (index: number, value: string) => void;
}

export const InputTable: React.FC<InputTableProps> = ({ values, onChange }) => {
    const gridSize = 5;

    const tooLongClass = (value: string) => {
        return value.length > 80 ? "too-long" : "";
    };

    return (
        <section className={styles["desktop-bingo"]}>
            <header className={styles["desktop-bingo__header"]}>
                <h3 className={styles["desktop-bingo__title"]}>Bingo grid</h3>
                <p className={styles["desktop-bingo__subtitle"]}>
                    Type directly into each square. Keep goals short so they
                    print clearly.
                </p>
            </header>
            <div className={styles["desktop-bingo__card"]}>
                <div className={styles["desktop-bingo__ribbon"]}>B I N G O</div>
                <table className={styles["desktop-bingo__table"]}>
                    <caption className="sr-only">
                        Bingo goals grid. Fill in 24 goals around the free
                        center space in the middle.
                    </caption>
                    <tbody>
                        {Array.from({ length: gridSize }).map((_, rowIndex) => (
                            <tr key={rowIndex}>
                                {Array.from({ length: gridSize }).map(
                                    (_, colIndex) => {
                                        const index =
                                            rowIndex * gridSize + colIndex;
                                        const value = values[index] ?? "";
                                        const isTooLong = value.length > 80;
                                        const isCenter = index === 12;
                                        const cellClasses = [
                                            styles["desktop-bingo__cell"],
                                            tooLongClass(value),
                                            isCenter
                                                ? styles[
                                                      "desktop-bingo__cell--center"
                                                  ]
                                                : "",
                                        ]
                                            .filter(Boolean)
                                            .join(" ");

                                        if (isCenter) {
                                            return (
                                                <td
                                                    className={cellClasses}
                                                    key={colIndex}
                                                >
                                                    <div
                                                        className={
                                                            styles[
                                                                "desktop-bingo__free"
                                                            ]
                                                        }
                                                    >
                                                        <span
                                                            className={
                                                                styles[
                                                                    "desktop-bingo__free-label"
                                                                ]
                                                            }
                                                        >
                                                            FREE
                                                        </span>
                                                        <span
                                                            className={
                                                                styles[
                                                                    "desktop-bingo__free-sub"
                                                                ]
                                                            }
                                                        >
                                                            center space
                                                        </span>
                                                    </div>
                                                </td>
                                            );
                                        }

                                        return (
                                            <td
                                                className={cellClasses}
                                                key={colIndex}
                                            >
                                                <textarea
                                                    aria-label={`Goal ${
                                                        index + 1
                                                    }`}
                                                    className={
                                                        styles[
                                                            "desktop-bingo__input"
                                                        ]
                                                    }
                                                    value={value}
                                                    rows={3}
                                                    maxLength={160}
                                                    dir="ltr"
                                                    aria-invalid={
                                                        isTooLong || undefined
                                                    }
                                                    onChange={(e) =>
                                                        onChange(
                                                            index,
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </td>
                                        );
                                    }
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};
