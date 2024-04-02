import React from 'react';
import Section from '../Section/Section';
import style from './style.module.scss';
import icon_frase1 from '../../../img/icon_frases/icon_frase1.png';
import icon_frase2 from '../../../img/icon_frases/icon_frase2.png';
import icon_frase3 from '../../../img/icon_frases/icon_frase3.png';
import icon_frase4 from '../../../img/icon_frases/icon_frase4.png';
import Frase from './Frase/Frase';

const Frases = () => {
  return (
    <Section fundo="#333">
      <div className={style.conteiner}>
        <Frase icone={icon_frase1}>
          COMPROMETIDO EM ENTREGAR <span>PROJETOS DE QUALIDADE</span>
        </Frase>
        <Frase icone={icon_frase2}>
          “<span>O importante é não parar de questionar.</span> A curiosidade
          tem sua própria razão de existir.” <br/> - ALBERT EINSTEIN
        </Frase>
        <Frase icone={icon_frase3}>
          sempre <span>resolutivo</span>, buscando diversos meios de resolver o
          que me foi imposto.
        </Frase>
        <Frase icone={icon_frase4}>
          “O talento vence jogos,{' '}
          <span>mas só o trabalho em equipe ganha campeonatos.</span>” - Michael
          Jordan
        </Frase>
      </div>
    </Section>
  );
};

export default Frases;
