<script lang="ts">
  import type { Player } from "./game-logic";
  export let winner: Player;
  export let resetHandler: () => void;
</script>

<div class="backdrop">
  {#if winner}
    <div class="result" style="color: {winner.color};">
      Congratulations, {winner.name}
    </div>
  {:else}
    <div class="result">It's a draw</div>
  {/if}
  <button on:click={() => resetHandler()}>Play another round</button>
</div>

<style>
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

  .backdrop {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: background-color 5s;
    animation: fade 1s 0s 1 normal forwards;
  }

  @keyframes fade {
    from { 
      background-color: transparent; 
    }

    to { 
      background-color: #000000a0;
    }
  }
</style>
