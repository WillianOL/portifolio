import React from 'react'
import style from './style.module.scss'

const Frase = ({children, icone}) => {
  return (
    <article className={style.frase}>
      <p>{children}</p>
      <img src={icone} alt="icone da frase"/>
    </article>
  )
}

export default Frase
