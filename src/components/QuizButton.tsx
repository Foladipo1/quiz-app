import styled from "styled-components";

const StyledDiv = styled.div`
    flex: 33.33%;
    text-align: center;
    `

const StyledImg = styled.img`
    width: min(26.25vh, 17.5vw);
    border: min(1.5vh, 0.75vw) solid #9999ff;
    border-radius: min(4.5vh, 3vw);
    padding: min(1.5vh, 0.75vw);
    margin: 0;
    background-color: white;
    background-image: linear-gradient(to bottom, #ffffff, #e8e8ff);
    `

const StyledH2 = styled.h2`
    font-style: normal;
    font-size: max(2vw, 3vh);
    `


export default function QuizButton( {label} : {label:string[]} ) {
  return (
    <StyledDiv>
      <StyledH2>{label[0]}</StyledH2>
      <a href={label[2]}><StyledImg src={label[1]} alt={label[0]}/></a>
    </StyledDiv>
  );
}