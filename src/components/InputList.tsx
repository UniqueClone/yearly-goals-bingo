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
            type="text"
            value={value}
            onChange={(e) => onChange(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};
