import React from "react";
import { styled } from "styled-components";

export interface ButtonProps {
  label: string;
}
const ButtonStyle = styled.button`
  padding: 0.5rem 1rem;
  background: white;
  border: 1px solid black;
  outline: none;
`
const Button = (props: ButtonProps) => {
  return <ButtonStyle>{props.label}</ButtonStyle>;
};
export default Button;