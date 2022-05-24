<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let value = "";
  export let key: number;
  const dispatch = createEventDispatcher();
</script>

<div class="box" on:click={() => dispatch("squareClicked", { square: key })}>
  {value}
</div>

<style>
  .box {
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
</style>
