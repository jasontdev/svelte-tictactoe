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
    if (squares[i * 3 + column] !== null && squares[i * 3 + column].id === player.id) {
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

  return { hasWinner: false };
}

export { checkForWinner, checkRow, checkColumn };
export type { Player };
