import React, { useState } from 'react'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'

import Block from './ui/block'

const TakePhoto = () => {
  const [source, setSource] = useState<string>("")

  const handleCapture = (target:any) => {
    if(target.files && target.files.length !== 0) {
      const file = target.files[0]
      const newUrl = URL.createObjectURL(file)
      setSource(newUrl)
    }
  }

  return (<Block title='Take Photo, Photo library, Choose File'>
    <Box sx={{textAlign: 'center'}}>
      <Typography variant='h5'>Capture your image</Typography>
      {source &&
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            border: '1px solid #ccc',
            width: '100%',
            'img': {
              width: 'inherit',
              height: 'inherit'
            }
          }}
        >
          <img src={source} alt={"snap"} />
        </Box>
      }
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="label">
          <input
            hidden
            accept='image/*'
            type='file'
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleCapture(e.target)}
          />
          <CameraAltOutlinedIcon />
        </IconButton>
      </label>
    </Box>
  </Block>)
}

export default TakePhoto