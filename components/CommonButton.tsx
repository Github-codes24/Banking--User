import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Fonts } from "@/constants/fonts";
import { colors } from "@/constants/colors";

interface Props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export default function CommonButton({ title, onPress, buttonStyle, textStyle }: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 10,
    elevation: 3, 
    shadowColor: "#000", 
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    width:'100%'
  },
  text: {
    fontFamily: Fonts.Medium,
    fontSize: 16,
    color: "#fff",
  },
});
