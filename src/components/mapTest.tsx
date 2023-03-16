import React, { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'

import Block from './ui/block'
import MapDialog from './ui/mapDialog'

const MapTest = () => {
  const [ openDialog, setOpenDialog ] = useState<boolean>(false)
  
  const mapUrl = 'https://wmts.nlsc.gov.tw/wmts/EMAP/default/EPSG:3857/{z}/{y}/{x}'

  return (<Block title='React Leaflet'>
    <Box sx={{textAlign: 'center'}}>
      <Typography variant='h5'>Selection Position</Typography>
      <Button onClick={()=>setOpenDialog(true)}>Open Map</Button>
      {openDialog && 
        <MapDialog 
          mapUrl={mapUrl}
          onClose={() => setOpenDialog(false)}
        />
      }
    </Box>
  </Block>)
}

export default MapTest