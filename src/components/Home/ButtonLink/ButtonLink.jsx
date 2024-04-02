import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss';

const ButtonLink = ({ children, NavLink, caminho, fundo, cor, ...props }) => {
  return (
    <>
      {NavLink ? (
        <Link
          to={caminho}
          style={{ backgroundColor: `${fundo}`, color: `${cor}` }}
          className={style.button}
          {...props}
        >
          {children}
        </Link>
      ) : (
        <a
          href={caminho}
          style={{ backgroundColor: `${fundo}`, color: `${cor}` }}
          className={style.button}
          {...props}
        >
          {children}
        </a>
      )}
    </>
  );
};

export default ButtonLink;
