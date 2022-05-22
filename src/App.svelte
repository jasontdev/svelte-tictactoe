<script lang="ts">
  import Board from "./lib/Board.svelte";
  let squares = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";

  function handleClick(event: CustomEvent<{ square: number }>) {
    if (squares[event.detail.square] === "") {
      if (!checkForWinner("X") && !checkForWinner("0")) {
        squares[event.detail.square] = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  }

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
</script>

<div class="layout">
  <main class="content">
    <h1 class="title">Svelte Tic Tac Toe</h1>
    <Board {squares} on:squareClicked={handleClick} />
  </main>
</div>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .title {
    text-align: center;
  }

  .layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    width: 100hw;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: min(100%, 700px);
  }
</style>
