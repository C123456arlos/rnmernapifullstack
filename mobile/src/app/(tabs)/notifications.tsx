import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import React from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNotifications } from '../../../hooks/useNotifications'
import { Feather } from '@expo/vector-icons'
import NotificationsNotFound from '../../../components/NotificationsNotFound'
import { Notification } from '../../../types'
import NotificationCard from '../../../components/NotificationCard'

const NotificationsScreen = () => {
  const { notifications, isLoading, error, refetch, isRefetching,
    deleteNotification } = useNotifications()
  const insets = useSafeAreaInsets()
  if (error) {
    return <View className='flex-1 items-center justify-center p-8'>
      <Text className='text-gray-500 mb-4'>failed to load notifications</Text>
      <TouchableOpacity className='bg-blue-500 px-4 py-2 rounded-lg' onPress={() => refetch()}>
        <Text className='text-white font-semibold'>retry</Text>
      </TouchableOpacity>
     </View>
   }
  return (
    <SafeAreaView className='flex-1 bg-white' edges={['top']}>
      <View className='flex-row items-center justify-between px-4 py-3 border-b border-gray-100'>
        <Text className='text-xl font-bold text-gray-900'>notifications</Text>
        <TouchableOpacity>
          <Feather name='settings' size={24} color='#657786'></Feather>
        </TouchableOpacity>
      </View>
      <ScrollView className='flex-1' contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}
        showsVerticalScrollIndicator={false} refreshControl={<RefreshControl
        refreshing={isRefetching} onRefresh={refetch} tintColor={'#1da1f2'}></RefreshControl>}>
        {isLoading ? (
          <View className='flex-1 items-center justify-center p-8'>
            <ActivityIndicator size='large' color='#1da1f2'></ActivityIndicator>
            <Text className='text-gray-500 mt-4'>loading notifications</Text>
        </View>
        ) : notifications.length === 0 ? (<NotificationsNotFound></NotificationsNotFound>) : (
          notifications.map(( notification: Notification )=>(
            <NotificationCard key={notification._id}
              notification={notification} onDelete={deleteNotification}></NotificationCard>
            ))
        )}
     </ScrollView>
    </SafeAreaView>
  )
}

export default NotificationsScreen