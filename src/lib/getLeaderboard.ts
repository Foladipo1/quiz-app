"use server";

import { LeaderboardEntry } from "@/types";
import getCollection, { LEADERBOARD_COLLECTION } from "@/db";

export default async function getLeaderboard(quizId: string): Promise<LeaderboardEntry[]> {
    const collection = await getCollection(LEADERBOARD_COLLECTION);

    const entries = await collection
        .find({ quizId })
        .sort({ score: -1, time: 1 })
        .limit(20)
        .toArray();

    return entries.map((entry) => ({
        id: entry._id.toHexString(),
        quizId: entry.quizId,
        name: entry.name,
        score: entry.score,
        time: entry.time,
        createdAt: entry.createdAt,
    }));
}