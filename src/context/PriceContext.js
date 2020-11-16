import React, { createContext, useState } from 'react';

const Context = createContext({});

export function PriceContextProvider({ children }) {
  const [price, setPrice] = useState(295.95);
  return (
    <Context.Provider value={{price, setPrice}}>{children}</Context.Provider>
  );
}

export default Context;
