import React from 'react';
import style from './style.module.scss'

const Input = ({
  valor,
  error,
  onBlur,
  onChange,
  textarea,
  label,
  tipo = 'text',
  campo
}) => {
  return (
    <label>
      {label}
      {textarea ? (
        <textarea value={valor} onChange={onChange} onBlur={onBlur} ref={campo}></textarea>
      ) : (
        <input type={tipo} value={valor} onChange={onChange} onBlur={onBlur} ref={campo}/>
      )}
      {error && <p className={style.erro}>{error}</p>}
    </label>
  );
};

export default Input;
