import React from 'react';
import Section from '../Section/Section';
import style from './style.module.scss';
import Titulo from '../Titulos/Titulo';
import ProjetosConteiner from '../../Projetos/ProjetosConteiner/ProjetosConteiner';
import ButtonLink from '../ButtonLink/ButtonLink';
import projetosJSON from '../../../json/projetos.json';
import Projeto from '../../Projetos/Projeto/Projeto';

const ProjetosDestaque = () => {
  return (
    <Section>
      <div className={style.conteiner}>
        <Titulo separador={true}>Projetos que desenvolvi</Titulo>
        <p className={style.descricao}>
          Projetos front-end que desenvolvi por conta própria. O proximo projeto
          pode ser o seu!
        </p>
        <ProjetosConteiner>
          {projetosJSON.destaque.map((projetos) => {
            return <Projeto key={projetos.titulo} projetos={projetos} />;
          })}
        </ProjetosConteiner>
        <ButtonLink NavLink={true} caminho={'/projetos'}>
          Todos os projetos
        </ButtonLink>
      </div>
    </Section>
  );
};

export default ProjetosDestaque;
