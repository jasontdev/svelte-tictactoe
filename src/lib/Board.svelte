<script lang="ts">
  import Square from "./Square.svelte";
  export let squares: string[];
</script>

<div class="board">
  {#each squares as square, index}
    <Square key={index} value={square} on:squareClicked />
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
