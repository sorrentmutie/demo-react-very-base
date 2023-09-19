import React from "react";
import { Display } from "./Display";

export function Button(){
    const [counter, setCounter] = React.useState(5);  
    const handleClick = () => setCounter(counter + 2);
    return ( 
      <div>
        <button 
          onClick={handleClick}
          className="btn btn-success">{counter}</button>
        <Display message={counter}/>
      </div>
    )
  }
  
export function Button2(props: any){
     return (
      <button onClick={props.aumentaContatore}>INCREMENTA</button>
     )
  }