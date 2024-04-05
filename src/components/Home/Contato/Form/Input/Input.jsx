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
}) => {
  return (
    <label>
      {label}
      {textarea ? (
        <textarea value={valor} onChange={onChange} onBlur={onBlur}></textarea>
      ) : (
        <input type={tipo} value={valor} onChange={onChange} onBlur={onBlur} />
      )}
      {error && <p className={style.erro}>{error}</p>}
    </label>
  );
};

export default Input;
