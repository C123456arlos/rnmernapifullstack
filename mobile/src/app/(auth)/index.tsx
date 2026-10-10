import { Text, View, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import '../../../global.css'
import { useSSO } from "@clerk/clerk-expo"
import { useState } from "react"
import { Alert } from "react-native"
import { useRouter } from "expo-router"
// import { useSocialAuth } from '../../../hooks/useSocialAuth'
export default function Index() {
  // const { handleSocialAuth, isLoading } = useSocialAuth()
      const router= useRouter()
      const [isLoading, setIsLoading] = useState(false)
      const { startSSOFlow } = useSSO()
      const handleSocialAuth = async (strategy: 'oauth_google' | 'oauth_apple') => {
      // const handleSocialAuth = async (strategy: 'oauth_google' | 'oauth_apple') => {
          setIsLoading(true)
          try {
              const { createdSessionId, setActive } = await startSSOFlow({strategy} )
              if (createdSessionId && setActive) {
                  await setActive({ session: createdSessionId })
                  router.replace('/')
              }
          } catch (error) {
              console.log('error in social auth', error)
              const provider = strategy === 'oauth_google' ? 'Google' : 'Apple'
              Alert.alert('error', `failed to sign n with${provider} please try again`)
          } finally {
              setIsLoading(false)
          }
      }
  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 px-8 justify-between">
        <View className="flex-1 justify-center">
          <View className="items-center">
            <Image source={require('../../../assets/images/social-media.png')} className='size-96' resizeMode='contain'></Image>
          </View>
          <View className="flex-col gap-2">
            <TouchableOpacity className="flex-row items-center justify-center bg-white border
            border-gray-300 rounded-full py-3 px-6" onPress={() => handleSocialAuth('oauth_google')} disabled={isLoading}
              style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowRadius: 2, elevation: 2 }}>
            {/* border-gray-300 rounded-full py-3 px-6" onPress={() => handleSocialAuth('oauth_google')} disabled={isLoading}
              style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowRadius: 2, elevation: 2 }}> */}
              {isLoading ? (
                <ActivityIndicator size='small' color={'#000'}></ActivityIndicator>
              ) : (
              <View className="flex-row items-center justify-center">
                <Image source={require('../../../assets/images/google.png')} className="size-5 mr-3"
                  resizeMode="contain"></Image>
                <Text className="text-black font-medium text-base">continue with google</Text>
              </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-center bg-white border
            border-gray-300 rounded-full py-3 px-6" onPress={() => handleSocialAuth('oauth_apple')} disabled={isLoading}
              style={{shadowColor:'#000', shadowOffset:{width:0, height:1}, shadowRadius:2, elevation:2}}>
              {isLoading ? (
                <ActivityIndicator size='small' color={'#000'}></ActivityIndicator>
              ) : (
                <View className="flex-row items-center justify-center">
                <Image source={require('../../../assets/images/apple-logo.png')} className="size-5 mr-3"
                  resizeMode="contain"></Image>
                <Text className="text-black font-medium text-base">continue with apple</Text>
              </View>
                )}
            </TouchableOpacity>
          </View>
          <Text className="text-center text-gray-500 text-xs leading-4 mt-6 px-2">
            by signing up you agree to our <Text className="text-blue-500">terms</Text>
            {', '}<Text className="text-blue-500">privacy policy</Text>{', and'}
            <Text className="text-blue-500">cookie use</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

// import { Text, View, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from "react-native";
// import '../../../global.css'
// import { useSocialAuth } from '../../../hooks/useSocialAuth'
// export default function Index() {
//  const {handleSocialAuth, isLoading}= useSocialAuth()
//   return (
//     <View className="flex-1 bg-white">
//       <View className="flex-1 px-8 justify-between">
//         <View className="flex-1 justify-center">
//           <View className="items-center">
//             <Image source={require('../../../assets/images/social-media.png')} className='size-96' resizeMode='contain'></Image>
//           </View>
//           <View className="flex-col gap-2">
//             <TouchableOpacity className="flex-row items-center justify-center bg-white border
//             border-gray-300 rounded-full py-3 px-6" onPress={() => handleSocialAuth('oauth_google')} disabled={isLoading}
//               style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowRadius: 2, elevation: 2 }}>
//               {isLoading ? (
//                 <ActivityIndicator size='small' color={'#000'}></ActivityIndicator>
//               ) : (
//               <View className="flex-row items-center justify-center">
//                 <Image source={require('../../../assets/images/google.png')} className="size-5 mr-3"
//                   resizeMode="contain"></Image>
//                 <Text className="text-black font-medium text-base">continue with google</Text>
//               </View>
//               )}
//             </TouchableOpacity>
//             <TouchableOpacity className="flex-row items-center justify-center bg-white border
//             border-gray-300 rounded-full py-3 px-6" onPress={() => handleSocialAuth('oauth_apple')} disabled={isLoading}
//               style={{shadowColor:'#000', shadowOffset:{width:0, height:1}, shadowRadius:2, elevation:2}}>
//               {isLoading ? (
//                 <ActivityIndicator size='small' color={'#000'}></ActivityIndicator>
//               ) : (
//                 <View className="flex-row items-center justify-center">
//                 <Image source={require('../../../assets/images/apple-logo.png')} className="size-5 mr-3"
//                   resizeMode="contain"></Image>
//                 <Text className="text-black font-medium text-base">continue with apple</Text>
//               </View>
//                 )}
//             </TouchableOpacity>
//           </View>
//           <Text className="text-center text-gray-500 text-xs leading-4 mt-6 px-2">
//             by signing up you agree to our <Text className="text-blue-500">terms</Text>
//             {', '}<Text className="text-blue-500">privacy policy</Text>{', and'}
//             <Text className="text-blue-500">cookie use</Text>
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// import { Text, TextInput, TouchableOpacity, View} from 'react-native'
// import { useSignUp } from '@clerk/clerk-expo'
// import { Link, useRouter } from 'expo-router'
// import { useState } from 'react'

// import {styles} from '../../../assets/styles/auth.styles'

// import { COLORS } from '../../../constants/colors'
// import { Ionicons } from '@expo/vector-icons'
// import { Image } from 'expo-image'

// export default function SignUpScreen() {
//     const { isLoaded, signUp, setActive } = useSignUp()
//     const router = useRouter()

//     const [emailAddress, setEmailAddress] = useState('')
//     const [password, setPassword] = useState('')
//     const [pendingVerification, setPendingVerification] = useState(false)
//     const [code, setCode] = useState('')
//     const [error, setError]= useState()
//     const onSignUpPress = async () => {
//         if (!isLoaded) return
//         try {
//             await signUp.create({
//                 emailAddress,
//                 password
//             })
//             // router.replace('/')
//             await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
//             setPendingVerification(true)
//         } catch (err) {
//             if (err.errors?.[0]?.code === 'form_identifier_exists') {
//                 setError('that email address is already in use please try another')
//             } else {
//                 setError('an error occurred please try again')
//                 console.error(JSON.stringify(err, null, 2))
//                 console.log(err)
//             }
//         }
//     }
//     const onVerifyPress = async () => {
//         if (!isLoaded) return
//         try {
//             const signUpAttempt = await signUp.attemptEmailAddressVerification({ code })
//             if (signUpAttempt.status === 'complete') {
//                 await setActive({ session: signUpAttempt.createdSessionId })
//                 // router.replace('/')
//             } else {
//                 console.error(JSON.stringify(signUpAttempt, null, 2))
//             }
//         } catch (error) {
//             console.error(JSON.stringify(err, null, 2))
//         }
//     }
//     if (pendingVerification) {
//         return (
//             <View style={{marginTop:100}}>
//                 <Text>verify your email</Text>
//                 {error ?
//                     (<View>
//                         <Ionicons name='alert-circle' ></Ionicons>
//                         <Text>{error}</Text>
//                         <TouchableOpacity>
//                             <Ionicons name='close' size={20} ></Ionicons>
//                         </TouchableOpacity>
//                 </View>):null}
//                 <TextInput
//                     value={code} placeholder='enter your verification code' placeholderTextColor={'#948478'}
//                     onChangeText={(code) => setCode(code)}></TextInput>
//                 <TouchableOpacity onPress={onVerifyPress}>
//                     <Text >verify</Text>
//                 </TouchableOpacity>
//             </View>
//         )
//     }
//     return (
       
//             <View style={{marginTop:100}}>
//                 {/* <Image source={require('../../../../assets/plan-ahead.png')} style={styles.illustration}></Image> */}
//                 <Text>create account</Text>
//                             {error ?
//                     (<View >
//                         <Ionicons name='alert-circle' size={20} ></Ionicons>
//                         <Text>{error}</Text>
//                         <TouchableOpacity>
//                             <Ionicons name='close' size={20} ></Ionicons>
//                         </TouchableOpacity>
//                 </View>):null}
//                 <TextInput autoCapitalize='none'
//                     value={emailAddress} placeholderTextColor={'#948478'} placeholder='enter email'
//                 onChangeText={(email)=>setEmailAddress(email)}></TextInput>
//                 <TextInput
//                     value={password} placeholderTextColor={'#948478'} placeholder='enter password' secureTextEntry={true}
//                 onChangeText={(password)=>setPassword(password)}></TextInput>
                
//                 <TouchableOpacity  onPress={onSignUpPress}>
//                     <Text >signup</Text>
//                 </TouchableOpacity>
//                 <View >
//                     <Text >already have an account</Text>
//                     <TouchableOpacity onPress={() => router.back()}>
//                         <Text >sign in</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
     
//     )
// }
