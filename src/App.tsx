import ListGroup from "./components/ListGroup";

function App() {
  let items = ['New York', 'San Fransisco', 'Tokyo', 'London', 'Paris'];

  const handleSelecteditem = (item: string) => {
    console.log(item);
  }
  
  return 
    <div>
      <ListGroup items={items} heading="cities" onSelectedItem={handleSelecteditem} />
    </div>
}

export default App;