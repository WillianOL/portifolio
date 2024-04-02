import React from 'react';
import style from './style.module.scss';
import Redes from '../../Home/Contato/TextoERedes/Redes/Redes';

const NomeESocial = () => {
  return (
    <div className={style.conteiner}>
      <div>
        <article className={style.nome}>
          <h2>Willian Oliveira</h2>
          <p>
            Um programador apaixonado por tecnologia e desenvolvimento de
            aplicações criativas 🤟
          </p>
        </article>
        <Redes titulo={'Social'} />
      </div>
      <p className={style.copyright}>©Copyright 2024. Feito por <a href="https://www.linkedin.com/in/willian-oliveira-dev/" target='_black' className='link'>Willian Oliveira</a></p>
    </div>
  );
};

export default NomeESocial;
