import React from 'react';
import Section from '../Section/Section';
import style from './style.module.scss';
import Text from './Text/Text';
import Titulo from '../Titulos/Titulo';

const Sobre = () => {
  return (
    <Section>
      <div className={style.conteiner}>
        <Titulo>Eu, dev Willian Oliveira</Titulo>
        <div className={style.conteudo}>
          <Text />
          
        </div>
      </div>
    </Section>
  );
};

export default Sobre;
