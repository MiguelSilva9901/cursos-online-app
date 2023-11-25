import HttpCliente from '../servicios/HttpCliente';

export const agregarUsuario = usuario => {
    return new Promise((resolve, eject) => {
        HttpCliente.post('/Usuario/registrar', usuario).then(response => {
            resolve(response);
        })
    })
}
