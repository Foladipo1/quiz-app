/*
 * src/lib/getLeaderboard.ts
 * Mofolaoluwarera Oladipo (foladipo@bu.edu)
 *
 * Server action that fetches the top 20 leaderboard entries for a
 * specific quiz from MongoDB, sorted by highest score then lowest time
 * as specified in the project requirements.
 *
 */

"use server";

import { LeaderboardEntry } from "@/types";
import getCollection, { LEADERBOARD_COLLECTION } from "@/db";

export default async function getLeaderboard(quizId: string): Promise<LeaderboardEntry[]> {
    const collection = await getCollection(LEADERBOARD_COLLECTION);

    /* Sort by score descending, then time ascending to break ties by fastest time */
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