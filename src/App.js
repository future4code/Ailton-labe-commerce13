import React, { Component } from "react";
import styled from "styled-components";
import Filtros from "./components/Filtros/Filtros";
import Home from "./components/Home/Home"
import Carrinho from "./components/Carrinho/Carrinho";

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
        name: "Produto 1",
        value: 100,
        imageUrl: "https://picsum.photos/id/237/200/300",
    },
    {
      id: 2,
        name: "Produto 2",
        value: 80,
        imageUrl: "https://picsum.photos/id/239/200/300",
    },
    {
      id: 3,
        name: "Produto 3",
        value: 200,
        imageUrl: "https://picsum.photos/id/239/200/300",
    },
  ],
    carrinho:[],
    quantidade:[],
    inputValorMinimo: 0,
    inputValorMaximo: 1000,
    inputBuscaNome: "",
  }

  adicionarProduto = (id) =>{
    const filterproduto = this.state.produtos.filter((dados)=>{
      return dados.id===id
    });
    const copiaCarrinho =[...this.state.carrinho]
    copiaCarrinho.push(filterproduto[0])
    this.setState({carrinho:copiaCarrinho})

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
          busca={this.state.inputBuscaNome}/>
    </PaginaInicial>
  );
}
}
export default App;
