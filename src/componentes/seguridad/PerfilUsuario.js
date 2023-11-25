import React from 'react'
import style from '../Tool/Style'
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';

export const PerfilUsuario = () => {
  return (
    <Container component='main' maxWidth='md' justify='center'>
        <div style={style.paper}>
            <Typography component='h1' variant='h5'>
                Perfil de Usuario
            </Typography>
        </div>
        <form style={style.form}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6}>
                    <TextField name='txtNombre' variant='outlined' label='Ingrese nombre' fullWidth />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField name='txtApellidos' variant='outlined' label='Ingrese apellidos' fullWidth />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField name='txtEmail' variant='outlined' label='Ingrese su email' fullWidth />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField name='txtPassword' variant='outlined' label='Ingrese su password' fullWidth />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField name='txtConfirmaPassword' variant='outlined' label='Confirme su password' fullWidth />
                </Grid>
                
            </Grid>

            <Grid container justify='center'>
                <Grid item xs={12} md={6}>
                    <Button type='submit' variant='contained' size='large' color='primary' fullWidth style={style.submit}>
                        Guardar Datos
                    </Button>
                </Grid>
            </Grid>
            
        </form>

    </Container>
    
  )
};

export default PerfilUsuario
