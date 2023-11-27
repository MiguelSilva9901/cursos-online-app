import React, { useState } from "react";
import { Button, Container, Grid, TextField, Typography } from "@material-ui/core";
import style from '../Tool/Style';
import { agregarUsuario } from '../../actions/UsuarioActions';


const RegistrarUsuario = () => {

    // creamos una variable de estado que representara los datos del formulario
    // Tabmbien tendra un metodo que nos permitira cambiar los valores

    const [usuario, setUsuario] = useState({
        nombreCompleto : '',
        Email : '',      
        Password : '',
        UserName : ''
        // txtConfirmaPassword : ''
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
         agregarUsuario(usuario).then(response =>{
            console.log('Se agrego correctamente el usuario', response);
            //Acá le pasamos el token que viene en el response a la variable de nuestro navegador en este caso("token_seguridad")
            window.localStorage.setItem("token_seguridad", response.data.token)
         })    
    }


    return(
        <Container component ="main" maxWidth ="md" justify ="center">
            <div style={style.paper}>
                <Typography component="h1" variant="h5">
                    Registro de Usuario
                </Typography>
                <form style={style.form}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} md={12}>
                            <TextField name="nombreCompleto" value={usuario.nombreCompleto} onChange={ingresaValoresMemoria} variant="outlined" fullWidth label="Ingrese su nombre"/>
                        </Grid>

                        {/* <Grid item xs={12} md={6}>
                            <TextField name="Apellidos" value={usuario.Apellidos} onChange={ingresaValoresMemoria} variant="outlined" fullWidth label="Ingrese sus apellidos"/>
                        </Grid> */}

                        <Grid item xs={12} md={6}>
                            <TextField name="Email" value={usuario.Email} onChange={ingresaValoresMemoria} variant="outlined" fullWidth label="Ingrese su email"/>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField name="UserName" value={usuario.UserName} onChange={ingresaValoresMemoria} variant="outlined" fullWidth label="Ingrese su username"/>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField name="Password" type='password' value={usuario.Password} onChange={ingresaValoresMemoria} 
                            variant="outlined" fullWidth label="Ingrese su password"/>
                        </Grid>

                        {/* <Grid item xs={12} md={6}>
                            <TextField name="txtConfirmaPassword" type="password" value={usuario.txtConfirmaPassword} onChange={ingresaValoresMemoria} 
                             variant="outlined" fullWidth label="Confirme el password"/>
                        </Grid> */}

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