import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/use-color-scheme';

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import CommonHeader from '@/components/CommonHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

export const unstable_settings = {
  anchor: '(tabs)',
};

// Keep splash visible while fonts load
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Stack initialRouteName='index'>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <Stack.Screen name="splash" options={{ headerShown : false}} />
        <Stack.Screen name="getstarted" options={{ headerShown : false}} />
        <Stack.Screen name="forgot" options={{ headerShown : false}} />
        <Stack.Screen name="login" options={{ headerShown : false}} />
        <Stack.Screen name="verify" options={{  header: () => (<SafeAreaView edges={['top']} style={{backgroundColor:"#fff"}}><CommonHeader title='OTP Verification'/></SafeAreaView>)}} />
        <Stack.Screen name="reset" options={{  header: () => (<SafeAreaView edges={['top']} style={{backgroundColor:"#fff"}}><CommonHeader title='Reset Password'/></SafeAreaView>)}} />
        <Stack.Screen name="loginpin" options={{  header: () => (<SafeAreaView edges={['top']} style={{backgroundColor:"#fff"}}><CommonHeader title='Login PIN'/></SafeAreaView>)}} />
        <Stack.Screen name="tip" options={{  header: () => (<SafeAreaView edges={['top']} style={{backgroundColor:"#fff"}}><CommonHeader title='Security Tips'/></SafeAreaView>)}} />
        <Stack.Screen name="home" options={{ headerShown : false}} />
        <Stack.Screen name="account" options={{  header: () => (<SafeAreaView edges={['top']} style={{backgroundColor:"#fff"}}><CommonHeader title='Accounts'/></SafeAreaView>)}} />
        <Stack.Screen name="acStatement" options={{  header: () => (<SafeAreaView edges={['top']} style={{backgroundColor:"#fff"}}><CommonHeader title='Accounts Statement'/></SafeAreaView>)}} />
        <Stack.Screen name="fdeposite" options={{  header: () => (<SafeAreaView edges={['top']} style={{backgroundColor:"#fff"}}><CommonHeader title='Open Fixed Deposit'/></SafeAreaView>)}} />
        <Stack.Screen name="redeposite" options={{  header: () => (<SafeAreaView edges={['top']} style={{backgroundColor:"#fff"}}><CommonHeader title='Open Recurring Deposit'/></SafeAreaView>)}} />
        <Stack.Screen name="qrscreen" options={{  header: () => (<SafeAreaView edges={['top']} style={{backgroundColor:"#fff"}}><CommonHeader title='Qr Screen'/></SafeAreaView>)}} />
        <Stack.Screen name="thistory" options={{  header: () => (<SafeAreaView edges={['top']} style={{backgroundColor:"#fff"}}><CommonHeader title='Transaction History'/></SafeAreaView>)}} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
