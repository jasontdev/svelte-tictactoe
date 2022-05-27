import { checkRow, Player } from "../lib/game-logic";
import { expect, test } from "vitest";

const playerOne: Player = { id: 0, name: "Alfred" };
const playerTwo: Player = { id: 1, name: "Jason" };

test("check row all present", () => {
  const squares: (Player | null)[] = [
    playerOne,
    playerOne,
    playerOne,
    null,
    playerTwo,
    null,
    playerTwo,
    null,
    null,
  ];

  expect(checkRow(squares, 0, playerOne)).toBe(true);
});

test("check row, 2nd row present", () => {
  const squares: (Player | null)[] = [
    playerOne,
    null,
    playerOne,
    playerTwo,
    playerTwo,
    playerTwo,
    null,
    playerOne,
    null,
  ];

  expect(checkRow(squares, 1, playerTwo)).toBe(true);
});

test("check row, 3rd row present", () => {
  const squares: (Player | null)[] = [
    playerTwo,
    null,
    null,
    null,
    playerTwo,
    null,
    playerOne,
    playerOne,
    playerOne,
  ];

  expect(checkRow(squares, 2, playerOne)).toBe(true);
});

test("check row none present", () => {
  const squares: (Player | null)[] = [
    playerOne,
    playerTwo,
    null,
    null,
    playerOne,
    null,
    null,
    playerTwo,
    null,
  ];
  expect(checkRow(squares, 0, playerOne)).toBe(false);
});

test("check row with full board, no rows", () => {
  const squares: (Player | null)[] = [
    playerOne,
    playerTwo,
    playerOne,
    playerOne,
    playerOne,
    playerTwo,
    playerTwo,
    playerTwo,
    playerOne,
  ];
  expect(checkRow(squares, 0, playerOne)).toBe(false);
});

test("check row with empty board", () => {
  const squares: (Player | null)[] = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];
  expect(checkRow(squares, 0, playerOne)).toBe(false);
});