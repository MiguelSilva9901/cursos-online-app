import React, { useState } from "react";
import { Button, Container, Grid, TextField, Typography } from "@material-ui/core";
import style from '../Tool/Style';

const RegistrarUsuario = () => {

    // creamos una variable de estado que representara los datos del formulario
    // Tabmbien tendra un metodo que nos permitira cambiar los valores

    const [usuario, setUsuario] = useState({
        txtNombre : '',
        txtApellidos : '',
        txtEmail : '',
        txtUsername : '',
        txtPassword : '',
        txtConfirmaPassword : ''
    })

    const ingresaValoresMemoria = e => {
        const {name, value} = e.target;
        setUsuario( anterior =>({
            ...anterior,
            [name] : value
            //txtNombre
        }))
    }

    const mostrarDatosFormulario = () => {        
         console.log('Datos del usuario. Provenientes del formulario : ', usuario);       
    }


    return(
        <Container component ="main" maxWidth ="md" justify ="center">
            <div style={style.paper}>
                <Typography component="h1" variant="h5">
                    Registro de Usuario
                </Typography>
                <form style={style.form}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} md={6}>
                            <TextField name="txtNombre" value={usuario.txtNombre} onChange={ingresaValoresMemoria} variant="outlined" fullWidth label="Ingrese su nombre"/>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField name="txtApellidos" value={usuario.txtApellidos} onChange={ingresaValoresMemoria} variant="outlined" fullWidth label="Ingrese sus apellidos"/>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField name="txtEmail" value={usuario.txtEmail} onChange={ingresaValoresMemoria} variant="outlined" fullWidth label="Ingrese su email"/>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField name="txtUsername" value={usuario.txtUsername} onChange={ingresaValoresMemoria} variant="outlined" fullWidth label="Ingrese su username"/>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField name="txtPassword" type='password' value={usuario.txtPassword} onChange={ingresaValoresMemoria} 
                            variant="outlined" fullWidth label="Ingrese su password"/>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField name="txtConfirmaPassword" type="password" value={usuario.txtConfirmaPassword} onChange={ingresaValoresMemoria} 
                             variant="outlined" fullWidth label="Confirme el password"/>
                        </Grid>

                    </Grid>

                    <Grid container justify="center">
                        
                        <Grid item xs={12} md={6}>
                            <Button onClick={mostrarDatosFormulario} fullWidth variant="contained" color="primary" size="large" style={style.submit} >
                                Eviar
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default RegistrarUsuario;