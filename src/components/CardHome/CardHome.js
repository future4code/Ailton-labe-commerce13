import React, { Component } from "react";
import{ContainerCard,Card,Card2} from "./CardHome.styled";


export default class CardHome extends React.Component{
    render(){
      const listaProdutos = this.props.produtos.filter((item) => {
        return item.value >= this.props.minimo
      }).filter((item) => {
        return item.value <= this.props.maximo
      }).filter((item) => {
        return item.name.toLowerCase().includes(this.props.busca.toLowerCase())
      }).map((dados)=>{
        return (
        <Card>
          <img src={dados.imageUrl} alt="imagem do: {dados.name}"/>
          <Card2>
          <b><p>{dados.name}</p></b>
          <p>{dados.value}</p>
          <button onClick={()=>this.props.addproduto(dados)}>Adicionar ao Carrinho</button>
          </Card2>
        </Card>
      )})
      return(
        <ContainerCard>
        {listaProdutos}
        </ContainerCard>
      )
    }
  }