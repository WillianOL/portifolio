import React from 'react'
import style from './style.module.scss'
import Apresentacao from './Apresentacao/Apresentacao'

const Home = () => {
  return (
    <main className={style.mainConteiner}>
      <Apresentacao />
    </main>
  )
}

export default Home
