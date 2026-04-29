    "use client";
    
    /*
    src/components/QuizGame.tsx
    Xinxu Chen (chenxin@bu.edu)
    
    Reusable quiz gameplay component for the final project.
    
    Responsible for this component: Xinxu Chen
    
    This component handles the quiz logic for:
    - starting and resetting a quiz
    - accepting user input
    - checking whether an answer is correct
    - revealing the correct table cell when a correct answer is submitted
    - tracking score and elapsed time
    
    This version also improves the quiz page styling while only changing
    the quiz-related part of the project.
    */
    
    import { useEffect, useMemo, useState } from "react";
    import styled from "styled-components";
    import { getQuizById } from "@/lib/quizzes";
    import { useRouter } from "next/navigation";
    import NameEntryModal from "@/components/NameEntry";
    
    const StyledMain = styled.main`
        text-align: center;
        font-family: Calibri, Arial, sans-serif;
        font-style: normal;
        background: linear-gradient(to bottom, #ffffff, #f4f4ff);
        color: black;
        min-height: 70vh;
        padding: 2rem 2rem 2.5rem 2rem;
        border-radius: 18px;
        box-shadow: 0 10px 24px rgba(90, 90, 150, 0.18);
        flex: 1;
    `;
    
    const StyledH2 = styled.h2`
        text-align: center;
        padding: 0.75rem 0;
        font-size: max(2vw, 3vh);
        color: #3d3d8f;
    `;
    
    const StyledTopCard = styled.div`
        width: min(760px, 92%);
        margin: 0 auto 1.25rem auto;
        padding: 1rem 1.25rem;
        background-color: #f8f8ff;
        border: 1px solid #d9d9ff;
        border-radius: 16px;
        box-shadow: 0 6px 14px rgba(120, 120, 170, 0.12);
    `;
    
    const StyledTimerBox = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;
    `;
    
    const StyledStats = styled.div`
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    `;
    
    const StyledStatPill = styled.div`
        background-color: white;
        border: 1px solid #ccccff;
        border-radius: 999px;
        padding: 0.55rem 1rem;
        font-size: 1rem;
        font-weight: 600;
        color: #444488;
        box-shadow: 0 2px 6px rgba(90, 90, 150, 0.08);
    `;
    
    const StyledStartStop = styled.button`
        text-align: center;
        min-width: 110px;
        font-size: 1rem;
        cursor: pointer;
        padding: 0.65rem 1rem;
        border: none;
        border-radius: 10px;
        background: linear-gradient(to right, #8f8fff, #6f6fe8);
        color: white;
        font-weight: 700;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
    
        &:hover {
            transform: translateY(-1px);
            box-shadow: 0 6px 12px rgba(100, 100, 180, 0.2);
        }
    `;
    
    const StyledInputContainer = styled.form`
        width: min(760px, 92%);
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        margin: 0 auto 1rem auto;
        flex-wrap: wrap;
    `;
    
    const StyledTextbox = styled.input`
        flex: 1;
        min-width: 260px;
        font-size: 1.1rem;
        padding: 0.8rem 0.9rem;
        border: 1px solid #b8b8f5;
        border-radius: 12px;
        outline: none;
        background-color: white;
        box-shadow: inset 0 1px 3px rgba(80, 80, 120, 0.08);
    
        &:focus {
            border-color: #7a7af0;
            box-shadow: 0 0 0 3px rgba(122, 122, 240, 0.14);
        }
    `;
    
    const StyledSubmit = styled.input`
        min-width: 120px;
        font-size: 1rem;
        cursor: pointer;
        padding: 0.8rem 1rem;
        border: none;
        border-radius: 12px;
        background: linear-gradient(to right, #5b7cff, #4e65d9);
        color: white;
        font-weight: 700;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
    
        &:hover {
            transform: translateY(-1px);
            box-shadow: 0 6px 12px rgba(70, 90, 180, 0.2);
        }
    `;
    
    const StyledMessage = styled.p<{ $type: "neutral" | "success" | "error" }>`
        width: min(760px, 92%);
        min-height: 1.6rem;
        margin: 0 auto 1.1rem auto;
        padding: 0.7rem 1rem;
        border-radius: 12px;
        font-size: 0.98rem;
        font-weight: 600;
        background-color: ${({ $type }) =>
            $type === "success" ? "#e6f8ea" : $type === "error" ? "#ffe9e9" : "#f5f5ff"};
        color: ${({ $type }) =>
            $type === "success" ? "#1d6b33" : $type === "error" ? "#a33a3a" : "#4a4a77"};
        border: 1px solid
            ${({ $type }) =>
                $type === "success" ? "#bde7c7" : $type === "error" ? "#f0baba" : "#d6d6f8"};
    `;
    
    const StyledTableWrapper = styled.div`
        width: 100%;
        overflow-x: auto;
        margin-top: 0.5rem;
    `;
    
    const StyledTable = styled.table`
        border-collapse: separate;
        border-spacing: 8px;
        margin: 0 auto;
    `;
    
    const StyledTr = styled.tr``;
    
    const StyledTd = styled.td<{ $revealed: boolean }>`
        width: 10vw;
        min-width: 120px;
        height: 56px;
        padding: 0.65rem 0.75rem;
        border-radius: 12px;
        border: 1px solid ${({ $revealed }) => ($revealed ? "#9fd6ae" : "#d6d6ef")};
        background: ${({ $revealed }) =>
            $revealed
                ? "linear-gradient(to bottom, #eefcf1, #daf2df)"
                : "linear-gradient(to bottom, #ffffff, #f2f2fb)"};
        color: ${({ $revealed }) => ($revealed ? "#1f5f31" : "#8c8ca8")};
        font-weight: ${({ $revealed }) => ($revealed ? "700" : "400")};
        box-shadow: ${({ $revealed }) =>
            $revealed
                ? "0 4px 10px rgba(90, 160, 90, 0.16)"
                : "0 2px 6px rgba(100, 100, 150, 0.08)"};
        transition: transform 0.15s ease, box-shadow 0.15s ease;
    
        &:hover {
            transform: translateY(-1px);
        }
    `;
    
    const StyledHint = styled.p`
        width: min(760px, 92%);
        margin: 0.25rem auto 1rem auto;
        color: #666699;
        font-size: 0.95rem;
    `;
    
    const StyledGiveUp = styled.button`
        min-width: 110px;
        font-size: 1rem;
        cursor: pointer;
        padding: 0.65rem 1rem;
        border: none;
        border-radius: 10px;
        background: linear-gradient(to right, #ef8f8f, #e86f6f);
        color: white;
        font-weight: 700;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
    
        &:hover {
            transform: translateY(-1px);
            box-shadow: 0 6px 12px rgba(180, 100, 100, 0.2);
        }
    `;
    type QuizGameProps = {
        quizId: string;
        title: string;
        grid: string[][];
    };
    
    type MessageType = "neutral" | "success" | "error";
    
    function normalizeAnswer(value: string): string {
        return value
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s]/g, "")
            .replace(/\s+/g, " ");
    }
    

    
    function formatTime(seconds: number): string {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    }
    
    export default function QuizGame({ quizId, title, grid }: QuizGameProps) {
        const quiz = getQuizById(quizId);
    
        const [started, setStarted] = useState(false);
        const [inputValue, setInputValue] = useState("");
        const [revealedAnswers, setRevealedAnswers] = useState<string[]>([]);
        const [seconds, setSeconds] = useState(0);
        const [message, setMessage] = useState("Click Begin to start the quiz.");
        const [messageType, setMessageType] = useState<MessageType>("neutral");
        const router = useRouter();
        const [showModal, setShowModal] = useState(false);
    
        const totalAnswers = quiz?.answers.length ?? 0;
    
        const answerLookup = useMemo(() => {
            const lookup = new Map<string, string>();
    
            // Build a lookup table using normalized answers
            // so the user does not need exact capitalization.
            if (quiz) {
                for (const answer of quiz.answers) {
                    lookup.set(normalizeAnswer(answer), answer);
                }
            }
    
            return lookup;
        }, [quiz]);
    
        useEffect(() => {
            // Run the timer only while the quiz is active.
            if (!started || revealedAnswers.length === totalAnswers) {
                return;
            }
    
            const intervalId = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
    
            return () => clearInterval(intervalId);
        }, [started, revealedAnswers.length, totalAnswers]);
    
        if (!quiz) {
            return (
                <StyledMain>
                    <StyledH2>{title}</StyledH2>
                    <p>Quiz data was not found.</p>
                </StyledMain>
            );
        }
    
        function handleStartReset() {
            // Before the quiz starts, the button begins the game.
            // After that, it works as a reset button.
            if (!started && revealedAnswers.length === 0 && seconds === 0) {
                setStarted(true);
                setMessage("Quiz started. Type an answer and press Submit.");
                setMessageType("neutral");
                return;
            }


            setStarted(false);
            setInputValue("");
            setRevealedAnswers([]);
            setSeconds(0);
            setMessage("Quiz reset. Click Begin to start again.");
            setMessageType("neutral");
        }

        function handleGiveUp() {
            setStarted(false);
            setMessage(`You gave up. Score: ${revealedAnswers.length}/${totalAnswers}`);
            setMessageType("error");
            setShowModal(true);
        }
    
        function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
            event.preventDefault();
    
            if (!started) {
                setMessage('Click "Begin" first.');
                setMessageType("error");
                return;
            }
    
            const normalizedInput = normalizeAnswer(inputValue);
    
            if (normalizedInput.length === 0) {
                setMessage("Please type an answer first.");
                setMessageType("error");
                return;
            }
    
            const matchedAnswer = answerLookup.get(normalizedInput);
    
            if (!matchedAnswer) {
                setMessage("That answer is not correct.");
                setMessageType("error");
                setInputValue("");
                return;
            }
    
            if (revealedAnswers.includes(matchedAnswer)) {
                setMessage("You already found that answer.");
                setMessageType("error");
                setInputValue("");
                return;
            }
    
            // Add the newly found correct answer to the revealed list.
            const updatedAnswers = [...revealedAnswers, matchedAnswer];
            setRevealedAnswers(updatedAnswers);
            setInputValue("");
            setMessage(`Correct: ${matchedAnswer}`);
            setMessageType("success");
    
            if (updatedAnswers.length === totalAnswers) {
                setStarted(false);
                setMessage(`Finished! Final time: ${formatTime(seconds)}`);
                setMessageType("success");
                setShowModal(true);
            }
        }
    
        return (
            <StyledMain>
                <StyledH2>{title}</StyledH2>
    
                <StyledTopCard>
                    <StyledTimerBox>
                        <StyledStats>
                            <StyledStatPill>
                                Score: {revealedAnswers.length}/{totalAnswers}
                            </StyledStatPill>
                            <StyledStatPill>
                                Time: {formatTime(seconds)}
                            </StyledStatPill>
                        </StyledStats>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                            <StyledStartStop type="button" onClick={handleStartReset}>
                                {!started && revealedAnswers.length === 0 && seconds === 0 ? "Begin" : "Reset"}
                            </StyledStartStop>
                            {started && (
                                <StyledGiveUp type="button" onClick={handleGiveUp}>
                                    Give Up
                                </StyledGiveUp>
                            )}
                        </div>
                    </StyledTimerBox>
                </StyledTopCard>
    
                <StyledInputContainer onSubmit={handleSubmit}>
                    <StyledTextbox
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type an answer here"
                    />
                    <StyledSubmit type="submit" value="Submit" />
                </StyledInputContainer>
    
                <StyledHint>
                    Answers are checked without case sensitivity.

                    {/* Conditional hints added by Coltrane */}
                    {quizId === "mbta-b-branch" ?
                    " All answers should be fully written out with no abbreviations." : ""}
                    {quizId === "first-20-elements" ?
                    " All answers should be written in American English." : ""}

                </StyledHint>
    
                <StyledMessage $type={messageType}>
                    {message}
                </StyledMessage>
    
                <StyledTableWrapper>
                    <StyledTable>
                        <tbody>
                            {grid.map((row, rowIndex) => (
                                <StyledTr key={`${quizId}-row-${rowIndex}`}>
                                    {row.map((answer) => {
                                        const isRevealed = revealedAnswers.includes(answer);
    
                                        return (
                                            <StyledTd key={answer} $revealed={isRevealed}>
                                                {isRevealed ? answer : "\u00A0"}
                                            </StyledTd>
                                        );
                                    })}
                                </StyledTr>
                            ))}
                        </tbody>
                    </StyledTable>
                </StyledTableWrapper>
    
                <br />
                <br />
                {showModal && (
                    <NameEntryModal
                        quizId={quizId}
                        score={revealedAnswers.length}
                        time={seconds}
                        onClose={() => setShowModal(false)}
                        onSubmitted={() => router.refresh()}
                    />
                )}
            </StyledMain>
        );
    }