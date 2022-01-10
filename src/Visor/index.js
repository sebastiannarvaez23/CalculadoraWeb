import React from "react";
import "./Visor.css";

function Visor({ valueInput, setValueInput }) {

    const onChangeNumber = (event) => {
        console.log(event.target.value);
        setValueInput(event.target.value);
    };

    return (
        <input
            className="visor"
            placeholder="Intente alguna operación"
            value={valueInput}
            onChange={onChangeNumber}
            readOnly
        />
    );
}

export { Visor };