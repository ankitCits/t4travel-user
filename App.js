import * as React from "react";
import { Text, View } from "react-native";

import { DefaultTheme, Provider } from "react-native-paper";
import Navigation from "./src/navigation";

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      secondaryContainer: "transparent" // Use transparent to disable the little highlighting oval
    }
  };
  return (
    <Provider theme={theme}>
      <Navigation />
    </Provider>
  );
}
