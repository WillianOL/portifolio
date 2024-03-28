import React from 'react'
import './style.scss'

const Titulo = ({children, cor="#333333", separador}) => {
  return (
    <h1 style={{color:`${cor}`}} className={`titulo ${separador && "separador"}`} >
      {children}
    </h1>
  )
}

export default Titulo
