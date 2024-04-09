import React from 'react'
import style from './style.module.scss'

const MensagemEnviado = ({sendSecess, setSendSucess}) => {
  if(sendSecess) {
    setTimeout(() => {
      setSendSucess(false)
    }, 4500)
  }

  return (
    <article className={style.mensagemEnviada} style={{display: sendSecess ? "block" : "none"}}>
      <p>Mensagem enviada, agradeço pela confiança! Em breve entrarei em contato😁</p>
    </article>
  )
}

export default MensagemEnviado
