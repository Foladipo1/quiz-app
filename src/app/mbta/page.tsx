import styled from "styled-components";
import type { Metadata } from 'next'

const StyledMain = styled.main`
    margin-left: 20vw;
    margin-right: 20vw;
    text-align: center;
    font-family: Calibri, Arial, sans-serif;
    font-style: normal;
    background-color: #ffffff;
    color: black;
    `

const StyledH2 = styled.h2`
    text-align: center;
    padding: 1vh 0;
    text-decoration: underline;
    font-size: max(2vw, 3vh);
    `
const StyledTable = styled.table`
    border: 1px solid;
    margin: auto;
`

const StyledTr = styled.tr`
    border: 1px solid;
`

const StyledTd = styled.td`
    border: 1px solid;
    width: 10vw;
`
const StyledInputContainer = styled.div`
    width: 50vw;
    display: inline;
    text-align: center;
`

const StyledTextbox = styled.input`
    width: 40.5vw;
    font-size: 2vw;
`

const StyledSubmit = styled.input`
    width: 10.25vw;
    font-size: 2vw;
    
`
const StyledTimerBox = styled.div`
    display: flex;
    text-align: left;
`

const StyledTimer = styled.p`
    font-size: max(2vw, 3vh);
    text-align: left;
    margin-left: 5vw;
    
`

const StyledStartStop = styled.input`
    text-align: center;
    margin-left: 2vw;
    width: 8vw;
    font-size: 1.75vw;
    
`


export const metadata: Metadata = {
  title: 'B Branch Stations | Untitled Quiz Website',
}

export default function Home() {
  return (
    <StyledMain>
      <StyledH2>B Branch Stations</StyledH2>
      <StyledTimerBox>
        <StyledTimer>0/23 0:00</StyledTimer>
        <StyledStartStop type="button" value="Begin" id="startstop"/>
      </StyledTimerBox>
      <br/>

      <StyledInputContainer>
        <StyledTextbox type="text" id="ansinput"/>
        <StyledSubmit type="submit" value="Submit" id="ansinput"/>
      </StyledInputContainer>
      <StyledTable>
        <StyledTr>
          <StyledTd id="Boston College">&nbsp;</StyledTd>
          <StyledTd id="South Street">&nbsp;</StyledTd>
          <StyledTd id="Chestnut Hill Avenue">&nbsp;</StyledTd>
          <StyledTd id="Chiswick Road">&nbsp;</StyledTd>
          <StyledTd id="Sutherland Road">&nbsp;</StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTd id="Washington Street">&nbsp;</StyledTd>
          <StyledTd id="Warren Street">&nbsp;</StyledTd>
          <StyledTd id="Allston Street">&nbsp;</StyledTd>
          <StyledTd id="Griggs Street">&nbsp;</StyledTd>
          <StyledTd id="Harvard Avenue">&nbsp;</StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTd id="Packard's Corner">&nbsp;</StyledTd>
          <StyledTd id="Babcock Street">&nbsp;</StyledTd>
          <StyledTd id="Amory Street">&nbsp;</StyledTd>
          <StyledTd id="Boston University Central">&nbsp;</StyledTd>
          <StyledTd id="Boston University East">&nbsp;</StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTd id="Blandford Street">&nbsp;</StyledTd>
          <StyledTd id="Kenmore">&nbsp;</StyledTd>
          <StyledTd id="Hynes Convention Center">&nbsp;</StyledTd>
          <StyledTd id="Copley">&nbsp;</StyledTd>
          <StyledTd id="Arlington">&nbsp;</StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTd id="Boylston">&nbsp;</StyledTd>
          <StyledTd id="Park Street">&nbsp;</StyledTd>
          <StyledTd id="Government Center">&nbsp;</StyledTd>

        </StyledTr>
      </StyledTable>
      <br/><br/>
      <StyledH2>Leaderboard</StyledH2>
    </StyledMain> 
  );
}
