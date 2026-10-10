import { View, Text, Alert, Image } from 'react-native'
import { Notification } from '../types'
import { Feather } from '@expo/vector-icons'
interface NotificationCardProps{
    notification: Notification
    onDelete:(notificationId:string)=>void
}
const NotificationCard = ({ notification, onDelete }: NotificationCardProps) => {
    const getNotificationText = () => {
        switch (notification.type) {
            case 'like':
                return `${name} liked your post`
            case 'comment':
                return `${name} commented on your post`
            case 'follow':
                return `${name} started following you`
            default:
                'return'
        }
    }
    const getNotificationIcon = () => {
        switch (notification.type) {
            case 'like':
                return <Feather name='heart' size={20} color='#e0245e'></Feather>
            case 'comment':
                return <Feather name='message-circle' size={20} color='#1da1f2'></Feather>
            case 'follow':
                return <Feather name='user-plus' size={20} color='#17bf63'></Feather>
            default:
                return <Feather name='bell' size={20} color='#657786'></Feather>
        }
    }
    const handleDelete = () => {
        Alert.alert('delete notification', 'are you sure you want to delete this notification', [
            { text: 'cancel', style: 'cancel' },
            {text:'delete', style:'destructive', onPress:()=>onDelete(notification._id)}
        ])
    }
  return (
    <View className='borde-b border-gray-100 bg-white'>
          <View className='flex-row p-4'>
              <View className='relative mr-3'>
                  <Image source={{ uri: notification.from.profilePicture }}
                      className='size-12 rounded-full'></Image>
                  <View className='absolute -bottom-1 -right-1 size-6 bg-white 
                  items-center justify-center'>
                      {getNotificationIcon()}
                  </View>
              </View>
      </View>
    </View>
  )
}

export default NotificationCard
// 17:32