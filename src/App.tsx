import ListGroup from "./components/ListGroup";

function App(){
  let items = [
    'Caloocan', 'Malabon', 'Navotas'
];
  return <div><ListGroup items={items} heading="Cities"/></div>
}

export default App;