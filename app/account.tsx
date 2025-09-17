// AccountsScreen.tsx
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform,
  Modal,
  findNodeHandle,
  UIManager,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Fonts } from "@/constants/fonts";
import { colors } from "@/constants/colors";
import { Images } from "@/constants/images";

const AccountsScreen = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [popupTop, setPopupTop] = useState(0);
  const [nomineeVisible, setNomineeVisible] = useState(false);
  const [fdeposite, setFDeposite] = useState(false);

  const saveRef = useRef<any>(null);
  const fdRef = useRef<any>(null);

  const openPopup = (ref: any, type: "save" | "fd") => {
    const handle = findNodeHandle(ref.current);
    if (handle) {
      UIManager.measureInWindow(handle, (x, y, width, height) => {
        setPopupTop(y + height + 4);
        setIsSave(type === "save");
        setPopupVisible(true);
      });
    }
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.accountCard}>
          <LinearGradient
            colors={["#FEC604", "#FFDD66"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={styles.sideLabel}
          >
            <Text style={styles.sideLabelText}>Saving</Text>
          </LinearGradient>

          <View style={styles.details}>
            <Text style={styles.label}>Payment Account</Text>
            <View style={styles.row}>
              <Text style={styles.value}>XXXXXXXXXXXX000458</Text>
              <Image source={Images.eye} style={styles.eyeIcon} />
            </View>

            <Text style={styles.label}>Account Number</Text>
            <Text style={styles.value}>XXXXXXX000458</Text>

            <View style={styles.separator} />

            <View style={styles.rowBetween}>
              <Text style={styles.label}>Balance</Text>
              <TouchableOpacity ref={saveRef} onPress={() => openPopup(saveRef, "save")}>
                <Ionicons name="ellipsis-vertical" size={20} color={colors.primary} />
              </TouchableOpacity>
            </View>
            <Text style={styles.amount}>₹ 2548.00 CR</Text>
          </View>
        </View>

        <View style={styles.accountCard}>
          <LinearGradient
            colors={["#FEC604", "#FFDD66"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={styles.sideLabel}
          >
            <Text style={styles.sideLabelFD}>Fixed Deposit</Text>
          </LinearGradient>

          <View style={styles.details}>
            <Text style={styles.label}>FD Account Number</Text>
            <Text style={styles.value}>XXXXXXX000458</Text>

            <Text style={styles.label}>Maturity Date</Text>
            <Text style={styles.value}>01/01/2030</Text>

            <View style={styles.separator} />

            <View style={styles.rowBetween}>
              <Text style={styles.label}>Deposit Amount</Text>
              <TouchableOpacity ref={fdRef} onPress={() => openPopup(fdRef, "fd")}>
                <Ionicons name="ellipsis-vertical" size={20} color={colors.primary} />
              </TouchableOpacity>
            </View>
            <Text style={styles.amount}>₹ 100000.00</Text>
          </View>
        </View>
      </ScrollView>

      <Modal transparent visible={popupVisible} animationType="fade" onRequestClose={() => setPopupVisible(false)}>
        <TouchableOpacity style={styles.overlay} activeOpacity={1} onPressOut={() => setPopupVisible(false)}>
          <View style={[styles.popup, { top: popupTop }]}>
            {isSave ? (
              <>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    setPopupVisible(false);
                    setNomineeVisible(true);
                    setFDeposite(false);
                  }}
                >
                  <Ionicons name="person" size={24} color="#FEC604" />
                  <Text style={styles.menuText}>Nominee Details</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.menuItem, styles.menuSpacing]}
                  onPress={() => {
                    setPopupVisible(false);
                    console.log("Share clicked");
                  }}
                >
                  <Ionicons name="share-social" size={24} color="#FEC604" />
                  <Text style={styles.menuText}>Share</Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setPopupVisible(false);
                  setFDeposite(true);
                  setNomineeVisible(true);
                }}
              >
                <Image source={Images.acp} style={styles.acpIcon} />
                <Text style={styles.menuText}>Account Details</Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal transparent visible={nomineeVisible} animationType="fade" onRequestClose={() => setNomineeVisible(false)}>
        <View style={styles.centeredOverlay}>
          <View style={styles.nomineeCard}>
            <View style={styles.nomineeHeader}>
              <Text style={styles.nomineeTitle}>{fdeposite ? "Fixed Deposit Details" : "Nominee Details"}</Text>
              <TouchableOpacity onPress={() => setNomineeVisible(false)}>
                <Ionicons name="close-circle" size={28} color={colors.primary} />
              </TouchableOpacity>
            </View>

            {!fdeposite ? (
              <>
                <Text style={styles.fieldLabel}>Name</Text>
                <Text style={styles.fieldValue}>Ankita Kundu</Text>
                <View style={styles.fieldDivider} />

                <Text style={styles.fieldLabel}>Age</Text>
                <Text style={styles.fieldValue}>23</Text>
                <View style={styles.fieldDivider} />

                <Text style={styles.fieldLabel}>Relation</Text>
                <Text style={styles.fieldValue}>Daughter</Text>
                <View style={styles.fieldDivider} />

                <Text style={styles.fieldLabel}>Date of Birth</Text>
                <Text style={styles.fieldValue}>01/01/2002</Text>
                <View style={styles.fieldDivider} />

                <Text style={styles.fieldLabel}>Email ID</Text>
                <Text style={styles.fieldValue}>example@mail.com</Text>
                <View style={styles.fieldDivider} />

                <Text style={styles.fieldLabel}>Adhar Card No</Text>
                <Text style={styles.fieldValue}>1234 5678 9000</Text>
                <View style={styles.fieldDivider} />

                <Text style={styles.fieldLabel}>Pan Card No</Text>
                <Text style={styles.fieldValue}>ABCDE1234F</Text>
                <View style={styles.fieldDivider} />

                <Text style={styles.fieldLabel}>Contact Number</Text>
                <Text style={styles.fieldValue}>9876543210</Text>
                <View style={styles.fieldDivider} />

                <Text style={styles.fieldLabel}>Address</Text>
                <Text style={styles.fieldValue}>6391 Elgin St. Celina, Delaware 10299</Text>
                <View style={styles.fieldDivider} />
              </>
            ) : (
              <>
                <Text style={styles.fieldLabel}>Fixed Deposit Account</Text>
                <Text style={styles.fieldValue}>XXXXXXXXXXXXXX000458</Text>
                <View style={styles.fieldDivider} />

                <Text style={styles.fieldLabel}>FD Type</Text>
                <Text style={styles.fieldValue}>FIXED DEPOSIT</Text>
                <View style={styles.fieldDivider} />

                <Text style={styles.fieldLabel}>Deposit Amount</Text>
                <Text style={styles.fieldValue}>₹ 100000.00</Text>
                <View style={styles.fieldDivider} />

                <Text style={styles.fieldLabel}>Deposit Period</Text>
                <Text style={styles.fieldValue}>60 Months</Text>
                <View style={styles.fieldDivider} />

                <Text style={styles.fieldLabel}>Maturity Instruction</Text>
                <Text style={styles.fieldValue}>Do Not Renew</Text>
                <View style={styles.fieldDivider} />
              </>
            )}
          </View>
        </View>
      </Modal>
    </>
  );
};

