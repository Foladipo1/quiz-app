import styled from "styled-components";

const StyledFooter = styled.footer`
    margin-left: 20vw;
    margin-right: 20vw;
    text-align: left;
    font-family: Calibri, Arial, sans-serif;
    font-style: italic;
    background-color: #9999ff;
    color: black;
    `

const StyledP = styled.p`
    text-align: center;
    `


export default function Header() {
  return (
    <main>
      <StyledFooter>
        <StyledP>&copy; Chen, Margosian, Oladipupo 2026. All rights reserved.</StyledP>
      </StyledFooter>
    </main> 
  );
}