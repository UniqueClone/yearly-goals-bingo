import React from "react";
import styles from "./InputList.module.css";

interface InputListProps {
    values: string[];
    onChange: (index: number, value: string) => void;
}

export const InputList: React.FC<InputListProps> = (props) => {
    const { values, onChange } = props;

    const totalGoalSlots = 24;
    const remaining =
        totalGoalSlots -
        values.filter((v, index) => index !== 12 && v.trim().length > 0).length;

    return (
        <section className={styles["mobile-goals"]}>
            <header className={styles["mobile-goals__header"]}>
                <h3 className={styles["mobile-goals__title"]}>Your 24 goals</h3>
                <p className={styles["mobile-goals__subtitle"]}>
                    Add a short goal in each slot except the free center space.
                    You have
                    <span className={styles["mobile-goals__count"]}>
                        {" "}
                        {remaining}{" "}
                    </span>
                    {remaining === 1
                        ? "goal left to fill"
                        : "goals left to fill"}
                    .
                </p>
            </header>

            <ol
                className={styles["mobile-goals__list"]}
                aria-label="Yearly goals list"
            >
                {values.map((value, index) => {
                    const id = `goal${index + 1}`;
                    const labelId = `${id}-label`;
                    const tooLong = value.length > 80;

                    if (index === 12) {
                        return (
                            <li key={id}>
                                <article
                                    className={`${styles["goal-card"]} ${styles["goal-card--free"]}`}
                                >
                                    <div
                                        className={styles["goal-card__header"]}
                                    >
                                        <span
                                            className={
                                                styles["goal-card__badge"]
                                            }
                                        >
                                            ★
                                        </span>
                                        <span
                                            className={
                                                styles["goal-card__label"]
                                            }
                                        >
                                            Center free space
                                        </span>
                                    </div>
                                    <p className={styles["goal-card__hint"]}>
                                        This is a free space on your bingo
                                        card—no goal needed here.
                                    </p>
                                </article>
                            </li>
                        );
                    }

                    const hintId = `${id}-hint`;

                    return (
                        <li key={id}>
                            <article className={styles["goal-card"]}>
                                <div className={styles["goal-card__header"]}>
                                    <span
                                        className={styles["goal-card__badge"]}
                                    >
                                        #{index + 1}
                                    </span>
                                    <label
                                        id={labelId}
                                        className={styles["goal-card__label"]}
                                        htmlFor={id}
                                    >
                                        Goal {index + 1}
                                    </label>
                                </div>

                                <textarea
                                    id={id}
                                    className={`${styles["goal-card__input"]}${
                                        tooLong
                                            ? ` ${styles["goal-card__input--error"]}`
                                            : ""
                                    }`}
                                    rows={3}
                                    maxLength={160}
                                    placeholder="Describe a specific, realistic goal you want to hit this year."
                                    value={value}
                                    aria-invalid={tooLong || undefined}
                                    aria-describedby={hintId}
                                    onChange={(e) =>
                                        onChange(index, e.target.value)
                                    }
                                />

                                <div className={styles["goal-card__meta"]}>
                                    <span
                                        id={hintId}
                                        className={styles["goal-card__hint"]}
                                    >
                                        {tooLong
                                            ? "This goal is too long; shorten it to 80 characters or fewer so it fits and keeps the PDF button enabled."
                                            : "Keep it under 80 characters so it fits nicely on the bingo card."}
                                    </span>
                                    <span
                                        className={styles["goal-card__counter"]}
                                    >
                                        {value.length}/80
                                    </span>
                                </div>
                            </article>
                        </li>
                    );
                })}
            </ol>
        </section>
    );
};
