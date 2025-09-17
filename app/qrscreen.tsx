// AccountsScreen.tsx
import CommonAccountDropdown from "@/components/AccountPicker";
import CommonButton from "@/components/CommonButton";
import CommonDropdown from "@/components/CommonDropdown";
import CommonInput from "@/components/CommonInput";
import { colors } from "@/constants/colors";
import { Fonts } from "@/constants/fonts";
import { Images } from "@/constants/images";
import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from "react-native";

const ReDeposite = () => {
    const [selectedAccount, setSelectedAccount] = useState<string | null>(null);

    const accountOptions = [
        { label: "01254700089123", value: "saving" },
        { label: "09876543212345", value: "current" },
        { label: "56789012345678", value: "loan" },
    ];

    return (
        <>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* Dropdowns */}
                    <CommonAccountDropdown
                        label="Saving Account"
                        value={selectedAccount}
                        setValue={setSelectedAccount}
                        items={accountOptions}
                        containerStyle={styles.mb16}
                    />
                    <View style={styles.imageWrapper}>
                        <Image
                            source={Images.qrscreen}
                            style={styles.imageWithBorder}
                            resizeMode="contain"
                        />
                    </View>
                </ScrollView>
            </View>

            <View style={{ backgroundColor: '#fff', paddingHorizontal: 16, paddingBottom: 10 }}>
                <CommonButton title="Share" onPress={() => { }} />
            </View>
        </>
    );
};

export default ReDeposite;

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
    imageWrapper: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 2,
        height: 645,
    },

    imageWithBorder: {
        width: "100%",
        height: 645,
        //   borderRadius: 12,
    },

});
