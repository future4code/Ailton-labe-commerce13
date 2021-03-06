import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
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
      quantidade:0,
        name: "T-shirt Rock",
        value: 70,
        imageUrl: "https://static3.tcdn.com.br/img/img_prod/460977/camiseta_feminina_unissex_space_nasa_guitar_music_astronauts_colors_astronauta_preta_ev_81177_1_8c537e231433d5921715ea616c62ef51.jpg",
    },
    {
      id: 2,
      quantidade:0,
        name: "T-shirt Astronaut",
        value: 75,
        imageUrl: "https://static3.tcdn.com.br/img/img_prod/460977/camiseta_feminina_unissex_astronauts_space_nasa_astronauta_preta_ev_81157_1_8f128dbf001b3a171ebcf696a0490907.jpg",
    },
    {
      id: 3,
      quantidade:0,
        name: "T-shirt Love",
        value: 54,
        imageUrl: "https://static3.tcdn.com.br/img/img_prod/460977/camiseta_feminina_unissex_cosmic_love_astronauts_amor_cosmico_astronauta_space_nasa_preta_ev_89213_1_851271882247a16e0fcf50a6f0536588.jpg",
    },
    {
      id: 4,
      quantidade:0,
        name: "T-shirt Alone",
        value: 65,
        imageUrl: "https://static3.tcdn.com.br/img/img_prod/460977/camiseta_feminina_unissex_astronaut_swing_moon_space_nasa_astronauta_balanco_na_lua_espaco_preta_ev_79627_1_016cbaa180a1ff84f2dd3e20c53f9e92.jpg",
    },
    {
      id: 5,
      quantidade:0,
        name: "T-shirt Abduction ",
        value: 57,
        imageUrl: "https://img.lojasrenner.com.br/item/549031453/zoom/5.jpg",
    },
    {
      id: 6,
      quantidade:0,
        name: "T-shirt Art ",
        value: 90,
        imageUrl: "https://cea.vtexassets.com/arquivos/ids/28363912-1600-auto?v=637484960759470000&width=1600&height=auto&aspect=true",
    },
    {
      id: 7,
      quantidade:0,
        name: "T-shirt IDK",
        value: 73,
        imageUrl: "https://img.lojasrenner.com.br/item/558567292/zoom/10.jpg",
    },
    {
      id: 8,
      quantidade:0,
        name: "T-shirt Engineering",
        value: 45,
        imageUrl: "https://img.lojasrenner.com.br/item/559131351/zoom/10.jpg",
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
  
  // adicionarProduto = (id) =>{
  //  let existe = false;
  //  for(let i=0; i<this.state.carrinho.length;i++){
  //     if(this.state.carrinho[i].id===id){
  //       existe=true
  //     }};
  //   if(existe===true){
  //   const adicionar = this.state.carrinho.map((dados)=>{
  //     if(dados.id===id){
  //     return {
  //       id:dados.id,
  //       quantidade:dados.quantidade+1,
  //       name:dados.name,
  //       value:dados.value,
  //       imageUrl:dados.imageUrl
  //     }
  //     } else{
  //     return dados};
  //   })
  //   this.setState({carrinho:adicionar})

  // }else{
  //   const adicionar = this.state.produtos.map((dados)=>{
  //     if(dados.id===id){
  //     return {
  //       id:dados.id,
  //       quantidade:1,
  //       name:dados.name,
  //       value:dados.value,
  //       imageUrl:dados.imageUrl
  //     }}
  //   })
  //   const copiaCarrinho=[...this.state.carrinho]
  //   copiaCarrinho.push(adicionar[0])
  //   this.setState({carrinho:copiaCarrinho})
  // }
  // }


  removeProduto = (id)=>{
    const apagarProduto = this.state.carrinho.filter((dados)=>{
      this.setState({totalCarrinho: this.state.totalCarrinho - dados.value})
      return dados.id !== id
    })
    this.setState({carrinho:apagarProduto})
    
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
    <div>
    <Header/>
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
    </div>
  );
}
}
export default App;