import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import 'react-native-reanimated';

import { useColorScheme } from '@/presentation/theme/hooks/use-color-scheme';

import '../global.css'

SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded, error] = useFonts({
    'KanitBold': require('@/assets/fonts/Kanit-Bold.ttf'),
    'KanitRegular': require('@/assets/fonts/Kanit-Regular.ttf'),
    'KanitThin': require('@/assets/fonts/Kanit-Thin.ttf'),
  })
// 
  useEffect(() => { 
    if (error) throw error

    if (fontsLoaded) SplashScreen.hideAsync()

  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return <ActivityIndicator size={40} />

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="(products-app)/(home)/index"
          options={{
            presentation: 'modal',
            title: 'Home Screen'
          }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
