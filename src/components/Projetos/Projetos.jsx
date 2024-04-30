import React from 'react';
import style from './style.module.scss';
import Section from '../Home/Section/Section';
import TituloFrase from './TituloFrase/TituloFrase';
import ProjetosConteiner from './ProjetosConteiner/ProjetosConteiner';
import projetos from '../../json/projetos.json';
import Projeto from './Projeto/Projeto';
import CardEmBreve from './ProjetosConteiner/CardEmBreve/CardEmBreve';

const Projetos = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={style.projetosConteiner}>
      <Section>
        <TituloFrase />
        <ProjetosConteiner>
          {projetos.projetosTodos.map((projeto) => {
            return <Projeto projetos={projeto} key={projeto.titulo} />;
          })}
          <CardEmBreve />
        </ProjetosConteiner>
      </Section>
    </div>
  );
};

export default Projetos;
