// TransactionScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Ionicons } from "@expo/vector-icons";
import { Fonts } from "@/constants/fonts";
import { colors } from "@/constants/colors";
import { Images } from "@/constants/images";

interface Transaction {
  id: string;
  type: "paid" | "received" | "failed";
  name: string;
  amount: number;
  date: string;
}

const transactions: Transaction[] = [
  {
    id: "1",
    type: "paid",
    name: "Amit Kundu",
    amount: 2000,
    date: "2025-08-03",
  },
  {
    id: "2",
    type: "received",
    name: "Rakesh Dutta",
    amount: 2000,
    date: "2025-08-02",
  },
  {
    id: "3",
    type: "failed",
    name: "Amit Kundu",
    amount: 2000,
    date: "2025-08-02",
  },
];

// 👉 Helper function to format date as "02-Aug-2025"
const formatDate = (dateInput: string | Date) => {
  const date = new Date(dateInput);
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export default function TransactionScreen() {
  const [fromDate, setFromDate] = useState<Date | null>(new Date());
  const [toDate, setToDate] = useState<Date | null>(new Date());
  const [pickerVisible, setPickerVisible] = useState(false);
  const [pickerType, setPickerType] = useState<"from" | "to">("from");

  const showPicker = (type: "from" | "to") => {
    setPickerType(type);
    setPickerVisible(true);
  };

  const handleConfirm = (date: Date) => {
    if (pickerType === "from") setFromDate(date);
    else setToDate(date);
    setPickerVisible(false);
  };

  const renderTransaction = ({ item }: { item: Transaction }) => {
    const isPaid = item.type === "paid";
    const isReceived = item.type === "received";
    const isFailed = item.type === "failed";

    return (
      <View style={styles.card}>
        <Ionicons
          name={
            isPaid
              ? "arrow-up-circle"
              : isReceived
              ? "arrow-down-circle"
              : "close-circle"
          }
          size={28}
          color={isPaid ? "green" : isReceived ? "green" : "red"}
          style={{ marginRight: 8 }}
        />
        <View style={{ flex: 1 }}>
          <Text style={[styles.typeText, { color: isFailed ? "red" : "gray" }]}>
            {isPaid
              ? "Paid To"
              : isReceived
              ? "Received From"
              : "Transaction Failed"}
          </Text>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.amount}>₹ {item.amount}</Text>
          <Text style={styles.date}>{formatDate(item.date)}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Date Range Picker */}
      <View style={styles.dateRow}>
        <Text style={{fontSize:16,fontFamily:Fonts.Regular, color:colors.lightBlack}}>From</Text>
        <TouchableOpacity
          style={styles.dateInput}
          onPress={() => showPicker("from")}
        >
          <Text style={{fontSize:14,fontFamily:Fonts.Regular, color:colors.gray}}>{fromDate ? formatDate(fromDate) : "Select"}</Text>
          <Image source={Images.calender}  style={{height:20,width:20}} />
        </TouchableOpacity>
        <Text style={{fontSize:16,fontFamily:Fonts.Regular, color:colors.lightBlack}}>To</Text>

        <TouchableOpacity
          style={styles.dateInput}
          onPress={() => showPicker("to")}
        >
          <Text  style={{fontSize:14,fontFamily:Fonts.Regular, color:colors.gray}}>{toDate ? formatDate(toDate) : "Select"}</Text>
          <Image source={Images.calender}  style={{height:20,width:20}} />
        </TouchableOpacity>
      </View>

      {/* Apply Button */}
      <TouchableOpacity style={styles.applyBtn}>
        <Text style={styles.applyText}>Apply</Text>
      </TouchableOpacity>

      {/* Transactions List */}
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderTransaction}
        contentContainerStyle={{ paddingVertical: 10 }}
      />

      {/* Date Picker */}
      <DateTimePickerModal
        isVisible={pickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setPickerVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    alignItems:'center'
  },
  dateInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal:8,
    marginHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height:40
    // maxWidth:138
  },
  applyBtn: {
    backgroundColor: "red",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
    width:160,
    alignSelf:'flex-end'
  },
  applyText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 12,
    marginBottom: 10,
    alignItems: "center",
  },
  typeText: { fontSize: 12, marginBottom: 2 },
  name: { fontSize: 14, fontWeight: "bold" },
  amount: { fontSize: 14, fontWeight: "bold" },
  date: { fontSize: 12, color: "gray" },
});
