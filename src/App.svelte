<script lang="ts">
  import Board from "./lib/Board.svelte";
  import { checkForWinner, Player } from "./lib/game-logic";
  import { score } from "./lib/stores";
  import orangeSvelteLogo from "./assets/svelte-logo.svg";
  import blueSvelteLogo from "./assets/svelte-logo-blue.svg";

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
    name: "Player 1",
    icon: orangeSvelteLogo,
    color: "#ff3e00",
    gamesWon: 0,
  };

  let playerTwo = {
    id: 1,
    name: "Player 2",
    icon: blueSvelteLogo,
    color: "#40b3ff",
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
          }
        }
        // swap players
        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
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
    <h1 class="title">SVELTE TIC TAC TOE</h1>
    <div class="scores">
      <div class="score" style="color: {playerOne.color}">{playerOne.name}: {playerOne.gamesWon}</div>
      <div class="score" style="color: {playerTwo.color}">{playerTwo.name}: {playerTwo.gamesWon}</div>
    </div>
    <Board {squares} on:squareClicked={handleClick} />
  </main>
  <div class="post-game">
    {#if winner}
      <div class="result" style="color: {winner.color};">Congratulations, {winner.name}</div>
    {/if}
    {#if boardFull}
      <div class="result">It's a draw</div>
    {/if}
    {#if winner || boardFull}
      <button on:click={resetGame}>Play another round</button>
    {/if}
  </div>
</div>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #676778;
    background-color: #e2ebf1;
  }

  .title {
    font-size: xx-large;
    font-weight: 500;
    text-align: center;
    color: #4a4a55;
  }

  .layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    height: 100vh;
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

  .score {
    border-style: solid;
    border-radius: 10px;
    padding: 0.1rem 0.5rem 0.1rem 0.5rem;
    background-color: whitesmoke;
  }

  .post-game {
    width: min(100%, 700px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .result {
    font-size: x-large;
    font-weight: bold;
    background-color: whitesmoke;
    border-style: solid;
    border-radius: 10px;
    padding: 0.5rem 2rem 0.5rem 2rem;
  }

  button {
    background-color: #ff3e00;
    color: whitesmoke;
    padding: 0.25rem 1rem 0.25rem 1rem;
    border-color: #ff3e00;
    border-style: solid;
    border-radius: 10px;
    border-width: 2px;
    font-size: x-large;
    font-weight: bold;
  }

  button:hover {
    transform: scale(1.05);
  }
</style>
