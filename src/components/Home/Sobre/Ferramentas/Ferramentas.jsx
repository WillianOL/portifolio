import React from 'react';
import Skills from './Skills/Skills';
import Principais from './Principais/Principais';
import style from './style.module.scss'

const Ferramentas = () => {
  const skills = [
    'React',
    'Sass',
    'Javascript',
    'HTML',
    'CSS',
    'GIT',
    'Design Básico',
    'GitHub',
  ];
  return (
    <div className={style.conteiner}>
      <Skills skills={skills} />
      <Principais />
    </div>
  );
};

export default Ferramentas;
