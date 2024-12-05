import React from "react";
import styled from "styled-components";

function Rules() {
  return (
    <RulesContainer>
      <h3>How to play dice game!</h3>
      <div className="rules">
        <p>Select any number </p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p> if you get wrong guess then 2 point will be dedcuted</p>
      </div>
    </RulesContainer>
  );
}

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  color: black;
  padding: 20px;
  margin-top: 24px;
  margin-bottom: 40px;
  .rules {
    margin-top: 10px;
  }
`;
export default Rules;
