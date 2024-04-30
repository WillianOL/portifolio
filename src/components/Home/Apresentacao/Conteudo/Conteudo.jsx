import React from 'react';
import style from './style.module.scss';
import ButtonLink from '../../ButtonLink/ButtonLink';
import { RiFilePaper2Fill } from "react-icons/ri";

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
        para resolver os mais diversos desafios. Explore meu trabalho e descubra
        como transformo linhas de código em experiências incríveis.
      </p>
      <div className={style.buttons}>
        <ButtonLink caminho={'contato'} NavLink={true}>
          Converse comigo
        </ButtonLink>
        <ButtonLink
          caminho={
            'https://drive.google.com/file/d/1aoImCVqxpEAmvlb1qGzlOl5yx4SNWlP1/view?usp=sharing'
          }
          target="_blanck"
        >
          <RiFilePaper2Fill />
        </ButtonLink>
      </div>
    </div>
  );
};

export default Conteudo;
