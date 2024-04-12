import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player:{
      name:'John'
    }
  });

  const handle = () =>{
    const newGame = {...game, player: {...game.player, name:'Dexter'}};
    setGame(newGame);
  };
  return (
    <>
    <p>{game.player.name}</p>
    <Button onClick={handle}>Update</Button>
    </>
  )
}

export default App;