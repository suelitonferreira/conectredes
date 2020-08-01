import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
//import ButtonLink from '../ButtonLink';
import Button from '../Button';


function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo redesconect" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu; //Exportaça~çod o meuino