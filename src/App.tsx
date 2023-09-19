import React from 'react';
import './App.css';

import { Saluto } from './components/Hello';
import { Menu } from './components/Menu';
import { Button2 } from './components/Buttonts';
import { Display } from './components/Display';

function App() {
  const [counter, setCounter] = React.useState(0);  
  const handleClick = () => setCounter(counter + 1);

  return (
    <div className="App">    
      <Menu/>
      <Hello/>
      <Button2 aumentaContatore={handleClick}/>
      <Display message={counter}/>
      <Saluto/>
      <Footer/>
    </div>
  );
}

function Hello(){
  return (
     <h3>Hello, Hello</h3>
  );
}



function Footer(){
  return(
    <div>Footer</div>
  )
}










export default App;
