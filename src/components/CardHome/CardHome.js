import React, { Component } from "react";
import{ContainerCard,Card} from "./CardHome.styled";


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
          <p>{dados.name}</p>
          <p>{dados.value}</p>
          <button onClick={()=>this.props.addproduto(dados.id)}>Adicionar ao Carrinho</button>
        </Card>
      )})
      return(
        <ContainerCard>
        {listaProdutos}
        </ContainerCard>
      )
    }
  }