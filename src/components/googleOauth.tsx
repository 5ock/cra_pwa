import React, { useState } from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Block from './ui/block'
import {  } from '@mui/material'

interface IDTokenPayload {
  iss: string;
  sub: string;
  aud: string;
  exp: number;
  iat: number;
  name?: string;
  email?: string;
  picture?: string;
}


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
            <GoogleOAuthProvider clientId={'754000738529-v1kof7hj8v4ofa5qh7vfq4dsitf05ifi.apps.googleusercontent.com'}>
                <GoogleLogin
                    ux_mode='redirect'
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse)
                        let user = jwt_decode<IDTokenPayload>(credentialResponse.credential as string)
                        if('name' in user) {
                            const name = user.name
                            setUserName(name as string)
                        }
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