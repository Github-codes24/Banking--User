import CommonButton from "@/components/CommonButton";
import { colors } from "@/constants/colors";
import { Fonts } from "@/constants/fonts";
import { Images } from "@/constants/images";
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function WelcomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image
                source={require("@/assets/images/logo.png")}
                style={styles.logo}
                resizeMode="contain"
            />

            {/* Title */}
            <Text style={styles.title}>MAA ANUSAYA URBAN</Text>
            <Text style={styles.subtitle}>Credit Co-operative Society Ltd. Gondia</Text>

            {/* Divider */}
            <View style={styles.divider} />

            {/* Services */}
            <View style={styles.services}>
                <View style={styles.serviceItem}>
                    <Image source={Images.saving} style={{height:40 , width:40}}/>
                    {/* <MaterialCommunityIcons name="account-cash" size={32} color="#D32F2F" /> */}
                    <Text style={styles.serviceText}>Saving Account</Text>
                </View>
                <View style={styles.serviceItem}>
                    <Image source={Images.loan} style={{height:40 , width:40}}/>
                    <Text style={styles.serviceText}>Loan Services</Text>
                </View>
                <View style={styles.serviceItem}>
                    <Image source={Images.deposite} style={{height:40 , width:40}}/>
                    <Text style={styles.serviceText}>Deposit Services</Text>
                </View>
            </View>

            {/* Login Button */}
            <CommonButton title="Log In" onPress={() => {router.push('/login')}} buttonStyle={{width:'90%'}} />

            {/* Security Tips */}
            <TouchableOpacity onPress={()=>{router.push('/tip')}}>
            <Text style={styles.securityText}>SECURITY TIPS</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        // padding: 20,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    title: {
        fontFamily: Fonts.Bold,
        fontSize: 24,
        color: colors.primary,
        textAlign: "center",
        marginBottom: 5,
    },
    subtitle: {
        fontFamily: Fonts.Medium,
        fontSize: 16,
        color: "#333",
        textAlign: "center",
        marginBottom: 10,
    },
    divider: {
        height: 2,
        width: "94%",
        backgroundColor: "#FFD54F",
        marginVertical: 15,
    },
    services: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginVertical: 20,
        paddingHorizontal:16
    },
    serviceItem: {
        alignItems: "center",
        flex: 1,
    },
    serviceText: {
        fontFamily: Fonts.Medium,
        fontSize:Platform.OS === 'android' ? 12 :  14,
        color: colors.lightBlack,
        marginTop: 5,
        textAlign: "center",
    },
    securityText: {
        fontFamily: Fonts.Medium,
        fontSize: 16,
        color: colors.primary,
        marginTop: 20,
    },
});
