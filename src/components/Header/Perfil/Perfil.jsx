import React from 'react'
import perfilImage from "../../../img/headerImg/foto_perfil.png"
import style from "./style.module.scss"
import { NavLink } from 'react-router-dom'

const Perfil = () => {
  return (
    <div>
      <NavLink to="/" className={style.conteiner}>
        <img src={perfilImage} alt="foto de perfil do header" />
        Willian Oliveira
      </NavLink>
    </div>
  )
}

export default Perfil
