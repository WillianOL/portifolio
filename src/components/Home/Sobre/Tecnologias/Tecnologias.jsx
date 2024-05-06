import React from 'react';
import style from './style.module.scss';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiSass,
  SiCss3,
  SiHtml5,
  SiGit,
  SiFigma,
} from 'react-icons/si';

const Tecnologias = () => {
  const skillsIcons = [
    { nome: 'React', icone: <SiReact /> },
    { nome: 'Javascript', icone: <SiJavascript /> },
    { nome: 'SASS', icone: <SiSass /> },
    { nome: 'Typescript', icone: <SiTypescript /> },
    { nome: 'CSS', icone: <SiCss3 /> },
    { nome: 'HTML', icone: <SiHtml5 /> },
    { nome: 'GIT', icone: <SiGit /> },
    { nome: 'Figma', icone: <SiFigma /> },
  ];

  return (
    <div className={style.tecnologiasConteiner}>
      <ul>
        {skillsIcons.map((skill) => (
          <li className={style.tecnologias}>
            <div className={style.icone}>{skill.icone}</div>
            <span className={style.nome}>{skill.nome}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tecnologias;
