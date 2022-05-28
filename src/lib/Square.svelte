<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import svelteLogo from "../assets/svelte-logo.svg";
  import reactLogo from "../assets/react-logo.svg";
  export let player = null;
  export let key: number;
  const dispatch = createEventDispatcher();
</script>

<div class={player === null ? "empty" : "occupied"} on:click={() => dispatch("squareClicked", { square: key })}>
  {#if player}
    {#if player.id == 0}
      <img src={svelteLogo} alt="Svelte logo" />
    {/if}
    {#if player.id == 1}
      <img src={reactLogo} alt="React logo" />
    {/if}
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
