import React, { useState } from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Block from './ui/block'
import {  } from '@mui/material'

const GoogleOauth = () => {
    const [ userName, setUserName ] = useState<string>('')

    return (<Block title='Google OAuth'>
        <Typography>{userName}</Typography>
        <Box sx={{
            width:'600px',
            margin: '20px auto',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_GOOGLE_ID as string}>
                <GoogleLogin
                    ux_mode='redirect'
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse)
                        console.log(jwt_decode(credentialResponse.credential as string))
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>
        </Box>
  </Block>)
}

export default GoogleOauth