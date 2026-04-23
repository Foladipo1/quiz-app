"use client";

import styled from "styled-components";
import { LeaderboardEntry } from "@/types";

type Props = {
    entries: LeaderboardEntry[];
};

const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
    max-width: 600px;
`;

const Title = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const THead = styled.thead`
    background-color: #f0f0f0;
`;

const TH = styled.th`
    padding: 0.75rem;
    text-align: left;
    border-bottom: 2px solid #ddd;
`;

const TD = styled.td`
    padding: 0.75rem;
    border-bottom: 1px solid #ddd;
`;

const TR = styled.tr`
    &:hover {
        background-color: #fafafa;
    }
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
            <p>No entries yet. Be the first!</p>
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
            <TR key={entry.id}>
                <TD>{index + 1}</TD>
                <TD>{entry.name}</TD>
                <TD>{entry.score}</TD>
                <TD>{formatTime(entry.time)}</TD>
    </TR>
))}
    </tbody>
    </Table>
    </Container>
);
}