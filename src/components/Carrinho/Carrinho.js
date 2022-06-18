import React, { Component } from "react";
import { CarrinhoInicial,CarrinhoItem} from "./Carrinho.styled";

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
        <h3>Carrinho:</h3>
        {renderizaProduto}
        <p>Total: R${this.props.total}</p>
      </CarrinhoInicial>
      )
    };
  };