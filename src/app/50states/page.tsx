import type { Metadata } from "next";
import QuizGame from "@/components/QuizGame";

export const metadata: Metadata = {
    title: "50 States | Untitled Quiz Website",
};

// This grid controls where each answer appears in the table.
const statesGrid = [
    ["Alabama", "Alaska", "Arizona", "Arkansas", "California"],
    ["Colorado", "Connecticut", "Delaware", "Florida", "Georgia"],
    ["Hawaii", "Idaho", "Illinois", "Indiana", "Iowa"],
    ["Kansas", "Kentucky", "Louisiana", "Maine", "Maryland"],
    ["Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri"],
    ["Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey"],
    ["New Mexico", "New York", "North Carolina", "North Dakota", "Ohio"],
    ["Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina"],
    ["South Dakota", "Tennessee", "Texas", "Utah", "Vermont"],
    ["Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
];

export default function StatesPage() {
    return (
        <QuizGame
            quizId="us-states"
            title="50 States"
            grid={statesGrid}
        />
    );
}