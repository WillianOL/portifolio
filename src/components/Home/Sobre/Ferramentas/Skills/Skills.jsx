import React from 'react'
import SubTitulo from '../../../Titulos/SubTitulo/SubTitulo'
import style from './style.module.scss'

const Skills = ({skills}) => {
  return (
    <div className={style.conteiner}>
      <SubTitulo>{"<Ferramentas />"}</SubTitulo>
      <ul className={style.tecnologias}>
        {skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    </div>
  )
}

export default Skills
