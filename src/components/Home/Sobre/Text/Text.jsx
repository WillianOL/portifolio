import React from 'react';
import SubTitulo from '../../Titulos/SubTitulo/SubTitulo';
import style from './style.module.scss';
import ButtonLink from '../../Apresentacao/ButtonLink/Button';

const Text = () => {
  return (
    <div className={style.conteiner}>
      <SubTitulo>Sobre o dev Will</SubTitulo>
      <p className={style.paragrafo}>
        Sou um <span>Desenvolvedor Front-End</span> apaixonado por criar
        aplicações web inovadoras e de alto valor. Minha jornada na programação
        começou em 2021, e desde então, tenho me dedicado diariamente a
        aprimorar minhas habilidades.
      </p>
      <p className={style.paragrafo}>
        <span>Cada um dos meus projetos</span> reflete meu constante processo de
        aprendizado e evolução como desenvolvedor. Em todos os desafios que
        enfrento, dou o meu melhor e absorvo valiosas lições. Além disso, tenho
        <span> experiência em projetos pessoais</span> que me permitiram
        explorar diferentes tecnologias e abordagens.
      </p>
      <p className={style.paragrafo}>
        Se quiser conhecer mais sobre meus trabalhos, confira os vídeos
        disponíveis no meu perfil do{' '}
        <a
          href="https://www.linkedin.com/in/willian-oliveira-dev/"
          target="_blanck"
          className="link"
        >
          LinkedIn
        </a>{' '}
        e{' '}
        <a
          href="https://github.com/WillianOL"
          target="_blanck"
          className="link"
        >
          Github
        </a>
        .
      </p>
      <ButtonLink route="contato" text="Contato" marginTop="50px"/>
    </div>
  );
};

export default Text;
