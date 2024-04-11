import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
  <>
    <Button color="danger" onClick={()=>console.log('Clicked')}>
      Click Me
    </Button>
  </>
  )
}

export default App;