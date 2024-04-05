import React from 'react';
import Input from './Input/Input';
import style from './style.module.scss';
import emailJS from '@emailjs/browser';
import useForm from '../../../../hooks/useForm';

const Form = () => {
  const email = useForm('email');
  const nome = useForm('nome');
  const mensagem = useForm('mensagem');

  const key = 'XXdq-rUWujevjsbPD';
  const serviceId = 'service_1qd9zhx';
  const templateId = 'template_hwa2ouh';

  function enviarEmail(event) {
    event.preventDefault();
    if (!email.valor || !nome.valor || !mensagem.valor) {
      nome.setError('Preencha com um valor');
      return;
    }

    const templateParams = {
      from_name: nome.valor,
      message: mensagem.valor,
      email: email.valor,
    };
    emailJS.send(serviceId, templateId, templateParams, key).then((res) => {
      nome.setValor('');
      email.setValor('');
      mensagem.setValor('');
    });
  }

  return (
    <form onSubmit={enviarEmail} className={style.formulario}>
      <div className={style.campos}>
        <Input label="Seu Nome" {...nome} />
        <Input label="Email" tipo="email" {...email} />
        <Input label="Mensagem" {...mensagem} textarea={true} />
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
