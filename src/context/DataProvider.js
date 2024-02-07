import { createContext, useState } from "react";
import { useNavigate } from "react-router";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [loginState, setLoginState] = useState(false);
  const baseURL = "http://54.160.136.37:8000/";
  return (
    <DataContext.Provider value={{ loginState, setLoginState, baseURL }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
