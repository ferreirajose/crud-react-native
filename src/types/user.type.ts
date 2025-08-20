import { ReactNode } from "react";

export type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
};

// Type para o contexto
export type UserContextType = {
  state: {
    MOCK_USERS: User[];
  };
}

// Type para as props do Provider
export type UserProviderProps = {
  children: ReactNode;
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
