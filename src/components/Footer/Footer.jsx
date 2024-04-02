import React from 'react'
import style from './style.module.scss'
import FraseContato from './FraseContato/FraseContato'
import NomeESocial from './NomeESocial/NomeESocial'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <FraseContato />
      <NomeESocial />
    </footer>
  )
}

export default Footer
