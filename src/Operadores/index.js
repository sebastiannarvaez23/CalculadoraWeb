import React from "react";
import "./Operadores.css";

function Operadores({ limpiarCache, operar, capturarPrimerNumero }) {
    return (
        <div className="contain-operadores">
            <div><button
                onClick={() => capturarPrimerNumero('+')}
            >+</button></div>
            <div><button
                onClick={() => capturarPrimerNumero('-')}
            >-</button></div>
            <div><button
                onClick={() => capturarPrimerNumero('x')}
            >x</button></div>
            <div><button
                onClick={() => capturarPrimerNumero('/')}
            >/</button></div>
            <div><button
                onClick={limpiarCache}
            >CE</button></div>
            <div><button
                onClick={operar}
            >=</button></div>
        </div>
    );
}

export { Operadores };