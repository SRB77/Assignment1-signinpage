import React from "react";
import { View, StyleSheet } from "react-native";

const COLORS = {
  primary: "#85CC16",
  background: "#F9F9F9",
  surface: "#FFFFFF",
  textPrimary: "#111827",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  borderActive: "#85CC16",
};

export default function SignIn() {
  return <View style={styles.safeArea}></View>;
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.background },
});
