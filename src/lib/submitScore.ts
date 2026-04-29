/*
 * src/lib/submitScore.ts
 * Mofolaoluwarera Oladipo (foladipo@bu.edu)
 *
 * Server action that validates and persists a new leaderboard entry
 * to MongoDB.
 *
 */

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

    /* Reject bad requests before touching the database */
    if (!name || typeof score !== "number" || typeof time !== "number") {
        return { error: "Invalid submission" };
    }

    const collection = await getCollection(LEADERBOARD_COLLECTION);

    /* Fetch current top 20 to check if new score qualifies */
    const entries = await collection
        .find({ quizId })
        .sort({ score: -1, time: 1 })
        .limit(20)
        .toArray();

    /* Score qualifies if leaderboard isn't full, or if it beats
     * the last entry by score or by time on equal score */
    const qualifies =
        entries.length < 20 ||
        score > entries[entries.length - 1].score ||
        (score === entries[entries.length - 1].score &&
            time < entries[entries.length - 1].time);

    if (!qualifies) {
        return { error: "Score does not qualify for leaderboard" };
    }

    /* Insert new entry with timestamp for record keeping */
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

    /* Return updated leaderboard so frontend can refresh immediately */
    const updated = await getLeaderboard(quizId);
    return { result: updated };
}