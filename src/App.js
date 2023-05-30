import './App.css';

function App() {

  const carArray = ["Mercedes", "LandRover", "RangeRover"]

  const carItems = carArray.map(car => <li key={car}>{car}</li> )


  function addItem(){
    const newCarItem = `Car ${carArray.length + 1}`
    carArray.push(newCarItem)
    console.log(carArray)
  }
  return (
    <div className="App">
      <button onClick={addItem}>Add Item</button>
      {carItems}
    </div>
  );
}

export default App;
