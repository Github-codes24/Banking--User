import { useEffect, useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import SplashScreen from "./splash";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
      router.replace("/getstarted"); // redirect to your tabs layout
    }, 2000); // 2 sec splash

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1 }}>
        <SplashScreen />
      </View>
    );
  }

  return null;
}
