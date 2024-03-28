import React from 'react';
import Perfil from './Perfil/Perfil';
import Navegacao from './LinksNav/LinksNav';
import style from './style.module.scss'

const Header = () => {
  return (
    <header className={style.header}>
      <Perfil />
      <Navegacao />
    </header>
  );
};

export default React.memo(Header);
