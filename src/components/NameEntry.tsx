/*
 * src/components/NameEntry.tsx
 * Mofolaoluwarera Oladipo (foladipo@bu.edu)
 *
 * Client component that renders a modal prompting the user to enter
 * their name after achieving a qualifying leaderboard score.
 *
 */

"use client";

import { useState } from "react";
import styled from "styled-components";
import submitScore from "@/lib/submitScore";

type Props = {
    quizId: string;
    score: number;
    time: number;
    onClose: () => void;
    onSubmitted: () => void;
};

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const Modal = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 8px;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Title = styled.h2`
    font-size: 1.5rem;
    margin: 0;
`;

const Subtitle = styled.p`
    margin: 0;
    color: #555;
`;

const Input = styled.input`
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
`;

const ButtonRow = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
`;

const Button = styled.button<{ primary?: boolean }>`
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${({ primary }) => (primary ? "#0070f3" : "#eee")};
    color: ${({ primary }) => (primary ? "white" : "black")};
    &:hover {
        opacity: 0.85;
    }
`;

const ErrorText = styled.p`
    color: red;
    margin: 0;
    font-size: 0.875rem;
`;

/* Converts raw seconds to M:SS display format */
function formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function NameEntryModal({ quizId, score, time, onClose, onSubmitted }: Props) {
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit() {
        /* Prevent empty name submissions before hitting the server */
        if (!name.trim()) {
            setError("Please enter your name.");
            return;
        }

        setLoading(true);

        /* Call server action to validate and persist score to MongoDB */
        const { error } = await submitScore(quizId, name.trim(), score, time);

        if (error) {
            setError(error);
            setLoading(false);
            return;
        }

        /* Trigger leaderboard refresh then close modal on success */
        onSubmitted();
        onClose();
    }

    return (
        <Overlay>
            <Modal>
                <Title>You made the leaderboard!</Title>
                <Subtitle>
                    Score: {score} — Time: {formatTime(time)}
                </Subtitle>
                <Input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={30}
                />
                {error && <ErrorText>{error}</ErrorText>}
                <ButtonRow>
                    {/* Skip closes modal without submitting */}
                    <Button onClick={onClose}>Skip</Button>
                    <Button primary onClick={handleSubmit} disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </Button>
                </ButtonRow>
            </Modal>
        </Overlay>
    );
}