import styled from "styled-components";
import LandingPage from "./assets/components/LandingPage";
import { useState } from "react";
import GamePage from "./assets/components/GamePage";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const togglePlayGame = () => {
    return setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <GamePage /> : <LandingPage toggle={togglePlayGame} />}
    </>
  );
}

export default App;
