import type { Metadata } from "next";
import QuizGame from "@/components/QuizGame";

export const metadata: Metadata = {
    title: "First 18 Elements | Untitled Quiz Website",
};

const elementsGrid = [
    ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron"],
    ["Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon"],
    ["Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus"],
    ["Sulfur", "Chlorine", "Argon"],
];

export default function ElementsPage() {
    return (
        <QuizGame
            quizId="first-18-elements"
            title="First 18 Elements"
            grid={elementsGrid}
        />
    );
}