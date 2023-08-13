// mixins.ts
import { css } from "styled-components";
import { ContrastColor } from "./variables";

export const BodyContainer = css`
  width: 85vw;
  max-width: 1200px;

  @media only screen and (max-width: 768px) {
    width: 94vw;
  }
`;

export const ContrastButton = css`
  padding: 10px 30px;
  color: #fff;
  background-color: ${ContrastColor};
  border-radius: 5px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  width: fit-content;
`;
