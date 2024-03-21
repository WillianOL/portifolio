import React from 'react'
import style from "./style.module.scss"

const SubTitulo = ({children}) => {
  return (
    <h2 className={style.subtitulo}>
      {children}
    </h2>
  )
}

export default SubTitulo
