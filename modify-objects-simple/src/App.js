import { useState } from 'react';
import SubmitColor from './SubmitColor'


function App() {

 const [fruit, setFruit] = useState({
    color: 'blue',
    name: 'dragonfruit'
 })

 const changeColor = (color) => {
  const updatedFruit = {
    ...fruit, color: color
  }

  setFruit(updatedFruit);
 }


  return (
    <div>
    <p>Color: {fruit.color} </p>
    <p>Name: {fruit.name} </p>

    <SubmitColor newColor ={changeColor}/>
    </div>
  );
}

export default App;
