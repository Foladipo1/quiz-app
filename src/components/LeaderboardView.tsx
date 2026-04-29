/*
 * src/components/LeaderboardView.tsx
 * Mofolaoluwarera Oladipo
 *
 * Client component responsible for rendering the leaderboard table.
 * Marked "use client" because styled-components requires a browser
 * environment to generate and inject CSS class names at runtime.
 *
 */

"use client";

import styled from "styled-components";
import { LeaderboardEntry } from "@/types";

type Props = {
    entries: LeaderboardEntry[];
};

const Container = styled.div`
    font-family: Calibri, Arial, sans-serif;
    background: linear-gradient(to bottom, #ffffff, #f4f4ff);
    border-radius: 18px;
    box-shadow: 0 10px 24px rgba(90, 90, 150, 0.18);
    padding: 1.5rem;
    min-width: 280px;
    max-width: 340px;
    position: sticky;
    top: 2rem;
`;

const Title = styled.h2`
    text-align: center;
    padding: 0.75rem 0;
    font-size: max(1.5vw, 2vh);
    color: #3d3d8f;
    margin: 0 0 1rem 0;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 6px;
`;

const THead = styled.thead``;

const TH = styled.th`
    padding: 0.5rem 0.75rem;
    text-align: left;
    color: #444488;
    font-size: 0.9rem;
    border-bottom: 2px solid #d9d9ff;
`;

const TD = styled.td`
    padding: 0.6rem 0.75rem;
    color: #444488;
    font-size: 0.95rem;
    background: linear-gradient(to bottom, #ffffff, #f2f2fb);
    border: 1px solid #d9d9ff;

    &:first-child {
        border-radius: 10px 0 0 10px;
    }

    &:last-child {
        border-radius: 0 10px 10px 0;
    }
`;

const EmptyText = styled.p`
    text-align: center;
    color: #666699;
    font-size: 0.95rem;
`;

function formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function LeaderboardView({ entries }: Props) {
    if (entries.length === 0) {
        return (
            <Container>
                <Title>Leaderboard</Title>
                <EmptyText>No entries yet. Be the first!</EmptyText>
            </Container>
        );
    }

    return (
        <Container>
            <Title>Leaderboard</Title>
            <Table>
                <THead>
                    <tr>
                        <TH>#</TH>
                        <TH>Name</TH>
                        <TH>Score</TH>
                        <TH>Time</TH>
                    </tr>
                </THead>
                <tbody>
                {entries.map((entry, index) => (
                    <tr key={entry.id}>
                        <TD>{index + 1}</TD>
                        <TD>{entry.name}</TD>
                        <TD>{entry.score}</TD>
                        <TD>{formatTime(entry.time)}</TD>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
}