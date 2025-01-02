import React from "react";

interface InputTableProps {
  values: string[];
  onChange: (index: number, value: string) => void;
}

export const InputTable: React.FC<InputTableProps> = ({ values, onChange }) => {
  const gridSize = 5;

  return (
    <table
      style={{
        borderCollapse: "collapse",
        // width: "90vw",
        minWidth: "600px",
        maxWidth: "90vw",
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
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
                  key={colIndex}
                  style={{
                    border: "1px solid #ddd",
                    color: "#333",
                    padding: "10px",
                    minWidth: "100px",
                    maxWidth: "200px",
                    maxHeight: "200px",
                    wordWrap: "break-word",
                    backgroundColor: "#fff",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                  onBlur={(e) =>
                    onChange(
                      index,
                      (e.target as HTMLTableCellElement).innerText
                    )
                  }
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
