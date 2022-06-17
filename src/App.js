import React, { Component } from "react";
import styled from "styled-components";

const PaginaInicial = styled.div `
display:flex;
justify-content:space-between;
flex-direction: row;
gap: 10px;
width: 100%;
min-height:100vh;
padding: 30px;
`
const HeaderHome = styled.div `
display:flex;
justify-content: space-between;
align-items: center;
width: 100%;
height:5%;
background-color: blue;

select{
  width: 100px;
  height: 20px;
  margin: 7px;
}
`
const ContainerCard = styled.div `
display: flex;
width: 100%;
background-color: pink;
flex-wrap: wrap;
padding: 24px;
justify-content: center;
`
const Card = styled.div `
border: 1px solid black;
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
margin: 0 30px;
width: 200px;
height: 250px;
img{
  width: 100%;
  height: 70%;
}
`
const CarrinhoInicial = styled.div `
border: 1px solid black;
width: 20%;
height: 450px;
overflow: auto;
display: flex;
flex-direction: column;
`
const CarrinhoItem = styled.div `
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 2px 0px;
padding: 0px 10px;
background-color: red;
`
const FiltroInicil = styled.div `
border: 1px solid black;
width: 20%;
height: 450px;

`
class Home extends React.Component{
  render(){
    return (
    <div>
      <HeaderHome>
        <p>Quantidade de produtos:{this.props.produtos.length}</p>
        <label>Ordenação:</label>
        <select>
          <option>Crescente</option>
          <option>Decrescente</option>
        </select>
      </HeaderHome>
        <CardHome produtos={this.props.produtos} addproduto={this.props.addproduto}/> 
    </div>
    )
  };
};
class CardHome extends React.Component{
  render(){
    const listaProdutos = this.props.produtos.map((dados)=>{
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

class Filtro extends React.Component{
  state = {
    inputValorMinimo: 100,
    inputValorMaximo: 1000,
    inputBuscaNome: ""
  }
  
  onChangeValorMinimo = (event) => {
    this.setState({inputValorMinimo: event.target.value})
  }
  
  onChangeValorMaximo = (event) => {
    this.setState({inputValorMaximo: event.target.value})
  }
    
  onClickFiltraValor = (lista, minimo, maximo) => {
    const listaFiltradaValor = lista.filter((item) => {
      if(item.value >= minimo) {
        return true
      }
    }).filter((item) => {
      if(item.value <= maximo) {
        return true
      }
    })
  
    console.log(listaFiltradaValor)
    // RETORNO
  }
  
  onChangeBuscaNome = (event) => {
    this.setState({inputBuscaNome: event.target.value})
  }

  onClickBuscaNome = (props) => {
    const listaFiltradaNome = this.props.lista.filter((item) => {
      if(item.name.toLowerCase().includes(this.state.inputBuscaNome.toLowerCase())) {
        return true
      }
    })
    console.log(listaFiltradaNome)
    // RETORNO
  }
  
  render(){
    return(
    <FiltroInicil>
      <h3>Filtros</h3>
      <div>
        <p>Valor mínimo:</p>
        <input type="number" onChange={this.onChangeValorMinimo} value={this.state.inputValorMinimo} />
        <p>Valor máximo:</p>
        <input type="number" onChange={this.onChangeValorMaximo} value={this.state.inputValorMaximo} />
        <button onClick={() => this.onClickFiltraValor(this.props.lista, this.state.inputValorMinimo, this.state.inputValorMaximo)}>Filtrar</button>
        <p>Busca por nome:</p>
        <input type="text" onChange={this.onChangeBuscaNome}/>
        <button onClick={this.onClickBuscaNome}>Pesquisar</button>
      </div>
    </FiltroInicil>
    )
  };
};
class Carrinho extends React.Component{
  render(){
    const renderizaProduto = this.props.carrinho.map((dados)=>{
      return (
        <CarrinhoItem>  
          <p>{dados.name}</p>
          <button onClick={() => this.props.removeProduto(dados.id)}>Remover</button>

        </CarrinhoItem>
      );
    })
    return(
      <CarrinhoInicial>
      <h3>Carrinho:</h3>
      {renderizaProduto}
    </CarrinhoInicial>
    )
  };
};
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
    carrinho:[]
  }

  adicionarProduto = (id) =>{
    const filterproduto = this.state.produtos.filter((dados)=>{
      return dados.id===id
    });
    const copiaCarrinho =[...this.state.carrinho]
    copiaCarrinho.push(filterproduto[0])
    this.setState({carrinho:copiaCarrinho})
    
    
  }
  removeProduto = (id)=>{
  //   const filtercarrinho = 
  //   this.setState({carrinho:this.state.carrinho.filter((dados)=>{   //carrinho estava com dois 'n'
  //     return dados.id!==id });
  // });
  console.log("removeu")
  };
  render(){
  return (
    <PaginaInicial>
      <Filtro lista={this.state.produtos} />
      <Home produtos={this.state.produtos} addproduto={this.adicionarProduto}/>
      <Carrinho carrinho={this.state.carrinho} removeProduto={this.removeProduto}/>
    </PaginaInicial>
  );
}
}
export default App;
