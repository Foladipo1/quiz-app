"use server";

import { LeaderboardEntry } from "@/types";
import getCollection, { LEADERBOARD_COLLECTION } from "@/db";
import getLeaderboard from "@/lib/getLeaderboard";

export default async function submitScore(
    quizId: string,
    name: string,
    score: number,
    time: number
): Promise<{ error?: string; result?: LeaderboardEntry[] }> {

    if (!name || typeof score !== "number" || typeof time !== "number") {
        return { error: "Invalid submission" };
    }

    const collection = await getCollection(LEADERBOARD_COLLECTION);

    const entries = await collection
        .find({ quizId })
        .sort({ score: -1, time: 1 })
        .limit(20)
        .toArray();

    const qualifies =
        entries.length < 20 ||
        score > entries[entries.length - 1].score ||
        (score === entries[entries.length - 1].score &&
            time < entries[entries.length - 1].time);

    if (!qualifies) {
        return { error: "Score does not qualify for leaderboard" };
    }

    const res = await collection.insertOne({
        quizId,
        name,
        score,
        time,
        createdAt: new Date(),
    });

    if (!res.acknowledged) {
        return { error: "Failed to save score" };
    }

    const updated = await getLeaderboard(quizId);
    return { result: updated };
}