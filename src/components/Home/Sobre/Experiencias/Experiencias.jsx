import React from 'react'
import style from './style.module.scss'

const Experiencias = () => {
  return (
    <div className={style.experiencias}>
      <ul className={style.conteiner}>
        <li>
          <h3>2021 - Inicio dos estudos</h3>
          <p>Inicio dos meus estudos em programação, onde comecei e finalizei o aprendizado sobre HTML e CSS. Criação dos primeiros projetos.</p>
        </li>
        <li>
          <h3>2022 - Aprendizado em Javascript, GIT e escolha da área</h3>
          <p>Neste ano aprendi sobre a linguagem Javascript e GIT. Escolhi a área que iria seguir na programação. Desenvolvi projetos mais avançados como um e-commerce de sapatos com um gerenciamento de um carrinho funcional.</p>
        </li>
        <li>
          <h3>2023 - Aprendizado sobre React e SASS</h3>
          <p>Iniciei meus estudos sobre a biblioteca React adiquirindo conhecimentos como hooks, estados, reatividade e etc. Também adicionei o compilador SASS as minhas ferramentas de desenvolvimento.</p>
        </li>
        <li>
          <h3>2023 - Projetos em React e UX/UI</h3>
          <p>Com conhecimentos solidos em React iniciei o desenvolvimento de projetos mais complexos, um exemplo é uma To do List de uma parede de postites, onde apliquei todos meus conhecimentos sobre a biblioteca. Neste ano iniciei meus estudos em UX/UI desing.</p>
        </li>
        <li>
          <h3>2024 - Aprendizado em Typescript</h3>
          <p>Neste ano iniciei meus estudos em typescript, pois ele seria de grande ajuda para evitar bugs utilizando sua tipagem que o javascript não pussue e deixando o código mais organizado e legível.</p>
        </li>
        <li>
          <h3>2025 - Estágio na empresa DNIT(atual)</h3>
          <p>Consegui minha primeira oportunidade como desenvolvedor na DNIT, atuando com integração de sistemas e automação de processos internos usando o n8n. Desenvolvo fluxos automatizados, funcionalidades customizadas e soluções que otimizam tarefas repetitivas, contribuindo para a eficiência operacional e a melhoria contínua dos sistemas internos.</p>
        </li>
      </ul>
    </div>
  )
}

export default Experiencias
