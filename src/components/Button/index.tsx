import React, {useEffect} from 'react';
import Button from './type';

const Button = () => {
  useEffect(() => {
    console.log('Button');
  }, []);
  return <button></button>;
};
export default Button;
