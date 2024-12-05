import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import Rules from "./Rules";
import { OutlinedButton, Button } from "./styledUtil";

function GamePage() {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const randomNumber = () => {
    let randomNum = Math.floor(Math.random() * 6 + 1);
    setCurrentDice((prev) => randomNum);

    if (!selectedNumber) {
      setError("You have not selected anything!");
      return;
    }
    setError("");

    if (selectedNumber === randomNum) {
      setScore((prev) => prev + selectedNumber);
    } else {
      setScore((prev) => prev - selectedNumber);
    }

    setSelectedNumber(undefined);
  };

  const resetGame = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="topSection">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <div>
        <RollDice
          setScore={setScore}
          currentDice={currentDice}
          randomNumber={randomNumber}
        ></RollDice>
      </div>
      <div className="btns">
        <OutlinedButton onClick={resetGame}>Reset</OutlinedButton>
        <Button onClick={()=>setShowRules((prev) => !prev)}>{showRules ? "hide" : "show"} rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding-top: 60px;
  .topSection {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
  }
  .btns {
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
`;

export default GamePage;
