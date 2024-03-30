import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import style from './style.module.scss'

const Redes = () => {
  const links = [
    {
      icone: <FaLinkedinIn />,
      link: 'https://www.linkedin.com/in/willian-oliveira-dev/',
    },
    {
      icone: <FaGithub />,
      link: 'https://github.com/WillianOL',
    },
    {
      icone: <FaInstagram />,
      link: 'https://www.instagram.com/_willian67/',
    },
  ];
  return (
    <div className={style.conteiner}>
      <h2 className={style.titulo}>Redes</h2>
      <ul className={style.redesLista}>
        {links.map(({ icone, link }) => {
          return (
            <li key={link}>
              <a href={link} target="_blanck">
                {icone}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Redes;
