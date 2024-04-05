import React from 'react'
import style from './style.module.scss'
import Section from '../Home/Section/Section'
import TituloFrase from './TituloFrase/TituloFrase'
import ProjetosConteiner from './ProjetosConteiner/ProjetosConteiner'

const Projetos = () => {
  return (
    <div className={style.projetosConteiner} id="projetosConteiner">
      <Section>
        <TituloFrase />
        <ProjetosConteiner />
      </Section>
    </div>
  )
}

export default Projetos
