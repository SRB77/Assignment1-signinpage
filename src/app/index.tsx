import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

const COLORS = {
  primary: "#85CC16",
  background: "#F9F9F9",
  surface: "#FFFFFF",
  textPrimary: "#111827",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  borderActive: "#85CC16",
};

const Logo = () => (
  <View style={styles.logoContainer}>
    <View style={styles.pillVertical} />
    <View style={styles.logoMiddleRow}>
      <View style={styles.pillHorizontal} />
      <View style={styles.pillHorizontal} />
    </View>
    <View style={styles.pillVertical} />
  </View>
);

const SocialButton = ({ icon }: { icon: any }) => (
  <TouchableOpacity style={styles.socialButton} activeOpacity={0.7}>
    <Image source={icon} style={styles.socialIcon} resizeMode="contain" />
  </TouchableOpacity>
);

export default function SignIn() {
  return <View style={styles.safeArea}></View>;
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.background },
  logoContainer: { alignItems: "center", marginBottom: 32 },
  logoMiddleRow: { flexDirection: "row", justifyContent: "space-between", width: 44, marginVertical: 4 },
  pillVertical: { width: 14, height: 18, backgroundColor: COLORS.primary, borderRadius: 8 },
  pillHorizontal: { width: 18, height: 14, backgroundColor: COLORS.primary, borderRadius: 8 },
  socialButton: { width: 56, height: 56, borderRadius: 16, borderWidth: 1, borderColor: COLORS.border, backgroundColor: COLORS.surface, alignItems: "center", justifyContent: "center" },
  socialIcon: { width: 24, height: 24 },
});
