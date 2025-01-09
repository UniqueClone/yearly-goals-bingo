import React, { useRef, useEffect, useState } from "react";

interface InputTableProps {
    values: string[];
    onChange: (index: number, value: string) => void;
}

export const InputTable: React.FC<InputTableProps> = ({ values, onChange }) => {
    const gridSize = 5;
    const [currentValues, setCurrentValues] = useState([...values]);
    const cellsRefs = useRef<(HTMLTableCellElement | null)[]>([]);

    const tooLongClass = (value: string) => {
        return value.length > 80 ? "too-long" : "";
    };

    const handleInput = (
        e: React.FormEvent<HTMLTableCellElement>,
        index: number
    ) => {
        const newValues = [...currentValues];
        newValues[index] = (e.target as HTMLTableCellElement).innerText;
        setCurrentValues(newValues);
    };

    const handleBlur = (index: number) => {
        onChange(index, currentValues[index]);
    };

    useEffect(() => {
        setCurrentValues([...values]);
    }, [values]);

    return (
        <table
            style={{
                borderCollapse: "collapse",
                minWidth: "600px",
                maxWidth: "90vw",
                margin: "0 auto",
                backgroundColor: "#f9f9f9",
                // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "4px",
                overflow: "hidden",
            }}
        >
            <tbody>
                {Array.from({ length: gridSize }).map((_, rowIndex) => (
                    <tr key={rowIndex}>
                        {Array.from({ length: gridSize }).map((_, colIndex) => {
                            const index = rowIndex * gridSize + colIndex;
                            return (
                                <td
                                    ref={(el) =>
                                        (cellsRefs.current[index] = el)
                                    }
                                    className={tooLongClass(
                                        currentValues[index]
                                    )}
                                    key={colIndex}
                                    style={{
                                        border: "2px solid #ccc",
                                        outline: "1px solid #888",
                                        color: "#333",
                                        padding: "10px",
                                        minWidth: "100px",
                                        maxWidth: "150px",
                                        maxHeight: "200px",
                                        wordWrap: "break-word",
                                        backgroundColor: "#fff",
                                        textAlign: "center",
                                        verticalAlign: "middle",
                                    }}
                                    contentEditable={true}
                                    suppressContentEditableWarning={true}
                                    onInput={(e) => handleInput(e, index)}
                                    onBlur={() => handleBlur(index)}
                                >
                                    {values[index]}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
