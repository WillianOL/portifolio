import React from 'react'
import style from './style.module.scss'
import { NavLink } from 'react-router-dom'
import { IoHome, IoDocumentText } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { FaTruckLoading } from "react-icons/fa";

const MenuMobile = () => {
  return (
    <nav>
      <ul className={style.menuMobile}>
        <NavLink to="sobre">
          <IoDocumentText />
        </NavLink>
        <NavLink to="projetos">
          <FaTruckLoading />
        </NavLink>
        <NavLink to="contato">
          <TiContacts />
        </NavLink>
        <NavLink to="/">
          <IoHome />
        </NavLink>
      </ul>
    </nav>
  )
}

export default MenuMobile
