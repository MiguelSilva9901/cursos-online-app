import React, { useState } from 'react';
import style from '../Tool/Style';
import {Avatar, Button, Container, TextField, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { loginUsuario } from '../../actions/UsuarioActions';

const Login = () => {

const [usuario, setUsuario] = useState({
    Email : '',
    Password: ''
});    


const pasarValorMemoria = e => {
    const {name, value} = e.target;
    setUsuario(anterior => ({
        ...anterior,
        [name] : value
    }))
}


const ejecutaBoton = e => { 

        e.preventDefault();
        loginUsuario(usuario).then(response => {
            console.log('login exitoso: ', response);
            window.localStorage.setItem('token_seguridad', response.data.token)
        })
}


  return (  
    <Container component='main' maxWidth ='xs' justify='center' >
        <div style={style.paper}>
            <Avatar style={style.avatar}>
                <LockOutlinedIcon style={style.icon} />
            </Avatar>
            <Typography component='h1' variant='h5'>
                Login de Usuario
            </Typography>
        </div>
        <form style={style.form}>                      
    
            <TextField name='Email' onChange={pasarValorMemoria} value={usuario.Email} variant='outlined' label='Ingrese su username' fullWidth margin='normal' />

            <TextField type='password' name='Password' onChange={pasarValorMemoria} value={usuario.Password} variant='outlined' label='Ingrese su password' fullWidth margin='normal' />
    
            <Button type='submit' onClick={ejecutaBoton} variant='contained' color='primary' style={style.submit} fullWidth >
                Enviar
            </Button>
                  
        </form>

    </Container>
  )
}

export default Login