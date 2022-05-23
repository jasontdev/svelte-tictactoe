function checkForWinner(squares: string[], player: string): string {
  function checkRow(n: number): boolean {
    return (
      squares[n * 3] === player &&
      squares[n * 3 + 1] === player &&
      squares[n * 3 + 2] === player
    );
  }

  function checkColumn(n: number): boolean {
    return (
      squares[n] === player &&
      squares[n + 3] === player &&
      squares[n + 6] === player
    );
  }

  function checkDiagonals(): boolean {
    if (
      squares[0] === player &&
      squares[4] === player &&
      squares[8] === player
    ) {
      return true;
    }

    if (
      squares[2] === player &&
      squares[4] === player &&
      squares[7] === player
    ) {
      return true;
    }

    return false;
  }

  for (let i = 0; i < 3; ++i) {
    if (checkRow(i)) {
      return player;
    }

    if (checkColumn(i)) {
      return player;
    }
  }

  if (checkDiagonals()) {
    return player;
  }

  return "";
}

export { checkForWinner };
