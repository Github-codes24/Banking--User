// AccountsScreen.tsx
import CommonAccountDropdown from "@/components/AccountPicker";
import CommonButton from "@/components/CommonButton";
import CommonDropdown from "@/components/CommonDropdown";
import CommonInput from "@/components/CommonInput";
import { colors } from "@/constants/colors";
import { Fonts } from "@/constants/fonts";
import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const AccountsScreen = () => {
    const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
    const [depositPeriodType, setDepositPeriodType] = useState<"months" | "days">("months");

    const accountOptions = [
        { label: "01254700089123", value: "saving" },
        { label: "09876543212345", value: "current" },
        { label: "56789012345678", value: "loan" },
    ];

    return (
        <>
            <View style={styles.container}>
                {/* Dropdowns */}
                <CommonAccountDropdown
                    label="Saving Account"
                    value={selectedAccount}
                    setValue={setSelectedAccount}
                    items={accountOptions}
                    containerStyle={styles.mb16}
                />
                <CommonDropdown
                    label=""
                    value={selectedAccount}
                    setValue={setSelectedAccount}
                    items={accountOptions}
                    containerStyle={[styles.dropdownContainer, styles.mb16]}
                    placeholderStyle={styles.placeholderStyle}
                    iconHeight={6}
                    placeholder="FD Type"
                />
                <CommonInput placeholder="Deposit Amount" containerStyle={styles.mb16} />

                {/* Deposit Period Selector */}
                <View style={styles.periodContainer}>
                    <Text style={styles.periodLabel}>Deposit Period</Text>
                    <View style={styles.periodOptions}>
                        <TouchableOpacity
                            style={styles.option}
                            onPress={() => setDepositPeriodType("months")}
                        >
                            <View style={styles.radioOuter}>
                                {depositPeriodType === "months" && <View style={styles.radioInner} />}
                            </View>
                            <Text style={styles.optionText}>Months</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.option}
                            onPress={() => setDepositPeriodType("days")}
                        >
                            <View style={styles.radioOuter}>
                                {depositPeriodType === "days" && <View style={styles.radioInner} />}
                            </View>
                            <Text style={styles.optionText}>Days</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <CommonInput placeholder="Enter Period in Months" containerStyle={styles.mb16} />
                <CommonDropdown
                    value={selectedAccount}
                    setValue={setSelectedAccount}
                    items={accountOptions}
                    containerStyle={styles.dropdownContainer}
                    placeholderStyle={styles.placeholderStyle}
                    iconHeight={6}
                    placeholder="Maturity Instruction"
                />
                <Text style={{ fontSize: 16, color: colors.lightBlack, fontFamily: Fonts.Medium }}>Note:</Text>
                <Text style={{ fontSize: 14, color: colors.gray, fontFamily: Fonts.Regular }}>Interest / Principal Credit Account will be same as that of From Account.</Text>
            </View>
            <View style={{backgroundColor:'#fff' , paddingHorizontal:16 , paddingBottom:10}}>
                <CommonButton title="Submit" onPress={() => { }} />
            </View>
        </>
    );
};

export default AccountsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
    },
    mb16: {
        marginBottom: 16,
    },
    dropdownContainer: {
        height: 48,
    },
    placeholderStyle: {
        color: colors.gray,
        fontFamily: Fonts.Regular,
        fontSize: 16,
    },
    periodContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 48,
        borderWidth: 1,
        borderColor: colors.gray,
        backgroundColor: colors.lightgrey,
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    periodLabel: {
        fontFamily: Fonts.Regular,
        color: colors.gray,
        fontSize: 16,
    },
    periodOptions: {
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
    },
    option: {
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
    },
    radioOuter: {
        height: 16,
        width: 16,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
    },
    radioInner: {
        height: 8,
        width: 8,
        borderRadius: 50,
        backgroundColor: colors.primary,
    },
    optionText: {
        fontFamily: Fonts.Regular,
        color: colors.gray,
        fontSize: 12,
    },
});
