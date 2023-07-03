import { Link } from 'expo-router'
import { Box, Button, NativeBaseProvider } from 'native-base'
import React from 'react'

const Home = () => {
  return (
    <Box>
      <Button>aaa</Button>
      <Link href="/">トップ画面へ</Link>
    </Box>
  )
}

export default Home
