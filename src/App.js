import { useState } from 'react';
import './App.css';


function App() {

  //using state to also update the List items of cars when the button is pressed.

  const [car, setCar] = useState(["Mercedes", "LandRover", "RangeRover"]);

  function addItem(){
    const newCarItem = `Car ${car.length + 1}`
    setCar(prevState => [...prevState, newCarItem])
    // carArray.push(newCarItem)
    // console.log(carArray)
  }

  // const carArray = ["Mercedes", "LandRover", "RangeRover"]

  const carItems = car.map(cars => <li className="list--item" key={cars}>{cars}</li> )



  return (
    <div className="App">
      <button className="form--button" onClick={addItem}>
      Add Item
      </button>
      {carItems}
    </div>
  );
}

export default App;
