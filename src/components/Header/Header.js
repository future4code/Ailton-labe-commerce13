import React from 'react';
import{Inicio} from './Header.styled';
import IconeLogo from '../Img/icone4.png'
export default function Header(){
    return(
    <Inicio>
        <div>
            <img src={IconeLogo} alt='logo astronauta'/>
        </div>
        <div>
        <a href='/'><h1>XIII-SPACE</h1></a>
        </div>
        <div>
            <a href='/'>Cadastre-se</a>
        </div>
    </Inicio>
    )
}