import React from "react";
import { Button, Container, Grid, TextField, Typography } from "@material-ui/core";
import style from '../Tool/Style';

const RegistrarUsuario = () => {
    return(
        <Container component ="main" maxWidth ="md" justify ="center">
            <div style={style.paper}>
                <Typography component="h1" variant="h5">
                    Registro de Usuario
                </Typography>
                <form style={style.form}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} md={6}>
                            <TextField name="txtNombre" variant="outlined" fullWidth label="Ingrese su nombre"/>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField name="txtApellidos" variant="outlined" fullWidth label="Ingrese sus apellidos"/>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField name="txtEmail" variant="outlined" fullWidth label="Ingrese su email"/>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField name="txtUsername" variant="outlined" fullWidth label="Ingrese su username"/>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField name="txtPassword" type="password" variant="outlined" fullWidth label="Ingrese su password"/>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField name="txtConfirmaPassword" type="password" variant="outlined" fullWidth label="Confirme el password"/>
                        </Grid>

                    </Grid>

                    <Grid container justify="center">
                        
                        <Grid item xs={12} md={6}>
                            <Button type="submit" fullWidth variant="contained" color="primary" size="large" style={style.submit} >
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