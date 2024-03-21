import React from 'react'
import style from './style.module.scss'

const Titulo = ({children, cor="#333333"}) => {
  return (
    <h1 style={{color:`${cor}`}} className={style.titulo}>
      {children}
    </h1>
  )
}

export default Titulo
