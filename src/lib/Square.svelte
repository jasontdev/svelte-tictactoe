<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let player = null;
  export let key: number;
  const dispatch = createEventDispatcher();
</script>

<div
  class={player === null ? "empty" : "occupied"}
  on:click={() => dispatch("squareClicked", { square: key })}
>
  {#if player}
    <img src={player.logo} alt={player.logoAlt} />
  {/if}
</div>

<style>
  .empty {
    box-sizing: border-box;
    border-style: solid;
    border-radius: 10px;
    width: 110px;
    height: 110px;
    font-size: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .occupied {
    box-sizing: border-box;
    width: 110px;
    height: 110px;
    font-size: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
