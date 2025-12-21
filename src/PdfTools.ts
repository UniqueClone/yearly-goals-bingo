import { jsPDF } from "jspdf";
import goalsImage from "./assets/2026 Goals.png";

interface PdfConfig {
    year: string;
    name: string;
}

export const CreatePdf = (config: PdfConfig, goals: string[]) => {
    if (goals.length === 0) {
        alert("You need to set some goals first!");
    }

    const centerIndex = 12;
    const boardSlots = Array.from({ length: 25 }, (_, i) => i).filter(
        (i) => i !== centerIndex
    );

    const goalsForBoard = boardSlots.map((slotIndex) => goals[slotIndex] ?? "");
    const shuffledGoals = goalsForBoard.sort(() => Math.random() - 0.5);

    let name = config.name;

    if (name !== "") {
        name = config.name.endsWith("'s") ? config.name : `${config.name}'s`;
    }

    // Default export is a4 paper, portrait, using millimeters for units
    const doc = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: "a4",
    });

    doc.addImage(goalsImage, "PNG", 0, 0, 210, 297);

    doc.setFontSize(48);
    doc.setTextColor("#ff3131");
    doc.setFont("helvetica", "bold");
    doc.text(name, 105, 35, { align: "center" }, "center");
    doc.setFontSize(15);
    doc.setFont("helvetica", "normal");

    boardSlots.forEach((boardIndex, i) => {
        const goal = shuffledGoals[i] ?? "";
        const goalLength = goal.length;
        let fontSize = 15;
        doc.setFontSize(fontSize);

        if (goalLength > 40) {
            fontSize = 12;
            doc.setFontSize(fontSize);
        }

        const x = 33 + (boardIndex % 5) * 36;
        const y = 92 + Math.floor(boardIndex / 5) * 42;

        if (goal.trim().length > 0) {
            doc.text(goal, x, y, { align: "center", maxWidth: 30 }, "center");
        }
    });

    doc.save(`${config.name}'s 2026 Goals.pdf`);
};
