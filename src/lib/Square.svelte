<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import svelteLogo from "../assets/svelte-logo.svg";

  export let player = null;
  export let key: number;
  const dispatch = createEventDispatcher();
</script>

<div
  class="square"
  class:empty={player === null}
  on:click={() => dispatch("squareClicked", { square: key })}
>
  {#if player}
    <img src={svelteLogo} alt={`${player.name} logo`} />
  {/if}
</div>

<style>
  .square {
    box-sizing: border-box;
    width: 110px;
    height: 110px;
    font-size: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .empty {
    border-style: solid;
    border-radius: 10px;
  }

  .empty:hover {
    transform: scale(1.05);
    border-color: dodgerblue;
    transition-duration: 0.5s;
  }
</style>
