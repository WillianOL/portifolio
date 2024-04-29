import React from 'react'
import Titulo from '../../Home/Titulos/Titulo'
import style from './style.module.scss'

const TituloFrase = () => {
  return (
    <div className={style.conteiner}>
      <Titulo separador={true}>Todos os projetos que desenvolvi ou participei</Titulo>
      <p>Todos os projetos que desenvolvi ou participei até agora.</p>
    </div>
  )
}

export default TituloFrase
