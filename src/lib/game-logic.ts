type Player = {
  id: number;
  name: string;
};

type Result = {
  hasWinner: boolean;
  winner?: Player;
};

function checkRow(squares: (Player | null)[], row: number, player: Player) {
  let matches = 0;
  for (let i = 0; i < 3; ++i) {
    if (
      squares[row * 3 + i] !== null &&
      squares[row * 3 + i].id === player.id
    ) {
      matches++;
    }
  }

  return matches === 3;
}

function checkColumn(
  squares: (Player | null)[],
  column: number,
  player: Player
) {
  let matches = 0;
  for (let i = 0; i < 3; ++i) {
    if (
      squares[i * 3 + column] !== null &&
      squares[i * 3 + column].id === player.id
    ) {
      matches++;
    }
  }
  return matches === 3;
}

function checkDiagonal(
  squares: (Player | null)[],
  diagonal: number,
  player: Player
): boolean {
  // squares in diagonal 0 run left to right, top to bottom
  const diagonalSquares = [
    [0, 4, 8],
    [2, 4, 6],
  ];

  let matches = 0;
  for (let i = 0; i < 3; ++i) {
    if (
      squares[diagonalSquares[diagonal][i]] &&
      squares[diagonalSquares[diagonal][i]].id === player.id
    ) {
      matches++;
    }
  }

  return matches === 3;
}

function checkForWinner(squares: (Player | null)[], player: Player): Result {
  for (let i = 0; i < 3; i++) {
    if (checkRow(squares, i, player)) {
      return { hasWinner: true, winner: player };
    }

    if (checkColumn(squares, i, player)) {
      return { hasWinner: true, winner: player };
    }
  }

  if (checkDiagonal(squares, 0, player) || checkDiagonal(squares, 1, player)) {
    return { hasWinner: true, winner: player };
  }

  return { hasWinner: false };
}

export { checkForWinner, checkRow, checkColumn, checkDiagonal };
export type { Player };
