import styled from "styled-components";
import QuizButton from "@/components/QuizButton";

const StyledMain = styled.main`
    margin-left: 15vw;
    margin-right: 15vw;
    text-align: left;
    font-family: Calibri, Arial, sans-serif;
    font-style: italic;
    background-color: #ffffff;
    color: black;
    `

const StyledH2 = styled.h2`
    text-align: center;
    padding: 1vh 0;
    `
const QuizButtons = styled.div`
    display: block;
    background-color: yellow;
    margin: 0;
    
`
const StyledUl = styled.ul`
    background-color: red;
    display: flex;
    list-style: none;
    padding: auto;
    margin: 0;
`

const StyledLi = styled.li`
  background-color: blue;
`
export default function Home() {
  return (
    <StyledMain>
      <StyledH2>Quizzes</StyledH2>
      <QuizButtons>
        <StyledUl>
          <StyledLi><QuizButton/></StyledLi>
          <StyledLi><QuizButton/></StyledLi>
          <StyledLi><QuizButton/></StyledLi>
        </StyledUl>
      </QuizButtons>
    </StyledMain> 
  );
}
