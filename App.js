import * as React from "react";
import { Text, View } from "react-native";

import { DefaultTheme } from "react-native-paper";
import Navigation from "./src/navigation";
import { Provider } from 'react-redux';
import configureStore from './src/redux/store/configureStore';

const store = configureStore()

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      secondaryContainer: "transparent" // Use transparent to disable the little highlighting oval
    }
  };
  return (
    <Provider store = { store }>
      <Navigation />
    </Provider>
  );
}
