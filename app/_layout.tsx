import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform } from 'react-native';

export default function RootLayout() {
  useEffect(() => {
    // Hide navigation bar on Android
    if (Platform.OS === 'android') {
      NavigationBar.setVisibilityAsync('hidden');
    }
  }, []);

  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" translucent={true} />
      <Stack
        screenOptions={{
          headerShown: false,
          statusBarStyle: 'light',
          statusBarBackgroundColor: '#DC2626',
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
}