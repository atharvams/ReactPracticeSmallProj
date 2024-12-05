import React, { useState } from "react";
import styled from "styled-components";

function NumberSelector({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) {
  const nums = [1, 2, 3, 4, 5, 6];

  const selectedNumberHandler = (value) => {
    setError("");
    setSelectedNumber(value);
  };

  return (
    <NumberSelectors>
      <h6>{error}</h6>
      <div className="numbersBoxes">
        {nums.map((value, index) => {
          return (
            <Box
              isSelect={value === selectedNumber}
              key={value}
              onClick={(e) => selectedNumberHandler(value)}
            >
              {value}
            </Box>
          );
        })}
      </div>
      <p>Select Numbers</p>
    </NumberSelectors>
  );
}

const Box = styled.div`
  height: 72px;
  width: 72px;
  display: grid;
  border: 1px solid black;
  place-items: center;
  font-size: 24px;
  font-weight: 600;
  background-color: ${(props) => (props.isSelect ? "black" : "white")};
  color: ${(props) => (props.isSelect ? "white" : "black")};
`;

const NumberSelectors = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  h6 {
    font-size: 16px;
    color: red;
  }
  .numbersBoxes {
    display: flex;
    gap: 24px;
  }
  p {
    margin-top: 30px;
    font-size: 24px;
    font-weight: 600;
  }
`;

export default NumberSelector;
