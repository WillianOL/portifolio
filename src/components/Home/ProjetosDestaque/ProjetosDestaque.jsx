import React from 'react';
import Section from '../Section/Section';
import style from './style.module.scss';
import Titulo from '../Titulos/Titulo';
import ProjetosConteiner from './ProjetosConteiner/ProjetosConteiner';

const ProjetosDestaque = () => {
  return (
    <Section>
      <div className={style.conteiner}>
        <Titulo separador={true}>PROJETOS</Titulo>
        <p className={style.descricao}>
          Projetos front-end que desenvolvi por conta própria. Adquiri muito
          conhecimento com cada projeto, e cada um deles carrega um pouco da
          minha caminhada de aprendizado.
        </p>
        <ProjetosConteiner />
      </div>
    </Section>
  );
};

export default ProjetosDestaque;
