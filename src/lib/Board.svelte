<script lang="ts">
  import Square from "./Square.svelte";
  export let squares = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";

  function checkForWinner(player: string): boolean {
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

  function handleClick(n: number) {
    if (squares[n] === "") {
      if (!checkForWinner("X") && !checkForWinner("0")) {
        squares[n] = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  }
</script>

<div>
  <div class="row">
    <Square value={squares[0]} onClick={() => handleClick(0)} />
    <Square value={squares[1]} onClick={() => handleClick(1)} />
    <Square value={squares[2]} onClick={() => handleClick(2)} />
  </div>
  <div class="row">
    <Square value={squares[3]} onClick={() => handleClick(3)} />
    <Square value={squares[4]} onClick={() => handleClick(4)} />
    <Square value={squares[5]} onClick={() => handleClick(5)} />
  </div>
  <div class="row">
    <Square value={squares[6]} onClick={() => handleClick(6)} />
    <Square value={squares[7]} onClick={() => handleClick(7)} />
    <Square value={squares[8]} onClick={() => handleClick(8)} />
  </div>
</div>

<style>
  .row {
    display: flex;
  }
</style>
