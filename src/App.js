import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Filtros from "./components/Filtros/Filtros";
import Home from "./components/Home/Home"
import Carrinho from "./components/Carrinho/Carrinho";
import camisaf1 from "./components/Img/camisaf1.webp"
import camisaf2 from "./components/Img/camisaf2.webp"
import camisaf3 from "./components/Img/camisaf3.webp"
import camisaf4 from "./components/Img/camisaf4.webp"
import camisa5 from "./components/Img/camisa5.webp"
import camisa6 from "./components/Img/camisa6.PNG"
import camisa7 from "./components/Img/camisa7.webp"
import camisa8 from "./components/Img/camisa8.webp"

const PaginaInicial = styled.div `
display:flex;
justify-content:space-between;
flex-direction: row;
gap: 10px;
width: 100%;
height: 100%;
min-height:100vh;
padding: 30px;
`
class App extends React.Component{
  state={
    produtos:[{
      id: 1,
        name: "T-shirt Space Rock",
        value: 70,
        imageUrl: camisaf1,
    },
    {
      id: 2,
        name: "T-shirt Astronaut",
        value: 75,
        imageUrl: camisaf2,
    },
    {
      id: 3,
        name: "T-shirt Love Space",
        value: 54,
        imageUrl: camisaf3,
    },
    {
      id: 4,
        name: "T-shirt Alone",
        value: 65,
        imageUrl: camisaf4,
    },
    {
      id: 5,
        name: "T-shirt Abduction ",
        value: 57,
        imageUrl: camisa5,
    },
    {
      id: 6,
        name: "T-shirt Astronaut Art ",
        value: 90,
        imageUrl: camisa6,
    },
    {
      id: 7,
        name: "T-shirt IDK",
        value: 73,
        imageUrl: camisa7,
    },
    {
      id: 8,
        name: "T-shirt Space Engineering",
        value: 45,
        imageUrl: camisa8,
    },
  ],
    carrinho:[],
    quantidade:[],
    totalCarrinho: 0,
    inputValorMinimo: 0,
    inputValorMaximo: 1000,
    inputBuscaNome: "",
  }

  adicionarProduto = (lista) =>{
    const filterproduto = this.state.produtos.filter((dados)=>{
      return dados.id===lista.id
    });
    const copiaCarrinho =[...this.state.carrinho]
    copiaCarrinho.push(filterproduto[0])
    this.setState({carrinho:copiaCarrinho})

    this.setState({totalCarrinho: this.state.totalCarrinho + lista.value})

    // const filtercarrinho = this.state.carrinho.filter((dados)=>{
    //   return dados.id === id 
    // })
    // const carrinhoQuantidade = filtercarrinho.length + 1
    // this.setState({quantidade:carrinhoQuantidade})
    // console.log(quantidade)
  }
  
  removeProduto = (id)=>{
  //   const filtercarrinho = 
  //   this.setState({carrinho:this.state.carrinho.filter((dados)=>{   //carrinho estava com dois 'n'
  //     return dados.id!==id });
  // });
  console.log("removeu")
  };


  onChangeValorMinimo = (event) => {
    this.setState({inputValorMinimo: event.target.value})
  }
  onChangeValorMaximo = (event) => {
    this.setState({inputValorMaximo: event.target.value})
  }
  onChangeBuscaNome = (event) => {
    this.setState({inputBuscaNome: event.target.value})
  }

  render(){

    return (
      <>
      <Header />
      <PaginaInicial>
        <Filtros
          onChangeValorMinimo={this.onChangeValorMinimo}
          valorMinimo={this.state.inputValorMinimo}
          onChangeValorMaximo={this.onChangeValorMaximo}
          valorMaximo={this.state.inputValorMaximo}
          onChangeBuscaNome={this.onChangeBuscaNome}
        />
        <Home
          produtos={this.state.produtos}
          addproduto={this.adicionarProduto}
          minimo={this.state.inputValorMinimo}
          maximo={this.state.inputValorMaximo}
          busca={this.state.inputBuscaNome}
        />
        <Carrinho
          carrinho={this.state.carrinho}
          removeProduto={this.removeProduto}
          total={this.state.totalCarrinho}
        />
      </PaginaInicial>
      </>
    );
  }
}

export default App;
