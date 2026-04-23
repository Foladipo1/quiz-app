import styled from "styled-components";
import QuizButton from "@/components/QuizButton";
import type { Metadata } from 'next'

const StyledMain = styled.main`
    margin-left: 20vw;
    margin-right: 20vw;
    text-align: left;
    font-family: Calibri, Arial, sans-serif;
    font-style: normal;
    background-color: #ffffff;
    color: black;
    `

const StyledH2 = styled.h2`
    text-align: center;
    padding: 1vh 0;
    font-size: max(2vw, 3vh);
    `
const QuizButtons = styled.div`
    display: flex;
    
`
 {/* const StyledUl = styled.ul`
    background-color: red;
    display: flex;
    list-style: none;
    padding: auto;
    margin: 0;
`

const StyledLi = styled.li`
  background-color: blue;
` */}

export const metadata: Metadata = {
  title: 'Home | Untitled Quiz Website',
}

export default function Home() {
  return (
    <StyledMain>
      <StyledH2>Quizzes</StyledH2>
      <QuizButtons>
          <QuizButton label={["50 States", "/usaicon.png", "/50states"]} />
          <QuizButton label={["B Branch Stations", "/mbtaicon.png", "/mbta"]} />
          <QuizButton label={["First 18 Elements", "/hicon.png", "/elements"]} />
      </QuizButtons>
      <br/>
    </StyledMain> 
  );
}
