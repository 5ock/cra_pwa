import React, { useState } from 'react'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'

import Block from './ui/block'

const TakePhoto = () => {
  const [source, setSource] = useState<string>("")

  const handleCapture = (target:any) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  }


  return (<Block title='Take Photo, Photo library, Choose File'>
    <Box sx={{textAlign: 'center'}}>
      <h5>Capture your image</h5>
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
          <img src={source} alt={"snap"}></img>
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