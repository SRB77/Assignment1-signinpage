import React, { useCallback, useRef, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// ─── Design Tokens ───────────────────────────────────────────────
const COLORS = {
  primary: "#85CC16",
  background: "#F9F9F9",
  surface: "#FFFFFF",
  textPrimary: "#111827",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  borderActive: "#85CC16",
};

// ─── Icon Assets ─────────────────────────────────────────────────
const ICONS = {
  email: require("../../assets/expo.icon/Assets/email.png"),
  lock: require("../../assets/expo.icon/Assets/lock.png"),
  eyeOff: require("../../assets/expo.icon/Assets/eye-off.png"),
  arrowRight: require("../../assets/expo.icon/Assets/arrow-right.png"),
  facebook: require("../../assets/expo.icon/Assets/facebook.png"),
  google: require("../../assets/expo.icon/Assets/google.png"),
  instagram: require("../../assets/expo.icon/Assets/instagram.png"),
};

// ─── Reusable Components ─────────────────────────────────────────

/** Green cross logo built from pill-shaped Views */
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

/** Square social login button */
const SocialButton = ({ icon }: { icon: any }) => (
  <TouchableOpacity style={styles.socialButton} activeOpacity={0.7}>
    <Image source={icon} style={styles.socialIcon} resizeMode="contain" />
  </TouchableOpacity>
);

/**
 * Self-contained input field that manages its own focus border.
 * Uses a local useState so only THIS component re-renders on focus/blur,
 * preventing the parent from re-rendering and unmounting the TextInput.
 */
const FormInput = ({
  label,
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default" as any,
  autoCapitalize = "sentences" as any,
  rightIcon,
  onRightIconPress,
}: {
  label: string;
  icon: any;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: any;
  autoCapitalize?: any;
  rightIcon?: any;
  onRightIconPress?: () => void;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);

  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputContainerFocused,
        ]}
      >
        <Image source={icon} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={COLORS.textSecondary}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {rightIcon && onRightIconPress && (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={styles.eyeIconContainer}
          >
            <Image source={rightIcon} style={styles.inputIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

// ─── Main Screen ─────────────────────────────────────────────────

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = useCallback(
    () => setIsPasswordVisible((prev) => !prev),
    []
  );

  return (
    <View style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo */}
          <Logo />

          {/* Heading */}
          <View style={styles.headerContainer}>
            <Text style={styles.heading}>Sign In</Text>
            <Text style={styles.subheading}>
              Let's experience the joy of telecare AI.
            </Text>
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            <FormInput
              label="Email Address"
              icon={ICONS.email}
              placeholder="elementary221b@gmail.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <FormInput
              label="Password"
              icon={ICONS.lock}
              placeholder="Enter your password..."
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
              rightIcon={ICONS.eyeOff}
              onRightIconPress={togglePasswordVisibility}
            />

            {/* Sign In Button */}
            <TouchableOpacity style={styles.signInButton} activeOpacity={0.8}>
              <Text style={styles.signInButtonText}>Sign In</Text>
              <Image source={ICONS.arrowRight} style={styles.arrowIcon} />
            </TouchableOpacity>
          </View>

          {/* Social Logins */}
          <View style={styles.socialContainer}>
            <SocialButton icon={ICONS.facebook} />
            <SocialButton icon={ICONS.google} />
            <SocialButton icon={ICONS.instagram} />
          </View>

          {/* Footer */}
          <View style={styles.footerContainer}>
            <View style={styles.signUpRow}>
              <Text style={styles.footerText}>Don't have an account? </Text>
              <TouchableOpacity>
                <Text style={styles.linkText}>Sign Up.</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.forgotPasswordContainer}>
              <Text style={styles.linkText}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

// ─── Styles ──────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: Platform.OS === "android" ? 40 : 60,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: "center",
  },

  // Logo
  logoContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  logoMiddleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 44,
    marginVertical: 4,
  },
  pillVertical: {
    width: 14,
    height: 18,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  pillHorizontal: {
    width: 18,
    height: 14,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },

  // Header
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginBottom: 12,
  },
  subheading: {
    fontSize: 15,
    color: COLORS.textSecondary,
  },

  // Form
  formContainer: {
    width: "100%",
    marginBottom: 32,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  inputContainerFocused: {
    borderColor: COLORS.borderActive,
    shadowColor: COLORS.borderActive,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  inputIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.textSecondary,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    color: COLORS.textPrimary,
    paddingVertical: 18,
  },
  eyeIconContainer: {
    padding: 8,
  },

  // Sign In Button
  signInButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  signInButtonText: {
    color: COLORS.surface,
    fontSize: 16,
    fontWeight: "600",
    marginRight: 8,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.surface,
  },

  // Social Logins
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 40,
  },
  socialButton: {
    width: 56,
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  socialIcon: {
    width: 24,
    height: 24,
  },

  // Footer
  footerContainer: {
    alignItems: "center",
    marginTop: "auto",
  },
  signUpRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  footerText: {
    fontSize: 14,
    color: COLORS.textPrimary,
  },
  linkText: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.primary,
    textDecorationLine: "underline",
  },
  forgotPasswordContainer: {
    marginTop: 4,
  },
});

