import React from 'react';
import projetosJSON from '../../../../json/projetos.json';
import Projeto from './Projeto/Projeto';
import style from "./style.module.scss"

const ProjetosConteiner = () => {
  return <section className={style.conteiner}>
    {projetosJSON.destaque.map((projetos) => {
      return <Projeto key={projetos.titulo} projetos={projetos} />
    })}
  </section>;
};

export default ProjetosConteiner;
