import React, { Component } from "react";
import { CarrinhoInicial,CarrinhoItem,HeaderCarrinho} from "./Carrinho.styled";
import Icone2 from '../Img/icone2.png'
export default class Carrinho extends React.Component{
    render(){
      const renderizaProduto = this.props.carrinho.map((dados)=>{
        return (
          <CarrinhoItem>
            <p>{dados.quantidade}</p>
            <p>{dados.name}</p>
            <button onClick={() => this.props.removeProduto(dados.id)}>Remover</button>
          </CarrinhoItem>
        );
      })
      // const valores = this.props.carrinho.map((dados)=>{
      //  return dados.value
      // })
      // let valorTotal = 0
      //  for (const valor of valores) {
      //   valorTotal+=valor
      //  }
      // console.log(valorTotal)
      return(
        <CarrinhoInicial>
        <HeaderCarrinho>
        <h3>Carrinho:</h3>
        <img src={Icone2}/>
        </HeaderCarrinho>
        {renderizaProduto}
        <p>Valor total = R${this.props.total}</p>
      </CarrinhoInicial>
      )
    };
  };