
import './App.css';
import React from 'react';
import { Visor } from './Visor';
import { Botones } from './Botones';
import { Calculadora } from './Calculadora';
import { Numeros } from './Numeros';
import { Operadores } from './Operadores';
import { Encabezado } from './Encabezado';

function App() {

  const [valueInput, setValueInput] = React.useState('');
  const [primerNumero, setPrimerNumero] = React.useState('');
  const [operacion, setOperacion] = React.useState('');

  const limpiarCache = () => {
    setValueInput('');
    setPrimerNumero('');
  }

  const limpiarInput = () => {
    setValueInput('');
  };

  const operar = () => {
    if (operacion === '+') {
      setValueInput(Number(primerNumero) + Number(valueInput));
    } else if (operacion === '-') {
      setValueInput(Number(primerNumero) - Number(valueInput));
    } else if (operacion === 'x') {
      setValueInput(Number(primerNumero) * Number(valueInput));
    } else if (operacion === '/') {
      setValueInput(Number(primerNumero) / Number(valueInput));
    }
  };

  const capturarPrimerNumero = (op) => {
    if (
      op === '+' ||
      op === '-' ||
      op === 'x' ||
      op === '/'
    ) {
      setPrimerNumero((valueInput).toString());
      setOperacion(op);
    };

    limpiarInput();
  };

  return (
    <React.Fragment>
      <Calculadora>
        <Encabezado />
        <Visor
          valueInput={valueInput}
          setValueInput={setValueInput} />
        <Botones>
          <Numeros
            valueInput={valueInput}
            setValueInput={setValueInput} />
          <Operadores
            limpiarCache={limpiarCache}
            limpiarInput={limpiarInput}
            operar={operar}
            capturarPrimerNumero={capturarPrimerNumero} />
        </Botones>
      </Calculadora>
    </React.Fragment>
  );
}

export default App;
