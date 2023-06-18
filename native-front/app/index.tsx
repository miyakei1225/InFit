import { useRouter, Link } from 'expo-router'
import { Button, Center, NativeBaseProvider, Text } from 'native-base'

export default function Page() {
  const router = useRouter()
  return (
    <Center mt={'4'}>
      <Text color={'red'} bgColor={'red'}>
        aaa
      </Text>
      <Link href="/home">ホーム画面へ</Link>
    </Center>
  )
}
