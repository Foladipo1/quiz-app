// This page is very simple, simply containing the basic page layout and
// the data for the quiz. All three quiz pages are more or less the same.

import type { Metadata } from "next";
import QuizGame from "@/components/QuizGame";
import Leaderboard from "@/components/Leaderboard";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
    title: "50 States | Untitled Quiz Website",
};

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
        <PageLayout>
            <QuizGame
                quizId="us-states"
                title="50 States"
                grid={statesGrid}
            />
            <Leaderboard quizId="us-states" />
        </PageLayout>
    );
}