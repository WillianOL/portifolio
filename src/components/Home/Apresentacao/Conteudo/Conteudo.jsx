import React from 'react';
import style from './style.module.scss';
import ButtonLink from '../../ButtonLink/ButtonLink';
import { RiFilePaper2Fill } from 'react-icons/ri';

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
        Sempre me dedicando a aprimorar meus conhecimentos em programação. Em busca de soluções inovadoras para resolver os mais diversos
        desafios e problemas. Meu objetivo é se tornar um desenvolvedor Full Stack de muito valor.
      </p>
      <div className={style.buttons}>
        <ButtonLink caminho={'contato'} NavLink={true}>
          Converse comigo
        </ButtonLink>
        <ButtonLink
          caminho={
            'https://drive.google.com/file/d/1o0WCPx5vf1xQdCmsUgt26X57JVqhFa8J/view?usp=sharing'
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
