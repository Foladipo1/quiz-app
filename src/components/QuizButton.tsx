import styled from "styled-components";

const StyledImg = styled.img`
    width: 17.5vh;
    border: 0.75vw solid #9999ff;
    border-radius: 3vw;
    padding: 0.75vw;
    margin: 0;
    background-color: white;
    background-image: linear-gradient(to bottom, #ffffff, #e8e8ff);
    `

export default function QuizButton() {
  return (
    <div>
      <StyledImg src="/usaicon.png" alt="U.S. States"/>
    </div>
  );
}