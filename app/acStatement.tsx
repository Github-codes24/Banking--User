// AccountsScreen.tsx
import CommonAccountDropdown from "@/components/AccountPicker";
import CommonDropdown from "@/components/CommonDropdown";
import { colors } from "@/constants/colors";
import { Fonts } from "@/constants/fonts";
import { Images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

const AccountsScreen = () => {
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);

  const accountOptions = [
    { label: "01254700089123", value: "saving" },
    { label: "09876543212345", value: "current" },
    { label: "56789012345678", value: "loan" },
  ];

  return (
    <View style={styles.container}>
      {/* Filter Header */}
      <View style={styles.filter}>
        <Text style={styles.text}>Filter</Text>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="filter-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Dropdowns */}
      <CommonAccountDropdown
        label="Saving Account"
        value={selectedAccount}
        setValue={setSelectedAccount}
        items={accountOptions}
      />
      <CommonDropdown
        label=""
        value={selectedAccount}
        setValue={setSelectedAccount}
        items={accountOptions}
        containerStyle={{ height: 48 }}
        placeholderStyle={{
          color: colors.gray,
          fontFamily: Fonts.Regular,
          fontSize: 16,
        }}
        iconHeight={6}
      />

          <TouchableOpacity style={styles.applyBtn}>
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
      {/* Opening Balance Card */}
      <View style={styles.balanceCard}>
        <View style={{ flex: 1 }}>
          <Text style={styles.date}>1- Sep-2025</Text>
          <Text style={styles.subText}>Opening Balance</Text>

          <Text style={styles.balanceLabel}>Balance</Text>
          <Text style={styles.balanceValue}>₹ 2546 CR</Text>
        </View>

        <View style={styles.rightSection}>

          <View style={styles.amountRow}>
            <Text style={styles.amountText}>Rs. 0.00</Text>
            <Image source={Images.down} style={{width:24,height:24}}/>
          </View>
        </View>
      </View>
      <View style={{borderTopWidth:1,borderColor:colors.gray,marginTop:6}}/>
    </View>
  );
};

export default AccountsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  filter: {
    backgroundColor: "#FEC604",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontFamily: Fonts.Medium,
  },
  balanceCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "#fff",
    // padding: 12,
    marginTop: 16,
  },
  date: {
    fontSize: 16,
    fontFamily: Fonts.Medium,
    color: colors.lightBlack,
  },
  subText: {
    fontSize: 12,
    fontFamily: Fonts.Regular,
    color: colors.gray,
    marginTop: 2,
  },
  balanceLabel: {
    fontSize: 16,
    fontFamily: Fonts.Medium,
    marginTop: 12,
    color: colors.lightBlack,
  },
  balanceValue: {
    fontSize: 16,
    fontFamily: Fonts.Regular,
    color: "#34C759",
    marginTop: 4,
  },
  rightSection: {
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  applyBtn: {
    backgroundColor:colors.primary,
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 20,
    width:160,
    marginLeft:'auto',
    alignItems:'center'
  },
  applyText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: Fonts.Medium,
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
    gap:8
  },
  amountText: {
    fontSize: 14,
    color: "#34C759",
    fontFamily: Fonts.Medium,
  },
});