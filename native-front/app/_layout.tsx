import { Tabs } from 'expo-router'
import { NativeBaseProvider } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Layout() {
  return (
    <NativeBaseProvider>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: '一覧',
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons name="spray" size={24} color={focused ? '#007aff' : '#8e8e8f'} />
            ),
            href: '/'
          }}
        />
        {/* <Tabs.Screen
          name="今日のアクティビティ"
          options={{
            title: '',
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons name="list-status" size={24} color={focused ? '#007aff' : '#8e8e8f'} />
            )
          }}
        /> */}
        {/* <Tabs.Screen
          name="colorcheck"
          options={{
            title: 'カラーチェック',
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons name="palette" size={24} color={focused ? '#007aff' : '#8e8e8f'} />
            )
          }}
        /> */}
      </Tabs>
    </NativeBaseProvider>
  )
}
