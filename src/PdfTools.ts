import { jsPDF } from "jspdf";
import goalsImage from "./assets/2025Goals.png";

interface PdfConfig {
    year: string;
    name: string;
}

export const CreatePdf = (config: PdfConfig, goals: string[]) => {
    if (goals.length === 0) {
        alert("You need to set some goals first!");
        // return;
    }

    const name = config.name.endsWith("'s") ? config.name : `${config.name}'s`;

    // Default export is a4 paper, portrait, using millimeters for units
    const doc = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: "a4",
    });

    doc.addImage(goalsImage, "PNG", 0, 0, 210, 297);

    doc.setFontSize(48);
    doc.setTextColor("#00bf63");
    doc.setFont("helvetica", "bold");
    doc.text(name, 105, 35, { align: "center" }, "center");
    doc.setFontSize(15);


    goals.forEach((goal, index) => {
        const goalLength = goal.length;
        let fontSize = 15;
        doc.setFontSize(fontSize);

        if (goalLength > 40) {
            fontSize = 12;
            doc.setFontSize(fontSize);
        }

        const x = 33 + (index % 5) * 36;
        const y = 92 + Math.floor(index / 5) * 42;
        doc.text(goal, x, y, { align: "center", maxWidth: 30 }, "center");
    });

    doc.save("a4.pdf");
};
