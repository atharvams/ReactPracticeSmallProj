import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  gap: 10px;
  width: 220px;
  height: 44px;
  background-color: black;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.3s background ease-in;
  cursor: pointer;

  &:hover {
    color: black;
    border: 1px solid black;
    background-color: transparent;
    transition: 0.3s background ease-in;
  }
`;

export const OutlinedButton = styled(Button)`
  color: black;
  background-color: transparent;
  border: 1px solid black;
  &:hover {
    color: white;
    border: 1px solid transparent;
    background-color: black;
  }
`;
