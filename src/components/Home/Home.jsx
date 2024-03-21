import React from 'react'
import style from './style.module.scss'
import Apresentacao from './Apresentacao/Apresentacao'
import Sobre from './Sobre/Sobre'

const Home = () => {
  return (
    <main className={style.mainConteiner}>
      <Apresentacao />
      <Sobre />
    </main>
  )
}

export default Home
