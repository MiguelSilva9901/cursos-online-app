import React, { useEffect, useState } from 'react'
import style from '../Tool/Style'
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import { actualizarUsuario, obtenerUsuarioActual } from '../../actions/UsuarioActions';
import { useStateValue } from '../../contexto/store';

export const PerfilUsuario = () => {
    const [{sesionUsurio}, dispatch] = useStateValue();
    const [usuario, setUsuario] = useState({
        nombreCompleto : '',
        Token : '',
        email : '',
        Password : '',
        username : ''
        //imagen : ''
    })

    const IngresarValoresMemoria = e =>{
        const {name, value} = e.target;
        setUsuario(anterior => ({
            ...anterior,
            [name] : value
        }));
    }

    useEffect( () => {
        obtenerUsuarioActual(dispatch).then(response => {
            console.log('Esta es la data del usuario actual: ', response);
            setUsuario(response.data);
        });
    },[])

    const editarUsuario = () => {
        actualizarUsuario(usuario).then(response => {
            console.log('Se actualizo el usuario con la siguiente data: ', response);
            window.localStorage.setItem("token_seguridad", response.data.token)         
        })
    }

  return (
    <Container component='main' maxWidth='md' justify='center'>
        <div style={style.paper}>
            <Typography component='h1' variant='h5'>
                Perfil de Usuario
            </Typography>
        </div>
        <form style={style.form}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <TextField name='nombreCompleto' onChange={IngresarValoresMemoria} value={usuario.nombreCompleto} variant='outlined' label='Ingrese nombre completo' fullWidth />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField name='email' onChange={IngresarValoresMemoria} value={usuario.email} variant='outlined' label='Ingrese su email' fullWidth />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField name='username' onChange={IngresarValoresMemoria} value={usuario.username} variant='outlined' label='Ingrese su username' fullWidth />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField name='Password' onChange={IngresarValoresMemoria} value={usuario.Password} type='password' variant='outlined' label='Ingrese su password' fullWidth />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField name='txtValida' type='password' variant='outlined' label='Repita su password' fullWidth />
                </Grid>
                
            </Grid>

            <Grid container justify='center'>
                <Grid item xs={12} md={12}>
                    <Button type='submit' onClick={editarUsuario} variant='contained' size='large' color='primary' fullWidth style={style.submit}>
                        Guardar Datos
                    </Button>
                </Grid>
            </Grid>
            
        </form>

    </Container>
    
  )
};

export default PerfilUsuario
