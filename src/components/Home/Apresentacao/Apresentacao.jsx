import React from 'react'
import Section from '../Section/Section'
import style from './style.module.scss'
import Conteudo from './Conteudo/Conteudo'
import imagemApresentacao from '../../../img/section/imagem_apresentacao.png'
import Tecnologias from './Tecnologias/Tecnologias'

const Apresentacao = () => {
  return (
    <Section>
      <div className={style.apresentacao}>
        <div className={style.textoEImagem}>
          <Conteudo />
          <img src={imagemApresentacao} alt="desenho de perfil do banner" />
        </div>
      </div>
    </Section>
  )
}

export default Apresentacao
