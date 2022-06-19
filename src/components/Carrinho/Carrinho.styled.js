import styled from "styled-components";
export const CarrinhoInicial = styled.div `
border: 3px solid black;
border-radius: 0.5rem;
width: 30%;
height: 450px;
padding: 16px;
overflow: auto;
display: flex;
flex-direction: column;
h3{
display: inline;
}
img{
width: 45px;
}
`
export const HeaderCarrinho = styled.div`
display: flex;
justify-content: space-between;
`
export const CarrinhoItem = styled.div `
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 2px 0px;
padding: 0px 10px;
background-color: red;
`