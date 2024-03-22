import React from 'react';
import Section from '../Section/Section';
import Text from './Text/Text';
import Titulo from '../Titulos/Titulo';
import Ferramentas from './Ferramentas/Ferramentas';
import style from './style.module.scss';

const Sobre = () => {
  return (
    <Section>
      <div className={style.conteiner}>
        <Titulo>Eu, dev Willian Oliveira</Titulo>
        <div className={style.conteudo}>
          <Text />
          <Ferramentas />
        </div>
      </div>
    </Section>
  );
};

export default Sobre;
