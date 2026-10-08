import { Redirect, Stack } from "expo-router"
import { useAuth } from "@clerk/clerk-expo"
export default function AuthRoutesLayout() {
    const { isSignedIn } = useAuth()
        console.log(isSignedIn, 'isSignedIn')
    if (isSignedIn) {
            return <Redirect href='/(tabs)'></Redirect>
        }
        return <Stack screenOptions={{headerShown:false}}></Stack>
    //     const { isSignedIn } = useAuth()
    //     // if(!isLoaded) return null
    //     if (isSignedIn)  return <Redirect href={'../home'}></Redirect>
    // return <Stack screenOptions={{headerShown:false}}></Stack>
}