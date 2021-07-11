import styled, { css } from "styled-components";

const color = "palevioletred";
export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${color};
  cursor: pointer;
  color: ${color};
  margin: 0 1em;
  padding: 0.25em 1em;
  display: block;
  &:hover {
    color: black;
  }
  transition: color 700ms ease;
  ${(props) =>
    css`
      font-size: ${props.fontSize}px;
    `};

  ${(props) =>
    props.primary &&
    css`
      background: ${color};
      color: white;
    `}
`;
