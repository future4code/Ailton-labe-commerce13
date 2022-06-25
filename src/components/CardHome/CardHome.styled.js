import styled from "styled-components";
export const ContainerCard = styled.div `
display: flex;
width: 100%;
border:3px solid black;
border-radius: 0.5rem;
flex-wrap: wrap;
padding: 24px;
gap:8px;
justify-content: center;
`
export const Card = styled.div `
border: 1px solid black;
display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
margin: 0 6px;
width: 200px;
height: 250px;
background-color:gainsboro;
img{
  width: 100%;
  height: 75%;
}
`
export const Card2 = styled.div`
width: 100%;
height: 25%;
display: flex;
flex-direction: column;
align-items: flex-start;
p{
  font-family: 'Times New Roman', Times, serif;
  font-size: medium;
}
button{
  margin: 0 auto;
}
`