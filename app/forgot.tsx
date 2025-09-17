// LoginScreen.tsx
import CommonButton from "@/components/CommonButton";
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

export default function ForgotScreen() {
    const [activeTab, setActiveTab] = useState<"PIN" | "CUSTOMER_ID">("CUSTOMER_ID");
    const [showPassword, setShowPassword] = useState(false);

    const cardWidth = Dimensions.get("window").width - 80; // card horizontal margin 16+16

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("@/assets/images/banner.png")}
                style={styles.headerImage}
                resizeMode="cover"
            />

            <View style={styles.card}>
                {/* Tabs */}
                <>
                    <Text style={{ fontSize: 12, fontFamily: Fonts.Regular, color: colors.lightBlack, textAlign: 'center', marginBottom: 40 }}>Please Confirm your Customer ID and Bank Reg Code </Text>
                    <CommonInput
                        placeholder="Customer ID"
                        leftIcon={<Ionicons name="person" size={20} color={colors.primary} />}
                        containerStyle={{ marginBottom: 0 }}
                    />
                    <CommonButton title="Confirm" onPress={() => {router.push('/verify') }} buttonStyle={{ marginTop: 40 }} />
                </>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    headerImage: { height: 220, width: "100%" },
    card: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        marginHorizontal: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        elevation: 20,
        marginTop: 8,
        height: 332,
        flexDirection: 'column',
        justifyContent: 'center'
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
