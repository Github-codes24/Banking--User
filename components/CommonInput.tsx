import { colors } from "@/constants/colors";
import { Fonts } from "@/constants/fonts";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Platform,
    StyleProp,
    StyleSheet,
    TextInput,
    TextStyle,
    View,
    ViewStyle,
} from "react-native";

interface Props {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showPasswordToggle?: boolean; // auto show/hide eye
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  leftIconStyle?: StyleProp<ViewStyle>;
  rightIconStyle?: any;
}

export default function CommonInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  leftIcon,
  rightIcon,
  showPasswordToggle = false,
  containerStyle,
  inputStyle,
  leftIconStyle,
  rightIconStyle,
}: Props) {
  const [hidePassword, setHidePassword] = useState(secureTextEntry);

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Left Icon */}
      {leftIcon && <View style={[styles.iconLeft, leftIconStyle]}>{leftIcon}</View>}

      {/* Divider if left icon */}
      {leftIcon && <View style={styles.divider} />}

      {/* Input */}
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={hidePassword}
        placeholderTextColor="#777"
        textAlignVertical="center"

      />

      {/* Right Icon (custom or eye toggle) */}
      {showPasswordToggle ? (
        <Ionicons
          name={hidePassword ? "eye-off" : "eye"}
          size={20}
          color="#555"
          style={[styles.iconRight, rightIconStyle]}
          onPress={() => setHidePassword(!hidePassword)}
        />
      ) : (
        rightIcon && <View style={[styles.iconRight, rightIconStyle]}>{rightIcon}</View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EBEBEB",
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: colors.gray,
    borderWidth: 1,
    height: 48, // ✅ fixed default height
  },
  iconLeft: {
    // marginRight: 6,
  },
  divider: {
    width: 1,
    height: 32,
    backgroundColor: "#808080",
    marginHorizontal: 16,
  },
  input: {
  flex: 1,
  fontFamily: Fonts.Regular,
  fontSize: 16,
  color: colors.gray,
  justifyContent:'center',
  alignItems:'center'
},

  iconRight: {
    marginLeft: 8,
  },
});

