// This page is very simple, simply containing the basic page layout and
// the data for the quiz. All three quiz pages are more or less the same.

import type { Metadata } from "next";
import QuizGame from "@/components/QuizGame";
import Leaderboard from "@/components/Leaderboard";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
    title: "First 20 Elements | Untitled Quiz Website",
};

const elementsGrid = [
    ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron"],
    ["Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon"],
    ["Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus"],
    ["Sulfur", "Chlorine", "Argon","Potassium","Calcium"],
];

export default function ElementsPage() {
    return (
        <PageLayout>
            <QuizGame
                quizId="first-20-elements"
                title="First 20 Elements"
                grid={elementsGrid}
            />
            <Leaderboard quizId="first-20-elements" />
        </PageLayout>
    );
}