export default AccountsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 12 },
  accountCard: { flexDirection: "row", marginBottom: 20, backgroundColor: "#fff" },
  sideLabel: {
    justifyContent: "center",
    alignItems: "center",
    height: Platform.OS === "android" ? 254 : 232,
    width: 40,
  },
  sideLabelText: {
    transform: [{ rotate: "-90deg" }],
    fontFamily: Fonts.Medium,
    color: "#fff",
    fontSize: 16,
    width: Platform.OS === "ios" ? 60 : 62,
    textAlign: "center",
  },
  sideLabelFD: {
    transform: [{ rotate: "-90deg" }],
    fontFamily: Fonts.Medium,
    color: "#fff",
    fontSize: 16,
    width: 120,
    textAlign: "center",
  },
  details: { flex: 1, padding: 12 },
  label: { fontSize: 15, fontFamily: Fonts.Medium, color: colors.primary, marginTop: 6 },
  value: { fontFamily: Fonts.Regular, fontSize: 16, color: colors.lightBlack, marginVertical: 2 },
  amount: { fontSize: 16, fontFamily: Fonts.Regular, color: colors.lightBlack, marginTop: 8 },
  separator: { height: 1, backgroundColor: colors.gray, marginVertical: 10 },
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  overlay: { flex: 1 },
  eyeIcon: { height: 20, width: 20, position: "absolute", right: 0, top: 20 },
  acpIcon: { height: 24, width: 24 },
  popup: {
    position: "absolute",
    right: 34,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 5,
    paddingVertical: 10,
    width: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  menuItem: { flexDirection: "row", alignItems: "center", paddingHorizontal: 6 },
  menuSpacing: { marginTop: 6 },
  menuText: { marginLeft: 10, fontSize: 16, color: colors.lightBlack, fontFamily: Fonts.Regular },
  centeredOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  nomineeCard: { backgroundColor: "#EBEBEB", borderRadius: 16, width: "100%", padding: 16 },
  nomineeHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  nomineeTitle: { fontSize: 16, fontFamily: Fonts.SemiBold, color: colors.yellowBorder },
  fieldLabel: { fontSize: 16, fontFamily: Fonts.Regular, color: colors.lightBlack, marginTop: 8 },
  fieldValue: { fontSize: 15, fontFamily: Fonts.Regular, color: colors.gray, marginBottom: 4, marginLeft: 16 },
  fieldDivider: { borderTopWidth: 1, borderColor: colors.gray },
});
