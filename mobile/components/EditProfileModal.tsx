import { View, Text, Modal, TouchableOpacity, ActivityIndicator, ScrollView, TextInput } from 'react-native'
interface EditProfileModalProps {
    isVisible: boolean
    onClose: () => void
    formData: {
        firstName: string
        lastName: string
        bio: string
        location:string
    }
    saveProfile: () => void
    updateFormField: (field: string, value: string) => void
    isUpdating:boolean
}

const EditProfileModal = ({ formData, isUpdating, isVisible, onClose, saveProfile, updateFormField }: EditProfileModalProps) => {
    const handleSave = () => {
        saveProfile()
        onClose()
    }
  return (
    <Modal visible={isVisible} animationType='slide' presentationStyle='pageSheet'>
          <View className='flex-row items-center justify-between px-4 py-3 border-b border-gray-100'>
              <TouchableOpacity onPress={onClose}>
                  <Text className='text-blue-500 text-lg'>cancel</Text>
              </TouchableOpacity>
              <Text className='text-lg font-semibold'>edit profile</Text>
              <TouchableOpacity onPress={handleSave} disabled={isUpdating}
                  className={`${isUpdating ? 'opacity-50' : ''}`}>
                  {isUpdating ? (<ActivityIndicator size='small' color='#1da1f2'></ActivityIndicator>):(<Text className='text-blue-500 text-lg font-semibold'>save</Text>)}
              </TouchableOpacity>
          </View>
          <ScrollView className='flex-1 px-4 py-6'>
              <View className='space-y-4'>
                  <View>
                      <Text className='text-gray-500 text-sm mb-2'>first name</Text>
                      <TextInput className='border border-gray-200 rounded-lg p-3 text-base'
                      value={formData.firstName} onChangeText={(text)=>updateFormField('firstName', text)} placeholder='your first name'></TextInput>
                  </View>
                  <View>
                      <Text className='text-gray-500 text-sm mb-2'>last name</Text>
                      <TextInput className='border border-gray-200 rounded-lg p-3 text-base'
                      value={formData.lastName} onChangeText={(text)=>updateFormField('lastName', text)} placeholder='your last name'></TextInput>
                  </View>
                  <View>
                      <Text className='text-gray-500 text-sm mb-2'>bio</Text>
                      <TextInput className='border border-gray-200 rounded-lg px-3 py-3 text-base' value={formData.bio} onChangeText={(text) => updateFormField('bio', text)}
                      placeholder='tell us about yourself' multiline numberOfLines={3} textAlignVertical='top'></TextInput>
                  </View>
                  <View>
                      <Text className='text-gray-500 text-sm mb-2'>location</Text>
                      <TextInput className='border border-gray-200 rounded-lg px-3 py-3
                      text-base' value={formData.location} onChangeText={(text)=>updateFormField('location', text)} placeholder='where are you located'></TextInput>
                  </View>
              </View>
          </ScrollView>
    </Modal>
  )
}

export default EditProfileModal