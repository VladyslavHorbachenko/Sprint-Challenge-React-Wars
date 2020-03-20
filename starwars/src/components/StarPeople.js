import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid red;
  width: 60%;
  margin: 0 auto;
  margin-top: 2%;
  border-radius: 10px;
`;
const Name = styled.h2`
color: darkred;
`
const Mass = styled.h3`
    font-weight:bold;
    color:blue;
    &:hover{
        color:red;
    }
`

const StarPeople = props => {
    return(
        <Container>
            <Name>My name is:  {props.name}</Name>
             <Mass>My height is: {props.height}</Mass>
             <Mass>My mass is: {props.mass}</Mass>
             <Mass>My skin color is: {props.skin_color}</Mass>
            <Mass>My eye color is: {props.eye_color}</Mass>
            <Mass>I was born: {props. birth_year}</Mass>
            <Mass>My gender is: {props.gender}</Mass>
        
        </Container>
    )
}

export default StarPeople;