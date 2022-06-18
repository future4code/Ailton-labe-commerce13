import React, { Component } from "react";
import { CarrinhoInicial,CarrinhoItem,HeaderCarrinho} from "./Carrinho.styled";
import Icone2 from '../Img/icone2.png'

export default class Carrinho extends React.Component{

    render(){
      const renderizaProduto = this.props.carrinho.map((dados)=>{
        return (
          <CarrinhoItem> 
            <p>{dados.id.length}</p>
            <p>{dados.name}</p>
            <p>{dados.value}</p>
            <button onClick={() => this.props.removeProduto(dados.id)}>Remover</button>
  
          </CarrinhoItem>
        );
      })
      return(
        <CarrinhoInicial>
        <HeaderCarrinho>
        <h3>Carrinho:</h3>
        <img src={Icone2}/>
        </HeaderCarrinho>
        {renderizaProduto}
        <p>Total: R${this.props.total}</p>
      </CarrinhoInicial>
      )
    };
  };