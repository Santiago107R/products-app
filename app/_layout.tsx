import { useEffect } from 'react';
import { View } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { useColorScheme } from '@/presentation/theme/hooks/use-color-scheme';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import Loading from '@/presentation/theme/components/Loading';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    }
  }
})

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, 'background')


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

  if (!fontsLoaded && !error) return <Loading />

  return (
    <GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
