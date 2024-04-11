import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";

function App() {
  
  return (
    <>
      <Like onClick={() => console.log('clicked')} />
    </>
  )
}

export default App;