import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import Block from './ui/block'

const DetecDevice = () => {
  const [ deviceOS, setDeviceOS ] = useState<string>('please click')

  const detecDeviceOS = () => {
    let userAgent = navigator.userAgent || navigator.vendor
    let result = 'web'
    if (/android/i.test(userAgent))
      result = "Android"

  if (/iPad|iPhone|iPod/.test(userAgent))
      result = "iOS"

    setDeviceOS(result)
  }

  return (<Block title='Detect Device OS'>
    <Box>
      <Button variant='contained' onClick={detecDeviceOS}>Detec device OS</Button>
      <Typography sx={{marginTop: '5px'}}>Device OS: {deviceOS}</Typography>
    </Box>
  </Block>)
}

export default DetecDevice