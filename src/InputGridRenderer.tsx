import React, { useEffect } from "react";
import { InputTable } from "./InputTable";
import { useScreenSize } from "./useScreenSize";
import { InputList } from "./InputList";
import styles from "./InputGridRenderer.module.css";

interface InputGridRendererProps {
    name: string;
    setName: (name: string) => void;
    goals: string[];
    handleGoalChange: (index: number, value: string) => void;
    setAllGoals: (goals: string[]) => void;
}

export const InputGridRenderer: React.FC<InputGridRendererProps> = (props) => {
    const { name, goals, handleGoalChange } = props;

    // Local Storage: Update local storage when values change
    useEffect(() => {
        localStorage.setItem("values", JSON.stringify(goals));
        localStorage.setItem("name", name);
    }, [goals, name]);

    const { width } = useScreenSize();

    return (
        <div className={styles["goals-layout"]}>
            <div className={styles["goals-layout__copy"]}>
                <h2 className={styles["goals-layout__title"]}>
                    Fill in your 24 goals
                </h2>
                <p className={styles["goals-layout__body"]}>
                    Use the squares around the center for simple, specific
                    goals. The center is a free space, so you get one spot for
                    free.
                </p>

                <ul className={styles["goals-layout__tips"]}>
                    <li>
                        Keep each goal under 80 characters so it stays legible.
                    </li>
                    <li>
                        Aim for a balance: health, relationships, learning, fun,
                        and more.
                    </li>
                    <li>
                        You can come back and tweak goals later—nothing is set
                        in stone.
                    </li>
                </ul>
            </div>

            <div className={styles["goals-layout__grid"]}>
                {width > 935 ? (
                    <InputTable values={goals} onChange={handleGoalChange} />
                ) : (
                    <InputList values={goals} onChange={handleGoalChange} />
                )}
            </div>
        </div>
    );
};
