import React, { useState, useRef } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Image,
    Animated,
    Dimensions,
    Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Images } from "@/constants/images";
import { colors } from "@/constants/colors";
import { Fonts } from "@/constants/fonts";
import { Redirect, router } from "expo-router";

const { width } = Dimensions.get("window");

const services = [
    { id: "1", title: "A/C Statement", img: Images.account , redirect : '/acStatement'},
    { id: "2", title: "Fixed Deposit", img: Images.bag , redirect : '/fdeposite' },
    { id: "3", title: "Recurring Deposit", img: Images.recurre , redirect: '/redeposite' },
    { id: "4", title: "QR Code", img: Images.qr , redirect: '/qrscreen'},
    { id: "5", title: "Transaction History", img: Images.list , redirect: '/thistory'},
    { id: "6", title: "EMI Calculator", img: Images.cal , redirect: '/' },
];

const transfers = [
    { id: "1", title: "Self Account Transfer", img: Images.acc ,redirect: '/' },
    { id: "2", title: "Inter Branch Transfer", img: Images.branch,redirect: '/'  },
    { id: "3", title: "Other Bank Transfer", img: Images.bank,redirect: '/'  },
];

const DashboardScreen = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const slideAnim = useRef(new Animated.Value(0)).current; // dashboard shift
    const drawerAnim = useRef(new Animated.Value(-width * 0.75)).current; // drawer position

    const toggleDrawer = () => {
        if (drawerOpen) {
            // Close
            Animated.parallel([
                Animated.timing(drawerAnim, {
                    toValue: -width * 0.75,
                    duration: 300,
                    useNativeDriver: false,
                }),
                Animated.timing(slideAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: false,
                }),
            ]).start(() => setDrawerOpen(false));
        } else {
            // Open
            setDrawerOpen(true);
            Animated.parallel([
                Animated.timing(drawerAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: false,
                }),
                Animated.timing(slideAnim, {
                    toValue: width * 0.6, // how much dashboard shifts
                    duration: 300,
                    useNativeDriver: false,
                }),
            ]).start();
        }
    };

    const renderCard = ({ item }: any) => (
        <TouchableOpacity style={styles.card} onPress={()=>{router.push(item.redirect)}}>
            <Image source={item.img} style={{ width: 40, height: 40 }} />
            <Text style={styles.cardText}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            {/* Drawer */}
            <Animated.View style={[styles.drawer, { left: drawerAnim }]}>
                <View style={styles.drawerHeader}>
                    <Image
                        source={require("@/assets/images/logo.png")}
                        style={styles.drawerLogo}
                    />
                    <Text style={styles.drawerTitle}>TT PVT. LTD.</Text>
                </View>
                <View style={{ borderWidth: 1, borderColor: colors.yellow, marginHorizontal: 24 }} />
                <View style={styles.drawerMenu}>
                    <TouchableOpacity style={styles.drawerItem} onPress={()=>{router.push('/account')}}>
                        <Image source={Images.branch} style={{ height: 24, width: 24 }} />
                        <Text style={styles.drawerText}>Accounts</Text>
                        <Ionicons name="chevron-down" size={24} style={{ marginLeft: 'auto' }} color={colors.yellow} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.drawerItem}>
                        <Image source={Images.transfer} style={{ height: 24, width: 24 }} />

                        <Text style={styles.drawerText}>Fund Transfer</Text>
                        <Ionicons name="chevron-down" size={24} style={{ marginLeft: 'auto' }} color={colors.yellow} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.drawerItem}>
                        <Image source={Images.mobile} style={{ height: 24, width: 24 }} />
                        <Text style={styles.drawerText}>Recharge/Bill Pays</Text>
                        <Ionicons name="chevron-down" size={24} style={{ marginLeft: 'auto' }} color={colors.yellow} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.drawerItem}>
                        <Image source={Images.setting} style={{ height: 24, width: 24 }} />

                        <Text style={styles.drawerText}>Utilities</Text>
                        <Ionicons name="chevron-down" size={24} style={{ marginLeft: 'auto' }} color={colors.yellow} />
                    </TouchableOpacity>
                </View>

                <View style={styles.logoutSection}>
                    <View style={{ borderWidth: 1, borderColor: colors.yellow, marginHorizontal: 4, marginBottom: 24 }} />
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                        <Ionicons name="log-out-outline" size={24} color={colors.primary} />
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>

            {/* Dashboard Content (shifts right when drawer opens) */}
            <Animated.View style={{ flex: 1, marginLeft: drawerOpen ? 60 : 0, transform: [{ translateX: slideAnim }] }}>
                {/* Header */}
                    <View style={[styles.header, { paddingHorizontal: drawerOpen ? 0 : 10 }]}>
                        <TouchableOpacity onPress={toggleDrawer}>
                            {drawerOpen ? (
                                <Image source={Images.back} style={{ height: 40, width: 40, marginLeft: 10 }} />
                            ) : (
                                <Image source={Images.menu} style={{ height: 40, width: 40 }} />
                            )}
                        </TouchableOpacity>
                        <Image
                            source={require("@/assets/images/logo.png")}
                            style={{
                                height: 40,
                                width: 40,
                                position: "absolute",
                                left:Platform.OS === 'android' ? 65 : 80,
                            }}
                        />
                        <View style={styles.headerCenter}>
                            <Text style={styles.headerTitle}>MAA ANUSAYA URBAN</Text>
                            <Text style={styles.headerSubtitle}>
                                Credit Co-operative Society Ltd. Gondia
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Image source={Images.noti} style={{ height: 40, width: 40 }} />
                        </TouchableOpacity>
                    </View>

                <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                    
                    {/* Account Overview */}
                    <LinearGradient
                        colors={["#ffe066", "#f5b700"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.accountCard}
                    >
                        <Text style={styles.accountNumber}>XXXXXXXX000458</Text>
                        <Text style={styles.accountType}>SAV</Text>
                        <Text style={styles.paymentLabel}>Payment Account</Text>
                        <Text style={styles.paymentValue}>000167101014000458</Text>
                        <Text style={styles.balanceLabel}>Balance</Text>
                        <Text style={styles.balanceValue}>₹ 2081.00</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewAll}>View All</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    {/* Services */}
                    <Text style={styles.sectionTitle}>Services</Text>
                    <FlatList
                        data={services}
                        numColumns={3}
                        keyExtractor={(item) => item.id}
                        renderItem={renderCard}
                        scrollEnabled={false}
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                    />

                    {/* Transfer Money */}
                    <Text style={styles.sectionTitle}>Transfer Money</Text>
                    <FlatList
                        data={transfers}
                        numColumns={3}
                        keyExtractor={(item) => item.id}
                        renderItem={renderCard}
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                        scrollEnabled={false}
                    />
                </ScrollView>
            </Animated.View>
        </SafeAreaView>
    );
};

