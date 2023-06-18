import { Box, Button, NativeBaseProvider } from 'native-base'
import React from 'react'

const home = () => {
  return (
    <NativeBaseProvider>
      <Box>
        <Button>aaa</Button>
      </Box>
    </NativeBaseProvider>
  )
}

export default home
