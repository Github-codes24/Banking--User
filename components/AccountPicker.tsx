// CommonDropdown.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ViewStyle } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Ionicons } from "@expo/vector-icons";
import { Images } from "@/constants/images";
import { colors } from "@/constants/colors";
import { Fonts } from "@/constants/fonts";

type Props = {
  label: string;
  value: string | null;
  setValue: (val: string | null) => void;
  items: { label: string; value: string }[];
  containerStyle?:ViewStyle
};

const CommonAccountDropdown: React.FC<Props> = ({ label, value, setValue, items , containerStyle }) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={[styles.container , containerStyle]}>
      {/* Left Icon */}
      <Image source={Images.bank1} style={{height:24,width:24}} />

      {/* Vertical Divider */}
      <View style={styles.divider} />

      {/* Dropdown */}
      <View style={styles.dropdownWrapper}>
        <Text style={styles.label}>{label}</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          placeholder="01254700089123"
          showArrowIcon={true}
          ArrowDownIconComponent={() => <Image source={Images.dropdown} style={{width:10 , height:6}}/>}
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          dropDownContainerStyle={styles.dropContainer}
          placeholderStyle={{marginTop:24 , color:colors.gray , fontFamily:Fonts.Regular , fontSize:12}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 12,
    paddingHorizontal: 10,
    backgroundColor: "#EBEBEB",
    height: 48,
    marginBottom: 12,
  },
  icon: {
    marginRight: 10,
  },
  divider: {
    width: 1,
    backgroundColor: colors.gray,
    height: "70%",
    marginHorizontal: 12,
  },
  dropdownWrapper: {
    flex: 1,
  },
  label: {
    position:'absolute',
    fontSize: 16,
    color: colors.lightBlack,
    fontFamily:Fonts.Regular,
    top:4
  },

  dropdown: {
    borderWidth: 0,
    backgroundColor: "transparent",
    paddingHorizontal: 0,
  },
  dropdownText: {
    marginTop:24 , color:colors.gray , fontFamily:Fonts.Regular , fontSize:12,
  },
  dropContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default CommonAccountDropdown;