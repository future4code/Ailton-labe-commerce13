import styled from "styled-components";

export const CarrinhoInicial = styled.div `
border: 1px solid black;
width: 20%;
height: 450px;
overflow: auto;
display: flex;
flex-direction: column;
`
export const CarrinhoItem = styled.div `
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 2px 0px;
padding: 0px 10px;
background-color: red;
`