import React from 'react';
import style from './style.module.scss';


const Texto = () => {
  return (
    <div className={style.textoConteiner}>
      <h1 className={style.titulo}>E ai, vamo lá?</h1>
      <p className={style.texto}>
        Se você gostou do que viu, que tal trabalharmos juntos? Acredito que com
        minhas habilidades,{' '}
        <span>posso agregar muito à sua equipe ou projeto.</span> Estou ansioso
        para colaborar!
      </p>

    </div>
  );
};

export default Texto;
