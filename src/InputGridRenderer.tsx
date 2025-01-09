import React, { useEffect } from "react";
import { InputTable } from "./InputTable";
import { useScreenSize } from "./useScreenSize";
import { InputList } from "./InputList";

interface InputGridRendererProps {
    name: string;
    setName: (name: string) => void;
    goals: string[];
    // setGoals: (goals: string[]) => void;
    handleGoalChange: (index: number, value: string) => void;
    setAllGoals: (goals: string[]) => void;
}

export const InputGridRenderer: React.FC<InputGridRendererProps> = (props) => {
    const { name, setName, goals, handleGoalChange, setAllGoals } = props;

    // const [values, setValues] = useState<string[]>(Array(25).fill(""));
    //   const [showGrid, setShowGrid] = useState<boolean>(false);

    const localStorageName = localStorage.getItem("name");
    const localStorageValues = localStorage.getItem("values");

    // Local Storage: Save the values to local storage when they change
    useEffect(() => {
        if (localStorageName) {
            setName(localStorageName);
        }
        if (localStorageValues) {
            setAllGoals(JSON.parse(localStorageValues));
        }
    }, []);

    // Local Storage: Update local storage when values change
    React.useEffect(() => {
        localStorage.setItem("values", JSON.stringify(goals));
        localStorage.setItem("name", name);
    }, [goals, name]);

    // const handleChange = (index: number, value: string) => {
    //     const updatedValues = [...goals];
    //     updatedValues[index] = value;
    //     setGo(updatedValues);
    // };

    // const handleSubmit = () => {
    //     console.log("handleSubmit called");

    //     // Validate that the name is not empty
    //     if (name.trim() === "") {
    //         alert("Please enter your name.");
    //         return;
    //     }

    //     // Validate that all goals are less than 60 characters
    //     for (const value of goals) {
    //         if (value.length > 60) {
    //             alert("Please enter a goal that is less than 60 characters.");
    //             return;
    //         }
    //     }

    //     console.log("handleSubmit passed validation");
    //     onSubmit();
    // };

    const { width } = useScreenSize();

    return (
        <div
            style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "100%",
            }}
        >
            {/* <h1>Bingo Goal Input</h1> */}

            <p>
                Enter your goals below. You can enter up to 25 goals. Once you
                are finished, click the button to shuffle and create a PDF.
            </p>

            <p>
                <strong>Note:</strong> You can only enter one goal per cell and
                goals should be less than 80 characters long.
            </p>

            {/* <div className="input-label" id={"namelabel"}>
                What is your name?
            </div>
            <input
                aria-labelledby={"namelabel"}
                id={"name"}
                placeholder={"Name"}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="name-input"
            /> */}

            <div>
                {width > 935 ? (
                    <InputTable values={goals} onChange={handleGoalChange} />
                ) : (
                    <InputList values={goals} onChange={handleGoalChange} />
                )}
                {/* <button
                    onClick={handleSubmit}
                    style={{ marginTop: "20px", padding: "10px 20px" }}
                >
                    Shuffle and Create PDF
                </button>
                <div
                    id="pdfviewer"
                    style={{
                        width: "100vw",
                    }}
                /> */}
            </div>
        </div>
    );
};
