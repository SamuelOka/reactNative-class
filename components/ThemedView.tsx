import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ViewProps,
} from "react-native";
import React from "react";
import { Colors } from "../constants/colors";

const ThemedView = ({ style, ...props }: ViewProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props} />
  );
};

export default ThemedView;

const styles = StyleSheet.create({});
