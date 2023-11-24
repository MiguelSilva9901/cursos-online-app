import React, { useEffect, useState } from "react";
import axios from 'axios';



function Perfil(prop){

    const [paises, obtenerPaises] = useState([]);
    const [status, cambiarStatus] = useState(false);

    useEffect ( () => {

       axios.get('https://restcountries.com/v3.1/all') 
            .then(resultado => {
                obtenerPaises(resultado.data);
                cambiarStatus(true);
            })
            .catch(error => {
                cambiarStatus(true);
            })

        
    } , [] )
    if(status){
        return(
            <table border="2"  style={{marginLeft: 20, padding: 5, borderCollapse: "collapse"}}>
                <tr>
                    <th colSpan={3} style={{fontSize: 30, padding:10, backgroundColor:"#00154D", color: "#FFFFFF"}} >
                        Paises que cuyo idioma es el español.
                    </th>
                </tr>
                {/* <tr><td>&emsp;</td></tr>               */}
                <tr>
                    <th style={{textAlign:'left', fontSize:20, backgroundColor: "#337AFF"}}>Nombre Comun</th>
                    {/* <th>&nbsp; &nbsp;</th> */}
                    <th style={{textAlign:'left', fontSize:20, backgroundColor: "#337AFF"}}>Nombre Completo</th>
                </tr>
            
                {paises.map((pais, indice) => 

                    <tr>
                        <td key={indice} style={{textAlign:'left', backgroundColor:"#C1E3FF"}}>
                            {pais.name.common}
                        </td>
                        {/* <td>&nbsp; &nbsp;</td> */}
                        <td key={indice} style={{textAlign: 'left', backgroundColor:"#C1E3FF"}}>
                            {pais.name.official}
                        </td>
                    </tr>

                )}

            </table>
        );
    }else{
        return(<h1>Esta cargando los valores del servicio....</h1>);
    }

}


export default Perfil;
