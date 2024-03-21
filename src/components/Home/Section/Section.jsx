import React from 'react'
import style from './style.module.scss'

const Section = ({children}) => {
  return (
    <section className={style.sectionConteiner}>
      {children}
    </section>
  )
}

export default Section
