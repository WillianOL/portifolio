import React from 'react'
import style from './style.module.scss'
import Apresentacao from './Apresentacao/Apresentacao'
import Sobre from './Sobre/Sobre'
import ProjetosDestaque from './ProjetosDestaque/ProjetosDestaque'
import Contato from './Contato/Contato'

const Home = () => {
  return (
    <main className={style.mainConteiner}>
      <Apresentacao />
      <Sobre />
      <ProjetosDestaque />
      <Contato />
    </main>
  )
}

export default Home