export default DashboardScreen;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 18,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
        backgroundColor: '#FFF9F1'
    },
    headerCenter: { flex: 1, alignItems: "center", marginLeft: 60 },
    headerTitle: { fontSize: 16, fontFamily: Fonts.Bold, color: colors.primary },
    headerSubtitle: { fontSize: 10, color: colors.lightBlack, fontFamily: Fonts.Medium },

    accountCard: {
        backgroundColor: "#f5b700",
        borderRadius: 12,
        padding: 16,
        marginVertical: 12,
        marginHorizontal: 10,
    },
    accountNumber: {
        fontSize: 16,
        color: colors.lightBlack,
        fontFamily: Fonts.Regular,
    },
    accountType: {
        position: "absolute",
        top: 16,
        right: 16,
        fontFamily: Fonts.SemiBold,
        color: colors.lightBlack,
    },
    paymentLabel: {
        fontSize: 16,
        fontFamily: Fonts.SemiBold,
        color: colors.lightBlack,
        marginTop: 8,
    },
    paymentValue: {
        fontSize: 16,
        color: colors.lightBlack,
        marginBottom: 6,
        fontFamily: Fonts.Regular,
    },
    balanceLabel: {
        fontSize: 16,
        fontFamily: Fonts.SemiBold,
        color: colors.lightBlack,
    },
    balanceValue: {
        fontSize: 16,
        fontFamily: Fonts.Regular,
        color: colors.lightBlack,
        marginTop: 8,
    },
    viewAll: {
        textAlign: "right",
        marginTop: 8,
        fontSize: 16,
        fontFamily: Fonts.SemiBold,
        color: colors.lightBlack,
    },

    sectionTitle: {
        fontSize: 16,
        fontFamily: Fonts.Medium,
        color: colors.lightBlack,
        marginVertical: 8,
        paddingHorizontal: 10,
    },

    card: {
        flex: 1,
        margin: 6,
        padding: 12,
        borderRadius: 12,
        backgroundColor: "#EBEBEB",
        alignItems: "center",
        justifyContent: "space-between",
        elevation: 2,
        height: 140,
        flexDirection: "column",
    },
    cardText: {
        fontSize: 16,
        marginTop: 6,
        textAlign: "center",
        color: colors.lightBlack,
        fontFamily: Fonts.Regular,
    },

    // Drawer
    drawer: {
        position: "absolute",
        top: 0,
        bottom: 0,
        width: width * 0.75,
        backgroundColor: "#EBEBEB",
        zIndex: 10,
        elevation: 10,
    },
    drawerHeader: {
        padding: 20,
        marginTop: 50
    },
    drawerLogo: { width: 100, height: 100, borderRadius: 40, marginBottom: 10 },
    drawerTitle: {
        fontSize: 24,
        fontFamily: Fonts.Medium,
        color: colors.lightBlack,
    },
    drawerMenu: { marginTop: 20, paddingHorizontal: 24 },
    drawerItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
    },
    drawerText: {
        fontSize: 16,
        fontFamily: Fonts.Medium,
        color: colors.yellow,
        marginLeft: 12,
    },
    logoutSection: {
        marginTop: "auto",
        paddingBottom: 80,
        paddingHorizontal: 24,
    },
    logoutText: {
        fontSize: 16,
        marginLeft: 8,
        color: colors.primary,
        fontFamily: Fonts.Medium,
    },
});
