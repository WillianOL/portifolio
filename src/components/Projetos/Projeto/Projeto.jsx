import React from 'react';
import style from './Projeto.module.scss';
import SubTitulo from '../../Home/Titulos/SubTitulo/SubTitulo';
import ButtonLink from '../../Home/ButtonLink/ButtonLink';

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
          <ButtonLink caminho={links.deploy} target="_blanck">
            Ver projeto
          </ButtonLink>
          <ButtonLink caminho={links.github} target="_blanck">
            Github
          </ButtonLink>
        </nav>
      </div>
      <article className={style.imgConteiner}>
        <img src={banner} alt={titulo} />
      </article>
    </div>
  );
};

export default Projeto;
