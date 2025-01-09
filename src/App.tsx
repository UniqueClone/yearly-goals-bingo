import { useEffect, useState } from "react";
import "./App.css";
import { CreatePdf } from "./PdfTools";
import { InputGridRenderer } from "./InputGridRenderer";

function App() {
    const [name, setName] = useState<string>("");
    const [goals, setGoals] = useState<string[]>(Array(25).fill(""));
    const [canCreatePdf, setCanCreatePdf] = useState<boolean>(true);
    const year = new Date().getFullYear();

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

    return (
        <>
            <h1>Yearly Goals Bingo {year}</h1>
            <div className="card">
                <label
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    What is your name? <br />
                    <input
                        style={{
                            padding: "10px",
                            margin: "10px 0",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            color: "#333",
                            backgroundColor: "#f9f9f9",
                        }}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </div>
            <InputGridRenderer
                name={name}
                setName={setName}
                goals={goals}
                handleGoalChange={handleGoalChange}
                setAllGoals={setGoals}
            />
            <div className="card">
                <button
                    disabled={!canCreatePdf}
                    onClick={() => CreatePdf(pdfConfig, goals)}
                    className="button"
                    id="create-pdf"
                >
                    Create PDF
                </button>
                <p>Click the button to create a PDF with your bingo card!</p>
            </div>
        </>
    );
}

export default App;
