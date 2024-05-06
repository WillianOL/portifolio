import React from 'react';
import Section from '../Section/Section';
import Titulo from '../Titulos/Titulo';
import style from './style.module.scss';
import Tecnologias from './Tecnologias/Tecnologias';

const Sobre = () => {
  return (
    <Section>
      <div className={style.conteiner}>
        <Titulo separador={true} >Um pouco sobre mim...</Titulo>
        <p className={style.paragrafo}>
          Sou um Desenvolvedor Front-End apaixonado por criar aplicações web
          inovadoras. Minha jornada na programação começou em 2021, e desde
          então, tenho me dedicado diariamente a aprimorar minhas habilidades.
        </p>
        <Tecnologias />
      </div>
    </Section>
  );
};

export default Sobre;
