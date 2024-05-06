import React from 'react'
import Section from '../Section/Section'
import style from './style.module.scss'
import TextoERedes from './TextoERedes/TextoERedes'
import Form from './Form/Form'

const Contato = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Section fundo="#333333" className="contato">
      <div className={style.conteiner}>
        <TextoERedes />
        <Form />
      </div>
    </Section>
  )
}

export default Contato
