// Chiste.js

import React from "react";
 
import Boton from "./Boton";
import './Chiste.css';

const Chiste = () => {
    const [Chiste, setChiste] = React.useState("");

    const obtenerAPI = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setChiste(data.joke));
    };

    return (
        <div className="chiste">
            <Boton llamarAPI={obtenerAPI} /> 
            <p>{Chiste}</p>    
        </div>
    );
}

export default Chiste;
