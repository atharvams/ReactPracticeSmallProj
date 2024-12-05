import React from "react";
import styled from "styled-components";
import { Button } from "./styledUtil";

function LandingPage({toggle}) {
  return (
    <Container>
      <div className="img">
        <img src="images/dices.png" alt="" />
      </div>
      <div className="content">
        <h1>Dice game</h1>
        <Button onClick={toggle}>Play Now!</Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;

  .content {
    display: flex;
    flex-direction: column;
    align-items: end;
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;



export default LandingPage;
