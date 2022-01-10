import React from "react";
import "./Botones.css";

function Botones(props) {
    return (
        <div className="contain-botones">
            {props.children}
        </div>
    );
}

export { Botones };