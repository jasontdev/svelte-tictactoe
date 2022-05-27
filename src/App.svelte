<script lang="ts">
  import Board from "./lib/Board.svelte";
  import { checkForWinner, Player } from "./lib/game-logic";

  let squares: (Player | null)[] = [
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

  let playerOne = {
    id: 0,
    name: "Alfred",
  };

  let playerTwo = {
    id: 1,
    name: "Jason",
  };
  let currentPlayer = playerOne;
  let winner: Player | null = null;

  function handleClick(event: CustomEvent<{ square: number }>) {
    if (!winner) {
      if (squares[event.detail.square] === null) {
        squares[event.detail.square] = currentPlayer;
        const result = checkForWinner(squares, currentPlayer);

        if (result && result.hasWinner && result.winner.id === currentPlayer.id) {
          winner = currentPlayer;
        } else {
          console.log("Swapping players");
          currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
        }
      }
    }
  }
</script>

<div class="layout">
  <main class="content">
    <h1 class="title">Svelte Tic Tac Toe</h1>
    <Board {squares} on:squareClicked={handleClick} />
    {#if winner}
      <h2>Congratulations, {winner.name}</h2>
    {/if}
  </main>
</div>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #ff3e00;
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
