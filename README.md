# Telehealth Sign-In UI Assignment

A pixel-perfect, completely responsive React Native implementation of a green-themed Telehealth Sign-In screen.

## Assignment Requirements
The goal of this assignment was to implement a sign-in screen matching a provided Dribbble design.
- **Tech Stack**: React Native with Expo
- **Constraints**: 
  - Use ONLY core React Native components.
  - Do NOT use any external UI libraries (like NativeBase, React Native Paper, etc.).
- **Design Specifications**:
  - Recreate the UI accurately based on the green and black color scheme.
  - Ensure the layout is responsive for mobile screens.
  - Maintain proper spacing, alignment, and typography.
- **Required Elements**:
  - Custom App logo
  - Heading and subheading
  - Email input field with icon
  - Password input field with lock and visibility toggle icons
  - Sign In button
  - Social login buttons (Facebook, Google, Instagram)
  - Sign up and forgot password text actions

## Implementation Details
1. **Custom Programmatic Logo**: Instead of relying on an image asset for the logo, it was built programmatically using standard `View` components with `borderRadius` and specific dimensions to create a resolution-independent, crisp green cross logo.
2. **Clean Component Architecture**: The code is structured for maintainability. Reusable components like `FormInput`, `Logo`, and `SocialButton` were extracted to keep the main screen clean and readable.
3. **Bug-Free Focus State**: The text inputs manage their own isolated focus states using `useState` and `useCallback` locally. This prevents the parent screen from re-rendering on focus/blur events, avoiding issues like keyboard auto-dismissal or layout shifts that happen when using wrapper-based state management.
4. **Responsive Layout**: Wrapped the entire scrollable area in a `KeyboardAvoidingView` set to `padding` behavior for iOS, ensuring the UI shifts smoothly when the keyboard opens.
5. **Modern Iconography**: Downloaded and integrated modern, clean PNG icons that perfectly match the rounded aesthetics of the original design.
6. **Design Tokens**: Colors and icon paths are centralized at the top of the file in `COLORS` and `ICONS` objects for easy theming and asset management.

## How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the Expo server:**
   ```bash
   npx expo start
   ```
3. Scan the QR code with the Expo Go app on your physical device, or press `i` to open in an iOS simulator, or `a` for an Android emulator.

## Output Reference
![Output Reference](./assets/images/WhatsApp%20Image%202026-05-10%20at%2010.49.22.jpeg)
