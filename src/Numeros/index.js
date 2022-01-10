import React from "react";
import "./Numeros.css";

function Numeros({ valueInput, setValueInput }) {

    const setNumber = (num) => {
        setValueInput((valueInput)+num);
    }
    
    return (
        <div className="contain-numeros">
            <div><button 
            type="button"
            onClick={() => {setNumber('1')}}
            
            >1
            
            </button></div>
            <div><button 
            type="button"
             
            onClick={() => {setNumber('2')}}
            
            >2
            
            </button></div>
            <div><button 
            type="button"
             
            onClick={() => {setNumber('3')}}
            
            >3
            
            </button></div>
            <div><button 
            type="button"
             
            onClick={() => {setNumber('4')}}
            
            >4
            
            </button></div>
            <div><button 
            type="button"
             
            onClick={() => {setNumber('5')}}
            
            >5
            
            </button></div>
            <div><button 
            type="button"
             
            onClick={() => {setNumber('6')}}
            
            >6
            
            </button></div>
            <div><button 
            type="button"
             
            onClick={() => {setNumber('7')}}
            
            >7
            
            </button></div>
            <div><button 
            type="button"
             
            onClick={() => {setNumber('8')}}
            
            >8
            
            </button></div>
            <div><button 
            type="button"
             
            onClick={() => {setNumber('9')}}
            
            >9
            
            </button></div>
            <div></div>
            <div><button
            
            onClick={() => {setNumber('0')}}
            
            >0
            
            </button></div>
            <div></div>
        </div>
    );
}

export { Numeros };