import React from 'react'
import style from './style.module.scss'
import FraseContato from './FraseContato/FraseContato'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <FraseContato />
    </footer>
  )
}

export default Footer
