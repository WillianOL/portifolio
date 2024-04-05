import React from 'react';
import Perfil from './Perfil/Perfil';
import Navegacao from './LinksNav/LinksNav';
import style from './style.module.scss'
import MenuMobile from './MenuMobile/MenuMobile';

const Header = () => {
  return (
    <header className={style.header}>
      <Perfil />
      <MenuMobile />
      <Navegacao />
    </header>
  );
};

export default React.memo(Header);
