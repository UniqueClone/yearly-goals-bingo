import React from "react";

interface InputListProps {
    values: string[];
    onChange: (index: number, value: string) => void;
}

export const InputList: React.FC<InputListProps> = (props) => {
    const { values, onChange } = props;

    return (
        <div>
            {values.map((value, index) => (
                <div className="input-container" key={index}>
                    <div className="input-label" id={`goal${index + 1}label`}>
                        Goal {index + 1}:
                    </div>
                    <input
                        aria-labelledby={`goal${index + 1}label`}
                        id={`goal${index + 1}`}
                        placeholder={`Goal ${index + 1}`}
                        style={{
                            width: "100%",
                            padding: "10px",
                            margin: "10px 0",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            color: "#333",
                            backgroundColor: "#f9f9f9",
                        }}
                        type="text"
                        value={value}
                        onChange={(e) => onChange(index, e.target.value)}
                    />
                </div>
            ))}
        </div>
    );
};
