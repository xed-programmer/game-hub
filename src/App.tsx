import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible,setAlertVisible] = useState(false);
  return (
    <>
      {alertVisible===true && <Alert onClose={()=> setAlertVisible(false)}>My ALert</Alert>}
      <Button color="danger" onClick={() => setAlertVisible(true)}>
        clicked
      </Button>
    </>
  )
}

export default App;