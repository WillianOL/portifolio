import React from 'react'
import Section from '../Section/Section'
import style from './style.module.scss'
import Conteudo from './Conteudo/Conteudo'
import desenhoBanner from '../../../img/section/foto_perfil.png'

const Apresentacao = () => {
  return (
    <Section>
      <div className={style.apresentacao}>
        <Conteudo />
        <img src={desenhoBanner} alt="desenho de perfil do banner" />
      </div>
    </Section>
  )
}

export default Apresentacao
