// This page was written by Coltrane

import styled from "styled-components";
import QuizButton from "@/components/QuizButton";
import type { Metadata } from 'next'

const StyledMain = styled.main`
    width: 80vw;
    margin: auto;
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

const BottomMarginDiv = styled.div`
    height: calc(150vh - 45vw);
`

export const metadata: Metadata = {
  title: 'Home | Untitled Quiz Website',
}

export default function Home() {
  return (
    <StyledMain>
      <StyledH2>Quizzes</StyledH2>
      <QuizButtons>
          {/* Each one of these buttons has an associated icon created by myself
          in Photoshop. The USA icon was created using a public domain depiction
          of the contiguous states, the MBTA icon was created with the MBTA logo
          (which is too simple to be copyrighted), and the last icon was created
          by me from scratch. Each icon is 512x512 pixels in width and height.*/}
          <QuizButton label={["50 States", "/usaicon.png", "/50states"]} />
          <QuizButton label={["B Branch Stations", "/mbtaicon.png", "/mbta"]} />
          <QuizButton label={["First 20 Elements", "/hicon.png", "/elements"]} />
      </QuizButtons>

      {/* The BottomMarginDiv is just that. It ensures that the
      website's footer is always at the bottom of the home. */}
      <BottomMarginDiv></BottomMarginDiv>
    </StyledMain> 
  );
}
