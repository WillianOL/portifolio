import React from 'react';
import SubTitulo from '../../../Home/Titulos/SubTitulo/SubTitulo';
import { IoSettingsOutline } from "react-icons/io5";
import ButtonLink from '../../../Home/ButtonLink/ButtonLink'
import style from './style.module.scss'


const CardEmBreve = () => {
  return (
    <div className={style.conteiner}>
      <div>
        <SubTitulo>Em breve</SubTitulo>
        <p>Em breve, grandes projetos estão a caminho!🚀</p>
        <ButtonLink caminho="/" NavLink={true}>
          Voltar para home
        </ButtonLink>
      </div>
      <div className={style.icon}>
        <IoSettingsOutline />
      </div>
    </div>
  );
};

export default CardEmBreve;
