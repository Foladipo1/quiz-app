/*
 * src/components/Leaderboard.tsx
 * Mofolaoluwarera Oladipo
 *
 * Server component responsible for fetching leaderboard data from MongoDB
 * and passing it to the client-side LeaderboardView for rendering.
 *
 */

import getLeaderboard from "@/lib/getLeaderboard";
import LeaderboardView from "@/components/LeaderboardView";

type Props = {
    quizId: string;
};

export default async function Leaderboard({ quizId }: Props) {
    const entries = await getLeaderboard(quizId);

    return <LeaderboardView entries={entries} />;
}