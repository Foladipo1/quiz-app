import type { Metadata } from "next";
import QuizGame from "@/components/QuizGame";

export const metadata: Metadata = {
    title: "B Branch Stations | Untitled Quiz Website",
};

const mbtaGrid = [
    ["Boston College", "South Street", "Chestnut Hill Avenue", "Chiswick Road", "Sutherland Road"],
    ["Washington Street", "Warren Street", "Allston Street", "Griggs Street", "Harvard Avenue"],
    ["Packard's Corner", "Babcock Street", "Amory Street", "Boston University Central", "Boston University East"],
    ["Blandford Street", "Kenmore", "Hynes Convention Center", "Copley", "Arlington"],
    ["Boylston", "Park Street", "Government Center"],
];

export default function MbtaPage() {
    return (
        <QuizGame
            quizId="mbta-b-branch"
            title="B Branch Stations"
            grid={mbtaGrid}
        />
    );
}