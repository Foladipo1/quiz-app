/*
 * src/types.ts
 * Mofolaoluwarera Oladipo (foladipo@bu.edu)
 *
 * Shared TypeScript types for the application.
 * Centralizing types here ensures consistency between
 * server actions, components, and MongoDB documents.
 */

export type LeaderboardEntry = {
    id: string;
    quizId: string;
    name: string;
    score: number;
    time: number;
    createdAt: Date;
};