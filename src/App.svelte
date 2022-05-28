<script lang="ts">
  import Board from "./lib/Board.svelte";
  import { checkForWinner, Player } from "./lib/game-logic";
  import { score } from "./lib/stores";

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
    name: "Svelte",
    gamesWon: 0,
  };

  let playerTwo = {
    id: 1,
    name: "React",
    gamesWon: 0,
  };
  let currentPlayer = playerOne;
  let winner: Player | null = null;
  let boardFull = false;

  score.subscribe((currentScores) => {
    playerOne.gamesWon = currentScores[0];
    playerTwo.gamesWon = currentScores[1];
  });

  function handleClick(event: CustomEvent<{ square: number }>) {
    if (!winner) {
      if (squares[event.detail.square] === null) {
        squares[event.detail.square] = currentPlayer;

        const result = checkForWinner(squares, currentPlayer);
        if (
          result &&
          result.hasWinner &&
          result.winner.id === currentPlayer.id
        ) {
          winner = currentPlayer;
          score.update((currentScore) => {
            let updatedScore = [...currentScore];
            updatedScore[winner.id] = currentScore[winner.id] + 1;
            return updatedScore;
          });
        } else {
          if (squares.filter((square) => square === null).length === 0) {
            boardFull = true;
          } else {
            currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
          }
        }
      }
    }
  }

  function resetGame() {
    squares = squares.map((_) => null);
    winner = null;
    boardFull = false;
  }
</script>

<div class="layout">
  <main class="content">
    <h1 class="title">Svelte Tic Tac Toe</h1>
    <div class="scores">
      <div>{playerOne.name}: {playerOne.gamesWon}</div>
      <div>{playerTwo.name}: {playerTwo.gamesWon}</div>
    </div>
    <Board {squares} on:squareClicked={handleClick} />
    {#if winner}
      <h2>Congratulations, {winner.name}</h2>
    {/if}
    {#if boardFull}
      <h2>Game over</h2>
    {/if}
    {#if winner || boardFull}
      <button on:click={resetGame}>Play another round</button>
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

  .scores {
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-size: larger;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  button {
    background-color: #ff3e00;
    color: white;
    padding: 0.25rem 1rem 0.25rem 1rem;
    border-color: #ff3e00;
    border-style: solid;
    border-radius: 5px;
    border-width: 2px;
    font-size: x-large;
    font-weight: bold;
  }
</style>
