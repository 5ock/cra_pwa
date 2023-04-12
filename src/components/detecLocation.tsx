import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import Block from './ui/block'

interface IPosition {
  lat: number;
  lng: number;
}
const initPosition = {
  lat: -1,
  lng: -1
}

const DetecLocation = () => {
  const [ location, setLocation ] = useState<IPosition>(initPosition)

  const handleGeolocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const latAndLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        setLocation(latAndLng)
      })
    }
}

  return (<Block title='Detect Current Location'>
    <Box>
      <Button variant='contained' onClick={handleGeolocation}>Detec Current Location</Button>
      <Typography sx={{marginTop: '5px'}}>lat: {location.lat}, lng: {location.lng}</Typography>
    </Box>
  </Block>)
}

export default DetecLocation