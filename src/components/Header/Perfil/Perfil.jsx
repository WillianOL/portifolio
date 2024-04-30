import React from 'react';
import style from './style.module.scss';
import { NavLink } from 'react-router-dom';

const Perfil = () => {
  return (
    <div>
      <NavLink to="/" className={style.conteiner}>
        {'<'}willian.oliveira {'/>'}
      </NavLink>
    </div>
  );
};

export default Perfil;
