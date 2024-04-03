import React from 'react'
import style from './style.module.scss'
import projetos from '../../json/projetos.json'
import Projeto from '../../Home/ProjetosDestaque/ProjetosConteiner/Projeto/Projeto'

const ProjetosConteiner = () => {
  return (
    <div className={style.projetosConteiner}>
      {projetos.projetosTodos.map((projeto) => {
        return <Projeto projetos={projeto}/>
      })}
    </div>
  )
}

export default ProjetosConteiner
