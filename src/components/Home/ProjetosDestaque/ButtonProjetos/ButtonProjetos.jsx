import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.scss'

const ButtonProjetos = () => {
  return <NavLink to="projetos" className={style.buttonProjetos}>Todos os projetos</NavLink>;
};

export default ButtonProjetos;
