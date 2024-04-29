import React from 'react'
import style from './style.module.scss'

const ProjetosConteiner = ({children}) => {
  return (
    <div className={style.conteiner}>
      {children}
    </div>
  )
}

export default ProjetosConteiner
