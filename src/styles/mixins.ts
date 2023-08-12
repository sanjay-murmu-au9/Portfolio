// mixins.ts
import { css } from "styled-components";
import { ContrastColor } from "./variables";

export const BodyContainer = css`
  width: 85vw;
  max-width: 1200px;
`;

export const ContrastButton = css`
  padding: 10px 30px;
  color: #fff;
  background-color: ${ContrastColor};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: fit-content;
`;
