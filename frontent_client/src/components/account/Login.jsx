// We are using function based components rather then class based components.

import React from 'react'
import { useState } from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material'

const Component = styled(Box)`
width: 400px;
margin: auto;
box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

// If you pass any html element then you need to pass it in quote "" and then create a object to make changes in the css.

const Image = styled('img')({

  // Whenever we pass any CSS in object we use camelCase rather then Hyphen - case.
  width: 100,
  margin: 'auto',
  display: 'flex',
  padding: '50px 0 0',

})

const Wrapper = styled(Box)`
padding: 25px 35px;
display: flex;
flex: 1;
flex-direction: column;
& > div, & > button, & > p{
  margin-top: 20px;
}
`;

const LoginButton = styled(Button)`
text-transform: none;
background: #FB641B;
color: #fff;
hieght: 48px;
border-radius: 2px;
`;

const SignUpButton = styled(Button)`
text-transform: none;
background: #fff;
color: #2874f0;
hieght: 48px;
border-radius: 2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
color: #878787;
`

const Login = () => {
    const imageURl = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    const [account, toggleAccount] = useState('login');
    const toggleSignup = () => {
      account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }
  return (
    <Component>
      <Box>
          <Image src={imageURl} alt="login" />
          {
            account === 'login' ?
          <Wrapper>
              <TextField variant="standard" label="Enter username"/>
              <TextField variant="standard" label="Enter password"/>
              <LoginButton variant="contained">Login</LoginButton>
              <Text style={{textAlign: 'center' }}>OR</Text>
              <SignUpButton onClick={() => toggleSignup()}>Create a account</SignUpButton>
          </Wrapper>
          :
          <Wrapper>
              <TextField variant="standard" label="Enter name"/>
              <TextField variant="standard" label="Enter username"/>
              <TextField variant="standard" label="Enter password"/>
              <SignUpButton>Signup</SignUpButton>
              <Text style={{textAlign: 'center' }}>OR</Text>
              <LoginButton variant='contained' onClick={() => toggleSignup()}>Already have an account</LoginButton>
          </Wrapper>
          }
      </Box>
    </Component>
  )
}

export default Login
