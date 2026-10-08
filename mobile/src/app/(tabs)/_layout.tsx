import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAuth } from '@clerk/clerk-expo'
const TabsLayout = () => {
    const insets = useSafeAreaInsets()
    const { isSignedIn } = useAuth()
    if(!isSignedIn) return <Redirect href={'/(auth)'}></Redirect>
  return (
      <Tabs screenOptions={{
          tabBarActiveTintColor: '#1da1f2', tabBarInactiveTintColor: '#657786',
          tabBarStyle: {
              backgroundColor: '#fff',
              borderWidth: 1, borderTopColor: '#e1e8ed', height: 50 +insets.bottom,
              paddingTop:8
          },
          tabBarLabelStyle: {
              fontSize:12, fontWeight:'500'
          },
          headerShown:false
      }}>
      <Tabs.Screen name='index' options={{ title:'',
        tabBarIcon: ({ color, size }) => <Feather name='home'
        size={size} color={color}></Feather>
      }}></Tabs.Screen>
      <Tabs.Screen name='search' options={{ title:'',
        tabBarIcon: ({ color, size }) => <Feather name='search'
        size={size} color={color}></Feather>
      }}></Tabs.Screen>
      <Tabs.Screen name='notifications' options={{ title:'',
        tabBarIcon: ({ color, size }) => <Feather name='bell'
        size={size} color={color}></Feather>
      }}></Tabs.Screen>
      <Tabs.Screen name='messages' options={{ title:'',
        tabBarIcon: ({ color, size }) => <Feather name='mail'
        size={size} color={color}></Feather>
      }}></Tabs.Screen>
      <Tabs.Screen name='profile' options={{ title:'',
        tabBarIcon: ({ color, size }) => <Feather name='user'
        size={size} color={color}></Feather>
      }}></Tabs.Screen>
</Tabs>
  )
}

export default TabsLayout


// import { Redirect, Stack } from "expo-router"
// import { useAuth } from "@clerk/clerk-expo"
// export default function AuthRoutesLayout() {
//     // const { isSignedIn } = useAuth()
//     //     console.log(isSignedIn, 'isSignedIn')
//     // if (!isSignedIn) {
//             return <Redirect href='./'></Redirect>
//         // }
//         // return <Stack></Stack>
//     //     const { isSignedIn } = useAuth()
//     //     // if(!isLoaded) return null
//     //     if (isSignedIn)  return <Redirect href={'../home'}></Redirect>
//     // return <Stack screenOptions={{headerShown:false}}></Stack>
// }