import React, { Component } from "react";
import CardHome from "../CardHome/CardHome";
import {HeaderHome,Ordem } from "./Home.styled";
export default class Home extends React.Component{
    state = {
      // inputValorMinimo: 0,
      // inputValorMaximo: 1000,
      // inputBuscaNome: ""
    }
    // onChangeValorMinimo = (event) => {
    //   this.setState({inputValorMinimo: event.target.value})
    // }
    // onChangeValorMaximo = (event) => {
    //   this.setState({inputValorMaximo: event.target.value})
    // }
    // onChangeBuscaNome = (event) => {
    //   this.setState({inputBuscaNome: event.target.value})
    // }
    render(){
      return (
      <div>
        <HeaderHome>
          <div>
          <p>Quantidade de produtos:{this.props.produtos.length}</p>
          </div>
          <Ordem>
          <label>Ordenação:</label>
          <select>
            <option>Crescente</option>
            <option>Decrescente</option>
          </select>
          </Ordem>
        </HeaderHome>
        <CardHome
          produtos={this.props.produtos}
          addproduto={this.props.addproduto}
          minimo={this.props.minimo}
          maximo={this.props.maximo}
          busca={this.props.busca}
        />
      </div>
      )
    };
  };