import React from 'react';
import style from './style.module.scss'

const FraseContato = () => {
  return (
    <div className={style.conteiner}>
      <p className={style.frase}>
        Se ficou interessado no meu trabalho como desenvolvedor web, não deixe
        de me contatar. Acredito que com minhas habilidades acrecentaria muito
        valor ao seu time de desenvolvimento.
      </p>
      <a href="mailto:williancontato67@gmail.com" className={style.button}>Me contate 👨‍💻</a>
    </div>
  );
};

export default FraseContato;
