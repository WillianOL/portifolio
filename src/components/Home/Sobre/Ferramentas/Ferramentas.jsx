import React from 'react';
import Skills from './Skills/Skills';

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
    <div>
      <Skills skills={skills} />
    </div>
  );
};

export default Ferramentas;
