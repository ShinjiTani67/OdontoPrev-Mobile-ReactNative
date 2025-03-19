import { View, Text } from 'react-native'
import React, { createContext, PropsWithChildren } from 'react'

type AuthContextType = {
    user: string | null;
};
const AuthContext = createContext<AuthContextType>({
        user: null,
});

const AuthProvider = ({children}: PropsWithChildren) => {
    const authContextValue = {
        user: "user",
    };

  return (
    <AuthContext.Provider value={ authContextValue }>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;