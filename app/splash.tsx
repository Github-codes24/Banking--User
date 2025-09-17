import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Fonts } from "@/constants/fonts"; // <-- your common font file
import { colors } from "@/constants/colors";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("@/assets/images/logo.png")} // put your logo inside assets
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>MAA ANUSAYA URBAN</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Credit Co-operative Society Ltd. Gondia
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // white background
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontFamily: Fonts.Bold,
    fontSize: 24,
    color: colors.primary, // redc
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: Fonts.Medium,
    fontSize: 16,
    color: colors.lightBlack,
    textAlign: "center",
  },
});
