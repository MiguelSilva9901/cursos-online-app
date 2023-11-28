import sesionUsurioReducer from "./sesionUsurioReducer";
import openSnackbarReducer from "./openSnackbarReducer";

export const mainReducer = ({sesionUsuario, openSanckbar}, action) => {

    return {
        sesionUsurio : sesionUsurioReducer(sesionUsuario, action),
        openSanckbar : openSnackbarReducer(openSanckbar, action)
    }

}

