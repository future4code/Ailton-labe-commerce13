import React from "react";
import { ContainerFiltros,HeaderContainer } from "./Filtro.styled";
import Icone2 from '../Img/icone3.png'
export default class Filtros extends React.Component {
    render() {
        return(
        <ContainerFiltros>
            <HeaderContainer>
            <h3>Filtros:</h3>
            <img src={Icone2}/>
            </HeaderContainer>
            <div>
            <p>Valor mínimo:</p>
            <input type="number" onChange={this.props.onChangeValorMinimo} value={this.props.valorMinimo} />
            <p>Valor máximo:</p>
            <input type="number" onChange={this.props.onChangeValorMaximo} value={this.props.valorMaximo} />
            {/* <button onClick={() => this.onClickFiltraValor(this.props.lista, this.state.inputValorMinimo, this.state.inputValorMaximo)}>Filtrar</button> */}
            <p>Busca por nome:</p>
            <input type="text" onChange={this.props.onChangeBuscaNome}/>
            {/* <button onClick={this.onClickBuscaNome}>Pesquisar</button> */}
            </div>
        </ContainerFiltros>
        )
    }
}