import React from 'react'
import style from './style.module.scss'

const Section = ({children, fundo}) => {
  return (
    <section className={style.sectionConteiner} style={{backgroundColor: fundo ? fundo : ""}}>
      {children}
    </section>
  )
}

export default Section
