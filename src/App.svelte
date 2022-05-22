<script lang="ts">
  import Board from "./lib/Board.svelte";
  import {checkForWinner} from "./lib/game-logic";
  let squares = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";

  function handleClick(event: CustomEvent<{ square: number }>) {
    if (squares[event.detail.square] === "") {
      if (!checkForWinner(squares, "X") && !checkForWinner(squares, "0")) {
        squares[event.detail.square] = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
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
