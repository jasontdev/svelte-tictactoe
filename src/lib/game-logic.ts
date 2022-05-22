function checkForWinner(squares: string[], player: string): boolean {
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

  if (checkRow(0) || checkRow(1) || checkRow(2)) {
    return true;
  }

  if (checkColumn(0) || checkColumn(1) || checkColumn(2)) {
    return true;
  }
  return checkDiagonals();
}

export {checkForWinner};