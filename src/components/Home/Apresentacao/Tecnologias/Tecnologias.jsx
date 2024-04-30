import React from 'react';
import CssIcon from '../../../../img/svgs/css.svg?react';
import ReactIcon from '../../../../img/svgs/react.svg?react';
import SassIcon from '../../../../img/svgs/sass.svg?react';
import JsIcon from '../../../../img/svgs/JS.svg?react';
import TstIcon from '../../../../img/svgs/typescript.svg?react';
import HtmlIcon from '../../../../img/svgs/html.svg?react';
import GitIcon from '../../../../img/svgs/git.svg?react';
import style from './style.module.scss';

const Tecnologias = () => {
  const icones = [
    <ReactIcon />,
    <JsIcon />,
    <TstIcon />,
    <SassIcon />,
    <GitIcon />,
    <CssIcon />,
    <HtmlIcon />,
  ];

  return (
    <article className={style.conteiner}>
      <h2>Minhas Skills</h2>
      <ul className={style.tecnologias}>
        {icones.map((icone, index) => {
          return <li key={index}>{icone}</li>;
        })}
      </ul>
    </article>
  );
};

export default Tecnologias;
