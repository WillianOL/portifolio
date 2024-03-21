import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.scss'

const ButtonLink = ({ cor = '#f95252', text, route, ...props }) => {
  return (
    <NavLink to={route} style={{ backgroundColor:`${cor}`, ...props}} className={style.buttonLink}>
      {text}
    </NavLink>
  );
};

export default ButtonLink;
