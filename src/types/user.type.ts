import { Dispatch, ReactNode } from "react";

export type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
};

// Type User State
export type UserState = {
  users: User[];
}

// Type para ações do usuario ou action users
export type UserAction = {
  type: string;
  payload?: any;
}

// Type para o contexto
export type UserContextType = {
  state: UserState,
  dispatch: Dispatch<UserAction>
}

// Type para as props do Provider
export type UserProviderProps = {
  children: ReactNode;
}

// Definindo o tipo para as ações
export type ActionHandlers = {
  [key: string]: (state: UserState, action: UserAction) => UserState;
}

export type Separators = {
  highlight?: () => void;
  unhighlight?: () => void;
  updateProps?: (select: "leading" | "trailing", newProps: any) => void;
};

export type UserItemProps = {
  item: User;
  index: number;
  separators: Separators;
};
