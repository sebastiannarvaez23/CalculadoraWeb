import React from "react";
import logo from '../logo.svg';
import "./Calculadora.css"

function Calculadora(props) {
    return (
        <div className="panel-calcu">
            <div><img src={logo} className="App-logo" alt="logo" /></div>
            {props.children}
        </div>
    );
}

export { Calculadora };