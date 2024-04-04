import React from 'react';

const dado = {
  email: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    mensagemErro: 'Preencha com um email válido',
  },
};

const useForm = (tipoDado) => {
  const [valor, setValor] = React.useState('');
  const [error, setError] = React.useState('');

  function validacao(value) {
    if (value.length === 0) {
      setError('Preencha este campo');
      return false;
    } else if (dado[tipoDado] && !dado[tipoDado].regex.test(value)) {
      setError(dado[tipoDado].mensagemErro);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validacao(target.value);
    setValor(target.value);
  }

  return {
    valor,
    setValor,
    onChange,
    setError,
    error,
    onBlur: () => validacao(valor),
  };
};

export default useForm;
