type RouteProps = {
  key: string;
  name: string;
  params?: any;
};

type NavigationProps = {
  addListener: (event: string, callback: () => void) => void;
  navigate: (route: string, params?: any) => void;
  goBack: () => void;
  // Adicione apenas os métodos que você realmente usa
};

export type ScreenPropsNav = {
  navigation: NavigationProps;
  route: RouteProps;
};
