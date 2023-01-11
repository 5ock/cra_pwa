import React from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import Block from './ui/block'


const LinkToStore = () => {
  return (<Block title='Link to Mobile Store'>
    <Typography>
      <Link href='https://apps.apple.com/tw/app/'
        target='_blank'
        rel="noreferrer noopener"
      >{`[test]iOS app store link`}</Link>    
    </Typography>
    <Typography>
      <Link href='https://play.google.com/store/apps'
        target='_blank'
        rel="noreferrer noopener"
      >{`[test]Google app store link`}</Link>
    </Typography>
  </Block>)
}

export default LinkToStore