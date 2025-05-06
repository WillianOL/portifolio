import React from 'react';
import style from './style.module.scss';
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiSass,
  SiCss3,
  SiHtml5,
  SiGit,
  SiFigma,
  SiDocker,
  SiExpress,
  SiNodedotjs,
  SiPrisma,
  SiPostgresql
} from 'react-icons/si';

const Tecnologias = () => {
  const skillsIcons = [
    { nome: 'NextJS', icone: <TbBrandNextjs /> },
    { nome: 'React', icone: <SiReact /> },
    { nome: 'Typescript', icone: <SiTypescript /> },
    { nome: 'Javascript', icone: <SiJavascript /> },
    { nome: 'Express', icone: <SiExpress /> },
    { nome: 'Node', icone: <SiNodedotjs /> },
    { nome: 'Docker', icone: <SiDocker /> },
    { nome: 'Prisma', icone: <SiPrisma /> },
    { nome: 'Postgresql', icone: <SiPostgresql /> },
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
