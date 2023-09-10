import { useContext, useState, createContext } from "react";
import useStorage from "../hooks/useStorage";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [token, setToken] = useStorage("token");
  const [isAuthenticated, setIsAuthenticated] = useStorage(
    "isAuthenticated",
    false
  );

  return (
    <AuthContext.Provider
      value={{ token, setToken, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}
