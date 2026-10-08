import { Text, View, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import '../../../global.css'
import { useSocialAuth } from '../../../hooks/useSocialAuth'
export default function Index() {
 const {handleSocialAuth, isLoading}= useSocialAuth()
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

