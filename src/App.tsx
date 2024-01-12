import { useState } from "react";
import "./App.css";
import { Generator } from "./pdf-generator/Generator";
import { getDefaultGoals } from "./pdf-generator/GeneratorUtils";

function App() {
    const [nameInput, setNameInput] = useState<string>("");
    const [goals, setGoals] = useState<string[]>(getDefaultGoals());

    const updateGoals = (event: any, goalIndex: number) => {
        console.log("Updating goals", event.target.value, goalIndex);
        const currentGoals = goals;
        currentGoals[goalIndex] = event.target.value;
        setGoals(currentGoals);
    };

    return (
        <div className="App">
            <body>
                <Introduction />
                <div className="name-container">
                    <div className="input-label" id="namelabel">
                        Whose goals are these?
                    </div>
                    <input
                        aria-labelledby="namelabel"
                        id="name"
                        placeholder="Name"
                        type="text"
                        onChange={(e) => setNameInput(e.target.value)}
                    />
                </div>
                <h2>What are your goals for this year?</h2>

                <div className="goals-form">
                    <div className="input-container">
                        <div className="input-label" id="goal1label">
                            Goal 1:
                        </div>
                        <input
                            aria-labelledby="goal1label"
                            id="goal1"
                            placeholder="Goal 1"
                            type="text"
                            onChange={(e) => updateGoals(e, 0)}
                        />
                    </div>
                    <div className="input-container">
                        <div className="input-label" id="goal2label">
                            Goal 2:
                        </div>
                        <input
                            aria-labelledby="goal2label"
                            id="goal2"
                            placeholder="Goal 2"
                            type="text"
                            // value={goals[1]}
                            onChange={(e) => updateGoals(e, 1)}
                        />
                    </div>

                    <div className="input-container">
                        <div className="input-label" id="goal3label">
                            Goal 3:
                        </div>
                        <input
                            aria-labelledby="goal3label"
                            id="goal3"
                            placeholder="Goal 3"
                            type="text"
                            onChange={(e) => updateGoals(e, 2)}
                        />
                    </div>

                    <div className="input-container">
                        <div className="input-label" id="goal4label">
                            Goal 4:
                        </div>
                        <input
                            aria-labelledby="goal4label"
                            id="goal4"
                            placeholder="Goal 4"
                            type="text"
                            onChange={(e) => updateGoals(e, 3)}
                        />
                    </div>

                    <div className="input-container">
                        <div className="input-label" id="goal5label">
                            Goal 5:
                        </div>
                        <input
                            aria-labelledby="goal5label"
                            id="goal5"
                            placeholder="Goal 5"
                            type="text"
                            onChange={(e) => updateGoals(e, 4)}
                        />
                    </div>

                    <div className="input-container">
                        <div className="input-label" id="goal6label">
                            Goal 6:
                        </div>
                        <input
                            aria-labelledby="goal6label"
                            id="goal6"
                            placeholder="Goal 6"
                            type="text"
                            onChange={(e) => updateGoals(e, 5)}
                        />
                    </div>

                    <div className="input-container">
                        <div className="input-label" id="goal7label">
                            Goal 7:
                        </div>
                        <input
                            aria-labelledby="goal7label"
                            id="goal7"
                            placeholder="Goal 7"
                            type="text"
                            onChange={(e) => updateGoals(e, 6)}
                        />
                    </div>

                    <div className="input-container">
                        <div className="input-label" id="goal8label">
                            Goal 8:
                        </div>
                        <input
                            aria-labelledby="goal8label"
                            id="goal8"
                            placeholder="Goal 8"
                            type="text"
                            onChange={(e) => updateGoals(e, 7)}
                        />
                    </div>

                    <div className="input-container">
                        <div className="input-label" id="goal9label">
                            Goal 9:
                        </div>
                        <input
                            aria-labelledby="goal9label"
                            id="goal9"
                            placeholder="Goal 9"
                            type="text"
                            onChange={(e) => updateGoals(e, 8)}
                        />
                    </div>

                    <div className="input-container">
                        <div className="input-label" id="goal10label">
                            Goal 10:
                        </div>
                        <input
                            aria-labelledby="goal10label"
                            id="goal10"
                            placeholder="Goal 10"
                            type="text"
                            onChange={(e) => updateGoals(e, 9)}
                        />
                    </div>

                    <div className="input-container">
                        <div className="input-label" id="goal11label">
                            Goal 11:
                        </div>
                        <input
                            aria-labelledby="goal11label"
                            id="goal11"
                            placeholder="Goal 11"
                            type="text"
                            onChange={(e) => updateGoals(e, 10)}
                        />
                    </div>

                    <div className="input-container">
                        <div className="input-label" id="goal12label">
                            Goal 12:
                        </div>
                        <input
                            aria-labelledby="goal12label"
                            id="goal12"
                            placeholder="Goal 12"
                            type="text"
                            onChange={(e) => updateGoals(e, 11)}
                        />
                    </div>

                    <div className="input-container">
                        <div className="input-label" id="goal13label">
                            Goal 13:
                        </div>
                        <input
                            aria-labelledby="goal13label"
                            id="goal13"
                            placeholder="Goal 13"
                            type="text"
                            onChange={(e) => updateGoals(e, 12)}
                        />
                    </div>

                    <div className="input-container">
                        <div className="input-label" id="goal14label">
                            Goal 14:
                        </div>
                        <input
                            aria-labelledby="goal14label"
                            id="goal14"
                            placeholder="Goal 14"
                            type="text"
                            onChange={(e) => updateGoals(e, 13)}
                        />
                    </div>

                    <div className="input-container">
                        <div className="input-label" id="goal15label">
                            Goal 15:
                        </div>
                        <input
                            aria-labelledby="goal15label"
                            id="goal15"
                            placeholder="Goal 15"
                            type="text"
                            onChange={(e) => updateGoals(e, 14)}
                        />
                    </div>

                    <div className="input-container">
                        <div className="input-label" id="goal16label">
                            Goal 16:
                        </div>
                        <input
                            aria-labelledby="goal16label"
                            id="goal16"
                            placeholder="Goal 16"
                            type="text"
                            onChange={(e) => updateGoals(e, 15)}
                        />
                    </div>
                </div>
                <button
                    title="Generate PDF"
                    type="submit"
                    onClick={() => generatePDF(nameInput, goals)}
                >
                    Generate PDF
                </button>
                {/* <div id="container" /> */}
            </body>
        </div>
    );
}

const generatePDF = (name: string, goals: string[]) => {
    console.log("Generating PDF");
    Generator(name, goals);
};

const Introduction: React.FC = () => {
    return (
        <div>
            <h1>2024 Goals Bingo Generator!</h1>
            <h2>What is this?</h2>
            <p>
                This is a tool to help you generate a PDF of your goals for the
                year 2024. You can use this to help you visualize your goals and
                make them more real.
            </p>
            <p>
                New Year's resolutions are often forgotten by the end of
                January, and often because they are unrealistic and people set
                an unrealistic number of goals. This tool is designed to help
                you choose goals with a higher chance of success.{" "}
            </p>
            <p>
                You do not aim to complete all of your goals, but rather to
                complete a bingo line of goals. Good luck!
            </p>
        </div>
    );
};

export default App;
