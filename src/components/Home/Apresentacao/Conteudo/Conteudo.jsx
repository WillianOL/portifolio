import React from 'react';
import style from './style.module.scss';
import { NavLink } from 'react-router-dom';
import ButtonLink from '../ButtonLink/Button';

const Conteudo = () => {
  return (
    <div className={style.conteiner}>
      <p className={style.comando}>
        log(<span>“Hello World!!”</span>)
      </p>
      <h1 className={style.nome}>Sou Willian Oliveira</h1>
      <h2 className={style.profissao}>
        {'<'}
        <span>Desenvolvedor.web</span> {'/>'}
      </h2>
      <p className={style.texto}>
        Seja bem-vindo ao meu portfólio! Sou um desenvolvedor web apaixonado por
        criar aplicações criativas. Estou sempre em busca de soluções inovadoras
        para resolver os mais diversos desafios. Explore meu trabalho e{' '}
        <span>
          descubra como transformo linhas de código em experiências incríveis.
        </span>
      </p>
      <div className={style.buttons}>
        <ButtonLink text="Contato" route="contato" cor="#1E1E1E" />
        <ButtonLink text="Meu curriculo" route="contato" cor="#FFF" color="#333333"/>
      </div>
    </div>
  );
};

export default Conteudo;
