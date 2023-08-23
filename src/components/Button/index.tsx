import React, {useEffect} from 'react';
import IButton from './type';
import StyledButtom from './style';
const Button = (props: IButton) => {
  const {
    isLoading,
    // backgroundColor = 'unset',
    title = 'click me ',
    onClick,
    styles = {},
    rounded = false,
  } = props;
  useEffect(() => {
    console.log('Button');
  }, []);

  return (
    <StyledButtom
      disabled={isLoading}
      style={{
        ...{
          height: '2rem',
          width: '100%',
          maxWidth: '20rem',
        },
        ...styles,
        ...{
          // backgroundColor,
          borderRadius: rounded ? '1rem' : '0rem',
        },
      }}
      onClick={onClick}
    >
      {isLoading ? 'loading ....' : `${title}`}
    </StyledButtom>
  );
};
export default Button;
