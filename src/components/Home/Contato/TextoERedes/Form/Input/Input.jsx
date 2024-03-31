import React from 'react';

const Input = ({ textarea, label, tipo="text" }) => {
  return (
    <label>
      {label}
      {textarea ? <textarea></textarea> : <input type={tipo} />}
    </label>
  );
};

export default Input;
