import React from 'react';
import style from './Projeto.module.scss';
import SubTitulo from '../../../Titulos/SubTitulo/SubTitulo';

const Projeto = ({
  projetos: { titulo, descricao, tecnologias, banner, links },
}) => {
  return (
    <div className={style.projeto}>
      <div className={style.informacoes}>
        <SubTitulo>{titulo}</SubTitulo>
        <p>{descricao}</p>
        <ul className={style.tecnologias}>
          {tecnologias.map((tec) => (
            <li key={tec}>{tec}</li>
          ))}
        </ul>
        <nav className={style.buttons}>
          <a href={links.deploy} target="_blank" rel="noreferrer">
            Ver projeto
          </a>
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </div>
      <div className={style.imgConteiner}>
        <img src={banner} alt={titulo} />
      </div>
    </div>
  );
};

export default Projeto;
