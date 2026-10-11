import { View, Text, ActivityIndicator, Image, TouchableOpacity, Touchable, RefreshControl } from 'react-native'
import React from 'react'
import { useCurrentUser } from '../../../hooks/useCurrentUser'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import SignOutButton from '../../../components/SignOutButton'
import { ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { format } from 'date-fns'
import { usePosts } from '../../../hooks/usePosts'
import PostsList from '../../../components/PostsList'
import EditProfileModal from '../../../components/EditProfileModal'
import { useProfile } from '../../../hooks/useProfile'

const ProfileScreen = () => {
  const { currentUser, isLoading } = useCurrentUser()
  const insets = useSafeAreaInsets()
  const{posts:userPosts, refetch:refetchPosts, isLoading:isRefetching}= usePosts(currentUser?.username)
  const {
    isEditModalVisible, openEditModal, closeEditModal, formData, saveProfile, updateFormField, 
    isUpdating, refetch:refetchProfile
  }= useProfile()
  if (isLoading) {
    return (
      <View className='flex-1 bg-white items-center justify-center'>
        <ActivityIndicator size="large" color={'#1d1af2'}></ActivityIndicator>
      </View>
    )
  }
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-row items-center justify-between px-4 py-3 border-b border-gray-100
      '>
        <View >
          <Text className='text-xl font-bold text-gray-900'>
          {currentUser?.firstName} {currentUser?.lastName}
          </Text>
          <Text className='text-gray-500 text-sm'>{userPosts.length} posts</Text>
        </View>
        <SignOutButton></SignOutButton>
      </View>
      <ScrollView className={'flex-1'} contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}
        showsVerticalScrollIndicator={false} refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={() => {
            refetchProfile(); 
            refetchPosts()
          }}  tintColor={'#1d1af2'}></RefreshControl>
        }>        
          <Image source={{uri:currentUser?.bannerImage || 'https://plus.unsplash.com/premium_photo-1789668167441-8128f226f9e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'}} className='w-full h-48' resizeMode='cover'></Image>
        <View className='px-4 pb-4 border-b border-gray-100'>
          <View className='flex-row justify-between items-end -mt-16 mb-4'>
            <Image source={{ uri: currentUser?.profilePicture }}
            className='w-32 h-32 rounded-full border-4 border-white'></Image>
            <TouchableOpacity className='border border-gray-300 px-6 py-2 rounded-full'
              onPress={openEditModal}>
            <Text className='font-semibold text-gray-900'>edit profile</Text>
          </TouchableOpacity>
          </View>
          <View className='mb-4'>
            <View className='flex-row items-center mb-1'>
              <Text className='text-xl font-bold text-gray-900 mr-1'>
                {currentUser?.firstName} {currentUser?.lastName}
              </Text>
              <Feather name='check-circle' size={20} color={'#1da1f2'}></Feather>
            </View>
            <Text className='text-gray-500 mb-2'>@{currentUser?.username}</Text>
            <Text className='text-gray-900 mb-3'>{currentUser?.bio}test</Text>
            <View className='flex-row items-center mb-2'>
              <Feather name='map-pin' size={16} color={'#657786'}></Feather>
              <Text className='text-gray-500 ml-1'>{currentUser?.location}</Text>
            </View>
            <View className='flex-row items-center mb-3'>
              <Feather name='calendar' size={16} color={'#657786'}></Feather>
              <Text className='text-gray-500 ml-2'>
                joined {format(new Date(currentUser?.createdAt),'MMMM yyyy')}</Text>
            </View>
            <View className='flex-row'>
              <TouchableOpacity className='mr-6'>
                <Text className='text-gray-900'>
                  <Text className='font-bold'>{currentUser.following?.length}</Text>
                  <Text className='text-gray-500'>following</Text>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className='text-gray-900'>
                  <Text className='font-bold'>{currentUser.following?.length}</Text>
                  <Text className='text-gray-500'>followers</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <PostsList username={currentUser?.username}></PostsList>
      </ScrollView>
      <EditProfileModal isVisible={isEditModalVisible} onClose={closeEditModal}
        formData={formData} saveProfile={saveProfile} isUpdating={isUpdating} updateFormField={updateFormField}></EditProfileModal>
    </SafeAreaView>
  )
}

export default ProfileScreen
