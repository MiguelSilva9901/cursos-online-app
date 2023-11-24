
import React,{useState} from 'react';
import Perfil from './componentes/Perfil';

function App() {
  const [nombre, cambiarNombre] = useState('No tiene nombre');

  function eventoTextBox(e){
    cambiarNombre(e.target.value)
  }

  return (
    <div>              
        <p style={{fontSize: 25, marginTop: -1, marginLeft: 20}}><b>Consumiendo Servicio Countries con Rect:&emsp;</b>
          (https://restcountries.com/v3.1/lang/spanish)
        </p>

        <div style={{width: 895, height: 780, overflow: "auto"}} >
            <Perfil />
        </div>

                 
    </div>
   );
}

export default App;
