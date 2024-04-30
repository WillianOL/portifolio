import React from 'react';
import SubTitulo from '../../../Titulos/SubTitulo/SubTitulo';
import { FaSass, FaReact } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import style from './style.module.scss';

const Principais = () => {
  const linguagens = [<FaReact />, <RiJavascriptFill />, <FaSass />];
  return (
    <div>
      <SubTitulo>
        {'<'}Ferramentas<span>.afinidade</span> {'/>'}
      </SubTitulo>
      <ul className={style.linguagens}>
        {linguagens.map((linguagem, index) => (
          <li key={index}>{linguagem}</li>
        ))}
      </ul>
    </div>
  );
};

export default Principais;
