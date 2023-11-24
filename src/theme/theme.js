import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette : {
        primary : {
            light : "#63a4fff",
            main : "#1976d2", //"#009966"
            dark : "#004ba0",
            getContrastText : "#ecfad8"
        }        
    },
});

export default theme;