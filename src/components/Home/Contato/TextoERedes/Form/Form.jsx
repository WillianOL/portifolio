import React from 'react';
import Input from './Input/Input';
import style from './style.module.scss';

const Form = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className={style.formulario}>
      <div className={style.campos}>
        <Input label="Seu Nome" />
        <Input label="Email" tipo="email" />
        <Input label="Mensagem" textarea={true} />
      </div>
      <div className={style.botaoEEmail}>
        <button>Enviar email</button>
        <p>
          Ou me contate diretamente em{' '}
          <a href="mailto:williancontato67@gmail.com" className="link">
            williancontato67@gmail.com
          </a>
        </p>
      </div>
    </form>
  );
};

export default Form;
