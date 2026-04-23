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
  title: 'First 18 Elements | Untitled Quiz Website',
}

export default function Home() {
  return (
    <StyledMain>
      <StyledH2>First 18 Elements</StyledH2>
      <StyledTimerBox>
        <StyledTimer>0/18 0:00</StyledTimer>
        <StyledStartStop type="button" value="Begin" id="startstop"/>
      </StyledTimerBox>
      <br/>

      <StyledInputContainer>
        <StyledTextbox type="text" id="ansinput"/>
        <StyledSubmit type="submit" value="Submit" id="ansinput"/>
      </StyledInputContainer>
      <StyledTable>
        <StyledTr>
          <StyledTd id="Hydrogen">&nbsp;</StyledTd>
          <StyledTd id="Helium">&nbsp;</StyledTd>
          <StyledTd id="Lithium">&nbsp;</StyledTd>
          <StyledTd id="Beryllium">&nbsp;</StyledTd>
          <StyledTd id="Boron">&nbsp;</StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTd id="Carbon">&nbsp;</StyledTd>
          <StyledTd id="Nitrogen">&nbsp;</StyledTd>
          <StyledTd id="Oxygen">&nbsp;</StyledTd>
          <StyledTd id="Fluorine">&nbsp;</StyledTd>
          <StyledTd id="Neon">&nbsp;</StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTd id="Sodium">&nbsp;</StyledTd>
          <StyledTd id="Magnesium">&nbsp;</StyledTd>
          <StyledTd id="Aluminum">&nbsp;</StyledTd>
          <StyledTd id="Silicon">&nbsp;</StyledTd>
          <StyledTd id="Phosphorus">&nbsp;</StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTd id="Sulfur">&nbsp;</StyledTd>
          <StyledTd id="Chlorine">&nbsp;</StyledTd>
          <StyledTd id="Argon">&nbsp;</StyledTd>
        </StyledTr>
      </StyledTable>
      <br/><br/>
      <StyledH2>Leaderboard</StyledH2>
    </StyledMain> 
  );
}
