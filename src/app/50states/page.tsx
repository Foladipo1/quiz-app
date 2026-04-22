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
  title: '50 States | Untitled Quiz Website',
}

export default function Home() {
  return (
    <StyledMain>
      <StyledH2>50 States</StyledH2>
      <StyledTimerBox>
        <StyledTimer>0/50 0:00</StyledTimer>
        <StyledStartStop type="button" value="Begin" id="startstop"/>
      </StyledTimerBox>
      <br/>

      <StyledInputContainer>
        <StyledTextbox type="text" id="ansinput"/>
        <StyledSubmit type="submit" value="Submit" id="ansinput"/>
      </StyledInputContainer>
      <StyledTable>
        <StyledTr>
          <StyledTd id="Alabama">&nbsp;</StyledTd>
          <StyledTd id="Alaska">&nbsp;</StyledTd>
          <StyledTd id="Arizona">&nbsp;</StyledTd>
          <StyledTd id="Arkansas">&nbsp;</StyledTd>
          <StyledTd id="California">&nbsp;</StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTd id="Colorado">&nbsp;</StyledTd>
          <StyledTd id="Connecticut">&nbsp;</StyledTd>
          <StyledTd id="Delaware">&nbsp;</StyledTd>
          <StyledTd id="Florida">&nbsp;</StyledTd>
          <StyledTd id="Georgia">&nbsp;</StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTd id="Hawaii">&nbsp;</StyledTd>
          <StyledTd id="Idaho">&nbsp;</StyledTd>
          <StyledTd id="Illinois">&nbsp;</StyledTd>
          <StyledTd id="Indiana">&nbsp;</StyledTd>
          <StyledTd id="Iowa">&nbsp;</StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTd id="Kansas">&nbsp;</StyledTd>
          <StyledTd id="Kentucky">&nbsp;</StyledTd>
          <StyledTd id="Louisiana">&nbsp;</StyledTd>
          <StyledTd id="Maine">&nbsp;</StyledTd>
          <StyledTd id="Maryland">&nbsp;</StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTd id="Massachusetts">&nbsp;</StyledTd>
          <StyledTd id="Michigan">&nbsp;</StyledTd>
          <StyledTd id="Minnesota">&nbsp;</StyledTd>
          <StyledTd id="Mississippi">&nbsp;</StyledTd>
          <StyledTd id="Missouri">&nbsp;</StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTd id="Montana">&nbsp;</StyledTd>
          <StyledTd id="Nebraska">&nbsp;</StyledTd>
          <StyledTd id="Nevada">&nbsp;</StyledTd>
          <StyledTd id="New Hampshire">&nbsp;</StyledTd>
          <StyledTd id="New Jersey">&nbsp;</StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTd id="New Mexico">&nbsp;</StyledTd>
          <StyledTd id="New York">&nbsp;</StyledTd>
          <StyledTd id="North Carolina">&nbsp;</StyledTd>
          <StyledTd id="North Dakota">&nbsp;</StyledTd>
          <StyledTd id="Ohio">&nbsp;</StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTd id="Oklahoma">&nbsp;</StyledTd>
          <StyledTd id="Oregon">&nbsp;</StyledTd>
          <StyledTd id="Pennsylvania">&nbsp;</StyledTd>
          <StyledTd id="Rhode Island">&nbsp;</StyledTd>
          <StyledTd id="South Carolina">&nbsp;</StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTd id="South Dakota">&nbsp;</StyledTd>
          <StyledTd id="Tennessee">&nbsp;</StyledTd>
          <StyledTd id="Texas">&nbsp;</StyledTd>
          <StyledTd id="Utah">&nbsp;</StyledTd>
          <StyledTd id="Vermont">&nbsp;</StyledTd>
        </StyledTr>
        <StyledTr>
          <StyledTd id="Virginia">&nbsp;</StyledTd>
          <StyledTd id="Washington">&nbsp;</StyledTd>
          <StyledTd id="West Virginia">&nbsp;</StyledTd>
          <StyledTd id="Wisconsin">&nbsp;</StyledTd>
          <StyledTd id="Wyoming">&nbsp;</StyledTd>
        </StyledTr>
      </StyledTable>
      <br/><br/>
      <StyledH2>Leaderboard</StyledH2>
    </StyledMain> 
  );
}
