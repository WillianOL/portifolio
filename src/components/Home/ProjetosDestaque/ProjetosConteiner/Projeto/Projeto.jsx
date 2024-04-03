import React from 'react';
import style from './Projeto.module.scss';
import SubTitulo from '../../../Titulos/SubTitulo/SubTitulo';
import ButtonLink from '../../../ButtonLink/ButtonLink';

const Projeto = ({
  projetos: { titulo, descricao, tecnologias, banner, links, background="" },
}) => {
  return (
    <div className={style.projeto} style={{backgroundColor:background}}>
      <div className={style.informacoes}>
        <SubTitulo>{titulo}</SubTitulo>
        <p>{descricao}</p>
        <ul className={style.tecnologias}>
          {tecnologias.map((tec) => (
            <li key={tec}>{tec}</li>
          ))}
        </ul>
        <nav className={style.buttons}>
          <ButtonLink caminho={links.deploy} target="_blanck">Ver projeto</ButtonLink>
          <ButtonLink caminho={links.github} target="_blanck">Github</ButtonLink>
        </nav>
      </div>
      <div className={style.imgConteiner}>
        <img src={banner} alt={titulo} />
      </div>
    </div>
  );
};

export default Projeto;
