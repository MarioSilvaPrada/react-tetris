import React from "react";

import { styledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => (
  <styledCell type={type} color={TETROMINOS[type].color}>
    {type}
  </styledCell>
);

export default Cell;
