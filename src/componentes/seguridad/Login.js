import React from 'react';
import style from '../Tool/Style';
import {Avatar, Button, Container, TextField, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login = () => {
  return (  
    <Container maxWidth ='xs'>
        <div style={style.paper}>
            <Avatar style={style.avatar}>
                <LockOutlinedIcon style={style.icon} />
            </Avatar>
            <Typography component='h1' variant='h5'>
                Login de Usuario
            </Typography>
        </div>
        <form style={style.form}>
            <TextField name='txtUserName' variant='outlined' label='Ingrese su username' fullWidth margin='normal' />
            <TextField type='password' name='txtPassword' variant='outlined' label='Ingrese su password' fullWidth margin='normal' />
            <Button type='submit' variant='contained' color='primary' style={style.submit}>
                Enviar
            </Button>
        </form>

    </Container>
  )
}

export default Login