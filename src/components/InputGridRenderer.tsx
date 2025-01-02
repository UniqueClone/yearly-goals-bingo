import React, { useState } from "react";
import { InputTable } from "./InputTable";
import { useScreenSize } from "../useScreenSize";
import { InputList } from "./InputList";

export const InputGridRenderer: React.FC = () => {
  const [values, setValues] = useState<string[]>(Array(25).fill(""));
  //   const [showGrid, setShowGrid] = useState<boolean>(false);

  const handleChange = (index: number, value: string) => {
    const updatedValues = [...values];
    updatedValues[index] = value;
    setValues(updatedValues);
  };

  const handleSubmit = () => {};

  const { width } = useScreenSize();

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        maxWidth: "100%",
      }}
    >
      <h1>Bingo Goal Input</h1>

      <div>
        {width > 750 ? (
          <InputTable values={values} onChange={handleChange} />
        ) : (
          <InputList values={values} onChange={handleChange} />
        )}
        <button
          onClick={handleSubmit}
          style={{ marginTop: "20px", padding: "10px 20px" }}
        >
          Shuffle and Create PDF
        </button>
      </div>
    </div>
  );
};
