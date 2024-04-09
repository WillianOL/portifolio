import React from 'react';
import style from './style.module.scss';
import ButtonLink from '../../ButtonLink/ButtonLink';
import { FaCloudDownloadAlt } from 'react-icons/fa';

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
        <ButtonLink caminho={'contato'} NavLink={true} fundo={'#333333'}>
          Contato
        </ButtonLink>
        <ButtonLink
          fundo={'#FFF'}
          cor={'#333333'}
          caminho={"https://drive.google.com/file/d/1aoImCVqxpEAmvlb1qGzlOl5yx4SNWlP1/view?usp=sharing"}
          target="_blanck"
        >
          Currículo <FaCloudDownloadAlt />
        </ButtonLink>
      </div>
    </div>
  );
};

export default Conteudo;
