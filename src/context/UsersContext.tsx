import React, { createContext } from "react";
import { MOCK_USERS } from '../data/users';
import { UserContextType, UserProviderProps } from "../types/user.type";

// Criando o payload e inicializando com uma lista de MOCK_USERS
const payLoad: UserContextType = {
  state: {
    MOCK_USERS: MOCK_USERS // Aqui você precisa garantir que MOCK_USERS seja do tipo User[]
  }
}

// Criando contexto com estado vazio = {} e tipo definido
const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    return (
        <UserContext.Provider value={payLoad}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext 