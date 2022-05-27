import { test, expect } from "vitest";
import { checkDiagonal, Player } from "../lib/game-logic";

const playerOne: Player = { id: 0, name: "Alfred" };
const playerTwo: Player = { id: 1, name: "Jason" };

test("check diagonal 0, diagonal 0 complete", () => {
  const squares = [
    playerOne,
    null,
    playerTwo,
    null,
    playerOne,
    playerTwo,
    null,
    null,
    playerOne,
  ];

  expect(checkDiagonal(squares, 0, playerOne)).toBe(true);
});

test("check diagonal 0, diagonal 0 incomplete", () => {
  const squares = [
    playerOne,
    null,
    playerTwo,
    null,
    playerOne,
    playerTwo,
    null,
    playerOne,
    null,
  ];

  expect(checkDiagonal(squares, 0, playerOne)).toBe(false);
});

test("check diagonal 0, all null", () => {
  const squares = [null, null, null, null, null, null, null, null, null];

  expect(checkDiagonal(squares, 0, playerOne)).toBe(false);
});

test("check diagonal 1, diagonal 1 complete", () => {
  const squares = [
    playerTwo,
    null,
    playerOne,
    playerTwo,
    playerOne,
    playerTwo,
    playerOne,
    null,
    null,
  ];

  expect(checkDiagonal(squares, 1, playerOne)).toBe(true);
});

test("check diagonal 1, diagonal 0 incomplete", () => {
  const squares = [
    playerTwo,
    null,
    playerOne,
    playerTwo,
    playerOne,
    playerOne,
    playerTwo,
    null,
    null,
  ];

  expect(checkDiagonal(squares, 1, playerOne)).toBe(false);
});

test("check diagonal 1, all null", () => {
  const squares = [null, null, null, null, null, null, null, null, null];

  expect(checkDiagonal(squares, 1, playerOne)).toBe(false);
});
