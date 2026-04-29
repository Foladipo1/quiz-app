// This component was written by Coltrane

import styled from "styled-components";

const StyledFooter = styled.footer`
    margin: auto;
    width: 80vw;
    background: linear-gradient(to right, #7b7bef, #9999ff);
    font-family: Calibri, Arial, sans-serif;
    padding: 1rem 4rem;
    box-shadow: 0 -4px 12px rgba(90, 90, 150, 0.2);
    margin-top: auto;
`;

const StyledP = styled.p`
    text-align: center;
    color: #eeeeff;
    font-size: max(0.9vw, 1.2vh);
    margin: 0;
`;

export default function Footer() {
    return (

        // Simple footer with copyright statement
        <StyledFooter>
            <StyledP>&copy; Chen, Margosian, Oladipupo 2026. All rights reserved.</StyledP>
        </StyledFooter>
    );
}