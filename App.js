import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigaton/Navigator";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import AuthProvider from "./src/context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <ExpoStatusBar style="auto" />
      <Navigator />
    </AuthProvider>
  );
}
