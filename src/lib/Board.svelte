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

<div class="board">
  {#each squares as square, index}
    <Square value={square} on:click={() => handleClick(index)} />
  {/each}
</div>

<style>
  .board {
    display: flex;
    flex-wrap: wrap;
    width: 450px;
  }
</style>
