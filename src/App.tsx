import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import ListGroup from "./components/ListGroup";

function App() {
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  })

  const handle = () =>{
    setPizza({...pizza, toppings:[...pizza.toppings,'Cheese']})
  };
  return (
    <>
    <ListGroup heading={pizza.name} items={pizza.toppings} onSelectItem={()=>console.log('clicked')}/>
    <Button onClick={handle}>Update</Button>
    </>
  )
}

export default App;