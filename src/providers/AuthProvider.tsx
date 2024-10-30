import React, {createContext, ReactNode, useContext, useState} from 'react';

interface AuthContextType {
  isAuthorized: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const login = () => setIsAuthorized(true);
  const logout = () => setIsAuthorized(false);

  return (
    <AuthContext.Provider value={{isAuthorized, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
