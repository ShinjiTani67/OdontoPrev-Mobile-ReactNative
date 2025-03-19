import { View, Text } from 'react-native'
import React, { createContext, PropsWithChildren } from 'react'

type AuthContextType = {
    user: string | null;
};
const authContext = createContext<AuthContextType>({
        user: null,
});

const AuthProvider = ({children}: PropsWithChildren) => {
    const currentUser = {
        user: "user",
    };

  return (
    <authContext.Provider value={ currentUser }>
        {children}
    </authContext.Provider>
  );
};

export default AuthProvider;