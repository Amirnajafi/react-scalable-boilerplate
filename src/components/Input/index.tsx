import React from 'react';
import Iinput from './type';

const Input = (props: Iinput) => {
  const {placeHolder = 'Fill this input', styles = {}, onChange, value} = props;
  return (
    <input
      placeholder={placeHolder}
      style={{
        ...{
          width: '100%',
          maxWidth: '20rem',
          height: '2rem',
          background: 'white',
          padding: '0.5rem',
        },
        ...styles,
      }}
      onChange={onChange}
      value={value}
    />
  );
};
export default Input;
