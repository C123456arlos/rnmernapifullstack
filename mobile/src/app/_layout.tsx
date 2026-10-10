import {ClerkProvider} from '@clerk/clerk-expo'
import { Stack } from "expo-router"
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import {StatusBar} from 'expo-status-bar'
import '../../global.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
const queryClient= new QueryClient()
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='(auth)' ></Stack.Screen>
        <Stack.Screen name='(tabs)' ></Stack.Screen>
        </Stack>
        <StatusBar style='dark'></StatusBar>
      </QueryClientProvider>
    </ClerkProvider>
)}
