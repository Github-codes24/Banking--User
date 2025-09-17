import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Alert,
    Image,
} from "react-native";
import CommonHeader from "@/components/CommonHeader";
import PinInput from "@/components/PinInput";
import { colors } from "@/constants/colors";
import { Fonts } from "@/constants/fonts";
import CommonInput from "@/components/CommonInput";
import { Ionicons } from "@expo/vector-icons";
import { Images } from "@/constants/images";
import CommonButton from "@/components/CommonButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Reset() {
    const [showPassword, setShowPassword] = useState(false);
    const insets = useSafeAreaInsets();

    return (
        <>
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: "#fff" }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            <View style={styles.container}>
                <Text style={{paddingBottom:24 ,fontSize:12,color:colors.lightBlack}}>Enter New PIN</Text>
                <PinInput containerStyle={{width:'100%'  , paddingHorizontal:36}}/>
                <Text style={{padding:24  ,fontSize:12,color:colors.lightBlack}}>Confirm PIN</Text>
                 <PinInput containerStyle={{width:'100%' , paddingHorizontal:36}}/>
            </View> 
            <View style={{paddingHorizontal:16}}>
        <CommonButton title="Set Login PIN" onPress={()=>{}} buttonStyle={{marginBottom : insets?.bottom ? insets.bottom : 0 , paddingHorizontal:16}}/>
            </View>
        </KeyboardAvoidingView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 16,
    },
    subtitle: {
        fontSize: 12,
        color: colors.gray,
        textAlign: "center",
        // marginVertical: 10,
    },
    timerText: {
        fontSize: 12,
        color: colors.gray,
        marginTop: 6,
        marginBottom: 20,
    },
    otpContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20,
    },
    otpBox: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        marginHorizontal: 8,
        fontSize: 20,
        fontWeight: "600",
        color: "#000",
        textAlign: "center",
    },
    buttonRow: {
        flexDirection: "row",
        marginTop: 30,
        paddingHorizontal: 30
    },
    resendBtn: {
        borderWidth: 1,
        borderColor: colors.primary,
        paddingVertical: 8,
        // paddingHorizontal: 28,
        borderRadius: 8,
        marginRight: 10,
        flex: 1,
        alignItems: 'center'
    },
    resendText: {
        fontFamily: Fonts.Medium,
        fontSize: 16,
        color: colors.primary,
    },
    confirmBtn: {
        backgroundColor: "#E53935",
        paddingVertical: 8,
        // paddingHorizontal: 28,
        flex: 1,
        borderRadius: 8,
        alignItems: 'center'

    },
    confirmText: {
        fontFamily: Fonts.Medium,
        fontSize: 16,
        color: "#fff",
    },
});