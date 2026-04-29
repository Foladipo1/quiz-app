// This page is very simple, simply containing the basic page layout and
// the data for the quiz. All three quiz pages are more or less the same.

import type { Metadata } from "next";
import QuizGame from "@/components/QuizGame";
import Leaderboard from "@/components/Leaderboard";
import PageLayout from "@/components/PageLayout";

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
        <PageLayout>
            <QuizGame
                quizId="mbta-b-branch"
                title="B Branch Stations"
                grid={mbtaGrid}
            />
            <Leaderboard quizId="mbta-b-branch" />
        </PageLayout>
    );
}