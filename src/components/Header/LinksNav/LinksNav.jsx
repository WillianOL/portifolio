import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.scss'

const Navegacao = () => {
  return (
    <nav>
      <ul className={style.links_conteiner}>
        <NavLink to="sobre">Sobre</NavLink>
        <NavLink to="projetos">Projetos</NavLink>
        <NavLink to="contato">Contato</NavLink>
        <NavLink to="/">Home</NavLink>
      </ul>
    </nav>
  );
};

export default Navegacao;
