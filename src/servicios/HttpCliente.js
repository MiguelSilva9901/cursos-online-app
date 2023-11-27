import axios from 'axios';

//Con esta función armamos un Request generico
axios.defaults.baseURL = 'http://localhost:5000/api';

const requestGenerico = {
    get : (url) => axios.get(url),
    post : (url, body) => axios.post(url, body),
    put : (url, body) => axios.put(url, body),
    delete : (url) => axios.delete(url)

};


// agregamos el token de seguridad en la cabecera de una petición request, el token almacenado en localstorage del navegador
axios.interceptors.request.use((config) => {
    const token_key = window.localStorage.getItem('token_seguridad');
    if(token_key){
        config.headers.Authorization = 'Bearer ' + token_key;
        return config
    }
}, error => {
    return Promise.reject(error);
});

export default requestGenerico;