import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RouteStack } from "./RouteStack";
import { lightColors, createTheme, ThemeProvider } from "@rneui/themed";
import { UserProvider } from "./context/UsersContext";

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <NavigationContainer>
          <RouteStack />
        </NavigationContainer>
      </UserProvider>
    </ThemeProvider>
  );
}
