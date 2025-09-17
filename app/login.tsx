// LoginScreen.tsx
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

export default function LoginScreen() {
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
                <View style={styles.tabs}>
                    <TouchableOpacity
                        style={[styles.tabButton, { width: cardWidth / 2 }]}
                        onPress={() => setActiveTab("PIN")}
                    >
                        <Text style={styles.tabText}>PIN</Text>
                        {activeTab === "PIN" && <View style={styles.tabUnderline} />}
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tabButton, { width: cardWidth / 2 }]}
                        onPress={() => setActiveTab("CUSTOMER_ID")}
                    >
                        <Text style={styles.tabText}>Customer ID</Text>
                        {activeTab === "CUSTOMER_ID" && <View style={styles.tabUnderline} />}
                    </TouchableOpacity>
                </View>

                {/* Input Fields */}
                {activeTab !== 'PIN' ? <><CommonInput
                    placeholder="Customer ID"
                    leftIcon={<Ionicons name="person" size={20} color={colors.primary} />}
                    containerStyle={{ marginBottom: 36 }}
                />
                    <CommonInput
                        placeholder="Password"
                        secureTextEntry={!showPassword}
                        containerStyle={{ marginBottom: 0 }}
                        leftIcon={<Image source={Images.lock} style={{height:20,width:20}} />}
                        rightIcon={
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Ionicons
                                    name={showPassword ? "eye-off" : "eye"}
                                    size={20}
                                    color={colors.gray}
                                />
                            </TouchableOpacity>
                        }
                    />

                    <TouchableOpacity style={{ alignSelf: "flex-end", marginTop: 36 }} onPress={()=>{router.push('/forgot')}}>
                        <Text style={styles.forgotText}>Forgot Password?</Text>
                    </TouchableOpacity>

                </> : <>
                    <Text style={{ fontSize: 16, fontFamily: Fonts.Regular, color: colors.lightBlack, textAlign: 'center', marginBottom: 40 }}>Enter Your Quick Access PIN</Text>
                    <PinInput />
                    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 42 }}>
                        <Text style={{ color: colors.lightBlack, fontSize: 16, fontFamily: Fonts.Regular }}>Don’t have login PIN?</Text>
                        <TouchableOpacity>
                            <Text style={{ color: colors.primary, fontSize: 16, fontFamily: Fonts.Regular }}>Click Here</Text>
                        </TouchableOpacity>
                    </View>
                </>}

                <TouchableOpacity style={styles.submitBtn} onPress={()=>{router.push('/home')}}>
                    <Image source={Images.continue} style={{ height: 84, width: 84 }} />
                </TouchableOpacity>
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
        shadowOffset: { width: 10, height: 12 },
        shadowRadius: 10,
        elevation: 20,
        marginTop: 8,
        height:360
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
