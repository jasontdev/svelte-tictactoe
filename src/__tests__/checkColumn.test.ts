import { checkColumn } from "../lib/game-logic";
import type { Player } from "../lib/game-logic";
import { expect, test } from "vitest";

const playerOne: Player = { id: 0, name: "Alfred" };
const playerTwo: Player = { id: 1, name: "Jason" };

test("check column, all squares null", () => {
  const squares = [null, null, null, null, null, null, null, null, null];
  expect(checkColumn(squares, 0, playerOne)).toBe(false);
});

test("check column, first column complete", () => {
  const squares = [
    playerOne,
    playerTwo,
    null,
    playerOne,
    playerTwo,
    null,
    playerOne,
    null,
    null,
  ];
  expect(checkColumn(squares, 0, playerOne)).toBe(true);
});

test("check column, board full, no column complete", () => {
  const squares = [
    playerOne,
    playerTwo,
    playerTwo,
    playerOne,
    playerTwo,
    playerOne,
    playerTwo,
    playerOne,
    playerOne,
  ];
  expect(checkColumn(squares, 0, playerOne)).toBe(false);
});
