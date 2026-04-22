import styled from "styled-components";

const StyledHeader = styled.header`
    margin-left: 20vw;
    margin-right: 20vw;
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
    font-style: normal;
    `

const StyledNav = styled.nav`
    display: flex;
`
const StyledLink = styled.a`
    text-align: center;
    flex: 25%;
    font-style: normal;
    text-decoration: underline;
    color: #eeeeff;
    `


export default function Header() {
  return (
    <main>
      <StyledHeader>
        <br/>
        <StyledH1>Untitled Quiz Website</StyledH1>
        <StyledH3>by Berry Chen, Coltrane Margosian, and Fola Oladipupo</StyledH3>
        <StyledNav>
          <StyledLink href="/"><StyledH3>Home</StyledH3></StyledLink>
          <StyledLink href="/50states"><StyledH3>50 States</StyledH3></StyledLink>
          <StyledLink href="/mbta"><StyledH3>B Branch Stations</StyledH3></StyledLink>
          <StyledLink href="/elements"><StyledH3>First 18 Elements</StyledH3></StyledLink>
        </StyledNav>
        <br/>
      </StyledHeader>
    </main> 
  );
}