import React from 'react'
import Section from '../Section/Section'
import style from './style.module.scss'
import TextoERedes from './TextoERedes/TextoERedes'

const Contato = () => {
  return (
    <Section fundo="#333333">
      <div className={style.conteiner}>
        <TextoERedes />
      </div>
    </Section>
  )
}

export default Contato
