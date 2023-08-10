import React, {createContext} from 'react';
export const Context = createContext({});

const MainContext = (props: any) => {
  const {children} = props;
  const [state] = React.useState<any>({
    user: {},
    settings: {},
  });

  return (
    <Context.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default MainContext;
