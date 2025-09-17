import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet, View, Text, Image, ViewStyle, TextStyle } from "react-native";
import { Images } from "@/constants/images";
import { colors } from "@/constants/colors";

type Props = {
  label?: string;
  items: { label: string; value: string }[];
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
  placeholder?: string;
  containerStyle?: object;
  dropdownStyle?: ViewStyle;
  placeholderStyle?: TextStyle;
  dropdownStyleContainer?: ViewStyle;
  labelStyle?: TextStyle;
  iconHeight?:any
};

const CommonDropdown: React.FC<Props> = ({
  label,
  items,
  value,
  setValue,
  placeholder = "Select an option",
  containerStyle,
  dropdownStyle,
  placeholderStyle,
  dropdownStyleContainer,
  labelStyle,
  iconHeight,
}) => {
  const [open, setOpen] = useState(false);
  const [listItems, setListItems] = useState(items);

  return (
    <View style={[styles.wrapper, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <DropDownPicker
        open={open}
        value={value}
        items={listItems}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setListItems}
        placeholder={placeholder}
        style={[styles.dropdown, dropdownStyle]}
        dropDownContainerStyle={[styles.dropdownContainer, dropdownStyleContainer]}
        textStyle={styles.text}
        placeholderStyle={placeholderStyle}
        itemSeparator
        listItemContainerStyle={{ backgroundColor: '#fff' }}
        itemSeparatorStyle={{ borderColor: '#e8e8e8ff', borderWidth: 0.5, borderRadius: 12 }}
        customItemContainerStyle={{ backgroundColor: "#e10909ff", paddingHorizontal: 16 }}
        ArrowDownIconComponent={() => (
          <Image source={Images.dropdown} style={{ height: iconHeight ?? 7, width: 10 }} />
        )}
        
      // ArrowUpIconComponent={() => (
      //   <Image
      //     source={require("../assets/images/dropdown.png")}
      //     style={{
      //       height: 12,
      //       width: 12,
      //       resizeMode: "contain",
      //       transform: [{ rotate: "180deg" }],
      //     }}
      //   />
      // )}
      />
    </View>
  );
};

export default CommonDropdown;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 12,
 backgroundColor: "#EBEBEB",
    height: 54,
  },
  label: {
    fontSize: 12,
    color: "#000000 ",
    marginBottom: 8
  },
  dropdown: {
     borderWidth: 0,
    backgroundColor: "transparent",
    paddingHorizontal: 12,
  },
  dropdownContainer: {
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    // fontFamily: fonts.interRegular,
    color: colors.lightBlack,
    paddingHorizontal: 6,
  },
});
