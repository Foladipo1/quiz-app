import styled from "styled-components";

const StyledHeader = styled.header`
    margin-left: 15vw;
    margin-right: 15vw;
    text-align: left;
    font-family: Calibri, Arial, sans-serif;
    font-style: italic;
    background-color: #9999ff;
    color: black;
    `

const StyledH1 = styled.h1`
    text-align: center;
    `

const StyledH3 = styled.h3`
    text-align: center;
    `


export default function Header() {
  return (
    <main>
      <StyledHeader>
        <StyledH1>Untitled Quiz Website</StyledH1>
        <StyledH3>by Berry Chen, Coltrane Margosian, and Fola Oladipupo</StyledH3>
      </StyledHeader>
    </main> 
  );
}