import React from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import LinkToStore from './components/linkToStore'
import DetecDevice from './components/detecDevice'
import TakePhoto from './components/takePhoto'
import MapTest from './components/mapTest'

const App = () => {

  return (<Box>
    <Typography variant='h2'>CRA - PWA</Typography>
    {/* link to store */}
    <LinkToStore />

    {/* detec device os */}
    <DetecDevice />

    {/* take photo */}
    <TakePhoto />

    {/* map test */}
    <MapTest />
  </Box>);
}

export default App;
