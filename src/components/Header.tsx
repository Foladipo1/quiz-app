// This component was written by Coltrane

import styled from "styled-components";
import Link from "next/link";

const StyledHeader = styled.header`
    margin: auto;
    width: 80vw;
    background: linear-gradient(to right, #7b7bef, #9999ff);
    font-family: Calibri, Arial, sans-serif;
    padding: 1rem 4rem;
    box-shadow: 0 4px 12px rgba(90, 90, 150, 0.2);
`;

const StyledH1 = styled.h1`
    text-align: center;
    font-size: max(1.8vw, 2.2vh);
    color: white;
    font-style: italic;
    margin: 0 0 0.25rem 0;
`;

const StyledH3 = styled.h3`
    text-align: center;
    font-style: normal;
    font-size: max(0.9vw, 1.2vh);
    color: #e8e8ff;
    margin: 0 0 1rem 0;
    font-weight: 400;
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    gap: 2rem;
`;

const StyledLink = styled(Link)`
    font-style: normal;
    text-decoration: none;
    color: #eeeeff;
    font-size: max(1vw, 1.4vh);
    font-weight: 500;
    padding: 0.4rem 1rem;
    border-radius: 8px;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.15);
        text-decoration: underline;
    }
`;

export default function Header() {
    return (
        // Simple header with navigation. Perhaps the navigation makes the
        // homepage redundant, but it is good to have a user landing page.
        <StyledHeader>
            <StyledH1>Untitled Quiz Website</StyledH1>
            <StyledH3>by Berry Chen, Coltrane Margosian, and Fola Oladipupo</StyledH3>
            <StyledNav>
                <StyledLink href="/">Home</StyledLink>
                <StyledLink href="/50states">50 States</StyledLink>
                <StyledLink href="/mbta">B Branch Stations</StyledLink>
                <StyledLink href="/elements">First 20 Elements</StyledLink>
            </StyledNav>
        </StyledHeader>
    );
}