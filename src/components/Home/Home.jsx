import React from 'react'
import style from './style.module.scss'
import Apresentacao from './Apresentacao/Apresentacao'
import Sobre from './Sobre/Sobre'
import ProjetosDestaque from './ProjetosDestaque/ProjetosDestaque'

const Home = () => {
  return (
    <main className={style.mainConteiner}>
      <Apresentacao />
      <Sobre />
      <ProjetosDestaque />
    </main>
  )
}

export default Home
