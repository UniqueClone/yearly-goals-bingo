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

const BALANCED_PRESET_24: string[] = [
    "Walk 8k steps four days a week",
    "Strength workout twice per week",
    "Go to bed before 11pm on weeknights",
    "Read 12 books this year",
    "Call a friend or family member weekly",
    "Plan one date night each month",
    "Take one weekend trip just for fun",
    "Save an extra $1000 for the year",
    "Review budget at the start of each month",
    "Learn the basics of a new skill",
    "Ship one small side project",
    "Update my resume and LinkedIn",
    "Declutter one room each month",
    "Cook a new recipe every two weeks",
    "Keep a simple one-line-a-day journal",
    "Take a full day fully offline each month",
    "Do a 10 minute stretch three times a week",
    "Drink water before coffee each morning",
    "Spend 10 minutes a day tidying",
    "Block one focus session on workdays",
    "Make a list of 25 things I am grateful for",
    "Try one new hobby or class",
    "Volunteer or donate once this year",
    "Plan a small celebration for wins",
];

const FUN_PRESET_24: string[] = [
    "Try a new coffee shop each month",
    "Host a game night with friends",
    "Watch a classic movie I have never seen",
    "Visit a local museum or gallery",
    "Take a photo walk around my city",
    "Plan a picnic in a nearby park",
    "Learn to make one signature dessert",
    "Read a fun fiction book just for pleasure",
    "Attend a live show or concert",
    "Start a small houseplant collection",
    "Try a new restaurant in my area",
    "Spend an afternoon at the library",
    "Build a simple playlist for focused work",
    "Revisit a childhood hobby for one day",
    "Have a phone-free evening once a month",
    "Do a DIY craft or art project",
    "Explore a new neighborhood on foot",
    "Write a postcard or letter to someone",
    "Bake treats and share them with others",
    "Re-read a favorite book from the past",
    "Try a new outdoor activity this year",
    "Collect small mementos from fun days",
    "Create a photo collage of the year",
    "Plan a small end-of-year celebration",
];

const buildPresetGoals = (preset: string[]): string[] => {
    const full = Array(25).fill("");
    let presetIndex = 0;
    for (let i = 0; i < 25; i++) {
        if (i === 12) continue;
        full[i] = preset[presetIndex] ?? "";
        presetIndex += 1;
        if (presetIndex >= preset.length) {
            break;
        }
    }
    return full;
};

export const InputGridRenderer: React.FC<InputGridRendererProps> = (props) => {
    const { name, goals, handleGoalChange, setAllGoals } = props;

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

                <div className={styles["goals-layout__presets"]}>
                    <span className={styles["goals-layout__presets-label"]}>
                        Want inspiration?
                    </span>
                    <button
                        type="button"
                        className={styles["goals-layout__preset-button"]}
                        onClick={() =>
                            setAllGoals(buildPresetGoals(BALANCED_PRESET_24))
                        }
                    >
                        Load balanced example
                    </button>
                    <button
                        type="button"
                        className={styles["goals-layout__preset-button"]}
                        onClick={() =>
                            setAllGoals(buildPresetGoals(FUN_PRESET_24))
                        }
                    >
                        Load just-for-fun goals
                    </button>
                </div>
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
