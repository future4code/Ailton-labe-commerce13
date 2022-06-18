import React from "react";
import { ContainerFiltros } from "./Filtro.styled";

export default class Filtros extends React.Component {
    render() {
        return(
        <ContainerFiltros>
            <h3>Filtros</h3>
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