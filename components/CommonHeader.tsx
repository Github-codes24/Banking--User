import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Images } from "@/constants/images";
import { Fonts } from "@/constants/fonts";
import { colors } from "@/constants/colors";
import { router } from "expo-router";

interface CommonHeaderProps {
  title: string;
  onBack?: () => void;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  iconColor?: string;
}

const CommonHeader: React.FC<CommonHeaderProps> = ({
  title,
  onBack,
  containerStyle,
  titleStyle,
  iconColor = "#000",
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={()=>{router.back()}} style={styles.iconWrapper}>
        <Image source={Images.back} style={{height : 40 , width : 40}}/>
      </TouchableOpacity>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <View style={{height:40,width:40}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    justifyContent:'space-between'
  },
  iconWrapper: {
    // marginRight: 12,
  },
  title: {
    fontSize: 20,
fontFamily:Fonts.Medium,
    color: colors.lightBlack,
  },
});

export default CommonHeader;