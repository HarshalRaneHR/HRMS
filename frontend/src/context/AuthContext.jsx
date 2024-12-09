import React, { createContext, useContext, useState } from "react";

const Context = createContext();
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);

  return (
    <Context.Provider value={{ user, loading }}>{children}</Context.Provider>
  );
};

export const getContext = () => useContext(Context);

export default AuthContext;
