import React from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import LinkToStore from './components/linkToStore'
import DetecDevice from './components/detecDevice'

const App = () => {

  return (<Box>
    <Typography variant='h2'>CRA - PWA</Typography>
    {/* link to store */}
    <LinkToStore />

    {/* detec device os */}
    <DetecDevice />
  </Box>);
}

export default App;
