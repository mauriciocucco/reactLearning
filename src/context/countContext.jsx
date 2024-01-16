import { createContext } from "react";

export const countContext = createContext(12);

export const CountContextProvider = ({ children }) => {
  console.log("CHILDREN: ", children);

  const objetoDesdeContext = {
    count: 2689,
  };

  return (
    <countContext.Provider value={objetoDesdeContext}>
      {children}
    </countContext.Provider>
  );
};
