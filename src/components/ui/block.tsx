import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

interface IBlock {
  children: React.ReactNode;
  title: string;
}

const Block = (props:IBlock) => {
  const { children, title } = props
  return (<Box sx={{marginTop: '30px'}}>
    <Typography variant='h4' sx={{marginLeft: '10px'}}>{title}</Typography>
    <Box sx={{
      border: '1px solid #bcbcbc',
      padding: '12px',
      borderRadius: '10px',
      margin: '10px'
    }}>{ children }</Box>
  </Box>)
}

export default Block