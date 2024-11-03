import React, { createContext } from "react";

const AuthContext = createContext<{
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  authenticateUser: (username: string, password: string) => boolean;
} | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const USERNAME = import.meta.env.VITE_USERNAME;
  const PASSWORD = import.meta.env.VITE_PASSWORD;
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const authenticateUser = (username: string, password: string) => {
    if (username === USERNAME && password === PASSWORD) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, authenticateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
