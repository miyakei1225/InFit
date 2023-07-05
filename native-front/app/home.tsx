import { Link } from 'expo-router'
import { Box, Button, NativeBaseProvider } from 'native-base'
import React, { useEffect, useState } from 'react'
import appleHealthKit, { HealthInputOptions, HealthKitPermissions, HealthValue } from 'react-native-health'

const permissions = {
  permissions: {
    read: ['Height', 'Weight', 'StepCount', 'DateOfBirth', 'BodyMassIndex'],
    write: ['Weight', 'StepCount', 'BodyMassIndex']
  }
} as HealthKitPermissions

// appleHealthKit.initHealthKit(permissions, (error: string) => {
//   /* Called after we receive a response from the system */

//   if (error) {
//     console.log('[ERROR] Cannot grant permissions!')
//   }

//   /* Can now read or write to HealthKit */

//   const options = {
//     startDate: new Date(2020, 1, 1).toISOString()
//   }

//   appleHealthKit.getHeartRateSamples(options, (callbackError: string, results: HealthValue[]) => {
//     console.log(results)
//     /* Samples are now collected from HealthKit */
//   })

const Home = () => {
  const [hasPermission, setHasPermission] = useState(false)
  const [steps, setSteps] = useState(0)

  /*
  useEffect(() => {
    appleHealthKit.initHealthKit(permissions, (error: string) => {
      if (error) {
        console.log('[ERROR] Cannot grant permissions!')
        return
      }
      setHasPermission(true)
    })
  }, [])

  useEffect(() => {
    if (!hasPermission) return

    const options: HealthInputOptions = {
      date: new Date().toISOString(),
      includeManuallyAdded: false
    }

    appleHealthKit.getStepCount(options, (error, results) => {
      if (error) {
        console.log(error)
        return
      }
      console.log(results.value)
      setSteps(results.value)
    })
  }, [hasPermission])
  */

  return (
    <Box>
      <Button>aaa</Button>
      <Link href="/">トップ画面へ</Link>
    </Box>
  )
}

export default Home
