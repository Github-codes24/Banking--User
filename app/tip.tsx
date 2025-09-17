// LoginScreen.tsx
import CommonDropdown from "@/components/CommonDropdown";
import CommonInput from "@/components/CommonInput";
import PinInput from "@/components/PinInput";
import { colors } from "@/constants/colors";
import { Fonts } from "@/constants/fonts";
import { Images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
} from "react-native";

export default function SecurityTip() {
    return (
        <View style={styles.container}>
            <CommonDropdown placeholder="Security"/>
            <CommonDropdown placeholder="Precaution"/>

            <CommonDropdown placeholder="Clean Up"/>

            <CommonDropdown placeholder="Protection"/>

            <CommonDropdown placeholder="Accessibility"/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" , padding:16 },
    headerImage: { height: 220, width: "100%" },
    card: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        marginHorizontal: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 10, height: 12 },
        shadowRadius: 10,
        elevation: 20,
        marginTop: 8,
    },
    tabs: {
        flexDirection: "row",
        marginBottom: 36,
        justifyContent: 'space-between'
    },
    tabButton: {
        alignItems: "center",
    },
    tabText: {
        fontFamily: Fonts.SemiBold,
        fontSize: 16,
        color: colors.primary,
    },
    tabUnderline: {
        height: 2,
        backgroundColor: colors.yellow,
        marginTop: 5,
        width: "100%",
        alignSelf: "center",
    },
    forgotText: {
        color: colors.primary,
        fontFamily: Fonts.Medium,
        marginBottom: 40,
    },
    submitBtn: {
        alignSelf: "center",
        backgroundColor: "#fff",
        width: 80,
        height: 80,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        position: "absolute",
        bottom: -30,
    },
});
