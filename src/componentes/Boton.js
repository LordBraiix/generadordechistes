// Boton.js

import React from "react";
import './Boton.css'

const Boton = (props) => {
    return <button onClick={props.llamarAPI}>
        Haz clic para generar un chiste.
    </button>;
}

// Exportar Componente Boton
export default Boton;
