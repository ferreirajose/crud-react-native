import React, { createContext, useContext, useReducer } from "react";
import { MOCK_USERS } from '../data/users';
import { ActionHandlers, User, UserAction, UserContextType, UserProviderProps, UserState } from "../types/user.type";
import { ActionType } from "../actionsType";

// Criando o initialState e inicializando com uma lista de MOCK_USERS
const initialState: UserState = {
  users: MOCK_USERS 
}

// criando objeto que representa as ações ou actions
const actions: ActionHandlers = {
  deleteUser(state: UserState, action: UserAction) {
    const idUser = action.payload;

    return {
      ...state,
      users: state.users.filter((user: User) => user.id !== idUser.id)
    }
  },
  'createUser'(state, action) {
    const newUser = action.payload
    newUser.id = Math.random();

    return {
      ...state,
      users: [...state.users, newUser]
    }
  },
  [ActionType.UPDATE_USER](state, action) {
    const updated = action.payload
    return {
      ...state,
      users: state.users.map((u: User) => u.id === updated.id ? updated : u)
    }
  }
}

// Criando contexto com tipagem completa, com estado inicializado
const UserContext = createContext<UserContextType>({
  state: initialState,
  dispatch: () => null
});

// Hook personalizado para usar o UserContext sem precisa chamar ele dentro de outro component ex:
// ANTES const { state, dispatch} = useContext(UserContext);
// DEPOIS const { state, dispatch } = useUserContext();

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {

  function reducer(state: UserState, action: UserAction): UserState {

    // opção 1
    // if (action.type === ActionType.DELETE_USER) {
    //   const idUser = action.payload;
    //   return {
    //     ...state,
    //     users: state.users.filter((user: User) => user.id !== idUser.id)
    //   }
    // }

    // return state

    // OPÇÃO 2
    const fn = actions[action.type];
    return fn ? fn(state, action) : state;
  } 

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <UserContext.Provider value={{state, dispatch}}>
          {children}
      </UserContext.Provider>
  )
}

export default UserContext 