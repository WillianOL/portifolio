import React from 'react'
import style from './style.module.scss'
import Texto from './Texto/Texto'
import Redes from './Redes/Redes'

const TextoERedes = () => {
  return (
    <div className={style.conteiner}>
      <Texto />
      <Redes titulo={"Redes"} />
    </div>
  )
}

export default TextoERedes
