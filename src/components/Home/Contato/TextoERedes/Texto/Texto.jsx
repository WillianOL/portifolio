import React from 'react'
import style from './style.module.scss'
import ButtonLink from '../../../ButtonLink/ButtonLink'

const Texto = () => {
  return (
    <div className={style.textoConteiner}>
      <h1 className={style.titulo}>Contato</h1>
      <p className={style.texto}>Se você gostou do meu trabalho, não deixe de me contar. Acredito que com minhas habilidades, <span>posso agregar muito à sua equipe ou projeto.</span> Estou ansioso para colaborar!</p>
    </div>
  )
}

export default Texto
