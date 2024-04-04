import React from 'react';
import SubTitulo from '../../../Home/Titulos/SubTitulo/SubTitulo';
import { IoSettingsSharp } from "react-icons/io5";
import ButtonLink from '../../../Home/ButtonLink/ButtonLink'
import style from './style.module.scss'


const CardEmBreve = () => {
  return (
    <div className={style.conteiner}>
      <div>
        <SubTitulo>Projetos em breve</SubTitulo>
        <p>Em breve, grandes projetos estão a caminho!🚀</p>
        <ButtonLink caminho="/" NavLink={true}>
          Voltar para home
        </ButtonLink>
      </div>
      <div className={style.icon}>
        <IoSettingsSharp />
      </div>
    </div>
  );
};

export default CardEmBreve;
