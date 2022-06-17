import styled from "styled-components";

export const ContainerCard = styled.div `
display: flex;
width: 100%;
background-color: pink;
flex-wrap: wrap;
padding: 24px;
justify-content: center;
`
export const Card = styled.div `
border: 1px solid black;
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
margin: 0 30px;
width: 200px;
height: 250px;
img{
  width: 100%;
  height: 70%;
}
`