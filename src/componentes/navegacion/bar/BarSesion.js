import {
  Avatar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import theme from "../../../theme/theme";
import FotoUsuarioTemp from "../../../logo.svg";
import { useStateValue } from "../../../contexto/store";

// esto es para manejar la respnsividad con MaterialDesing

const useStyles = makeStyles((theme) => ({
  seccionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  seccionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  avatarSize: {
    width: 40,
    height: 40,
  },
}));

const BarSesion = () => {
  const classes = useStyles();
  const [{sesionUsurio}, dispatch] = useStateValue();

  return (
    <Toolbar>
      <IconButton color="inherit">
        <i className="material-icons">menu</i>
      </IconButton>

      <Typography variant="h6">Cursos Oline</Typography>

      <div className={classes.grow}></div>

      <div className={classes.seccionDesktop}>
        <Button color="inherit">Salir</Button>
        <Button color="inherit">
          {sesionUsurio ? sesionUsurio.usuario.nombreCompleto : ""}
        </Button>
        <Avatar src={FotoUsuarioTemp}></Avatar>
      </div>

      <div className={classes.seccionMobile}>
        <IconButton color="inherit">
            <i className="material-icons">more_vert</i>
        </IconButton>
      </div>

    </Toolbar>
  );
};

export default BarSesion;
