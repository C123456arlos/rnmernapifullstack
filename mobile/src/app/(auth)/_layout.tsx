import { Redirect, Stack } from "expo-router"
import { useAuth } from "@clerk/clerk-expo"
import { useEffect, useState } from "react"
import { View } from "react-native"
import { Text } from "react-native"
import { useUserSync } from "../../../hooks/useUserSync"
export default function AuthRoutesLayout() {
    const { isSignedIn } = useAuth()
    // if (isSignedIn) {
    //     return <Redirect href='/(tabs)'></Redirect>
    // }    const { isSignedIn, isLoaded } = useAuth()
    // if(!isLoaded) return null
    if (isSignedIn)  return <Redirect href={'./(tabs)'}></Redirect>
    return <Stack screenOptions={{ headerShown: false }}></Stack>
    //     const { isSignedIn } = useAuth()
    //     // if(!isLoaded) return null
    //     if (isSignedIn)  return <Redirect href={'../home'}></Redirect>
    // return <Stack screenOptions={{headerShown:false}}></Stack>
}