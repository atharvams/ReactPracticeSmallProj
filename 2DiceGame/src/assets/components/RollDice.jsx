import React, { useState } from "react";
import styled from "styled-components";
import { Button, OutlinedButton } from "./styledUtil";
import Rules from "./Rules";

function RollDice({ setScore, currentDice, randomNumber }) {
  

  return (
    <DiceRollContainer>
      <div className="dice" onClick={() => randomNumber()}>
        <img src={`images/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on dice to roll</p>
      
      
    </DiceRollContainer>
  );
}

const DiceRollContainer = styled.div`
  display: flex;
  margin-top: 48px;
  align-items: center;
  flex-direction: column;

  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }

  
`;

export default RollDice;
