<script lang="ts">
import type { Player } from "./game-logic";

  import Square from "./Square.svelte";
  export let squares: Player[];
</script>

<div class="board">
  {#each squares as square, index}
    <Square key={index} player={square} on:squareClicked />
  {/each}
</div>

<style>
  .board {
    display: flex;
    flex-wrap: wrap;
    width: 360px;
    height: 360px;
    gap: 15px;
  }
</style>
