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
    width: 150px;
    height: 150px;
    font-size: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
