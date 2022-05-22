<script>
  import { createEventDispatcher } from "svelte";
  export let value = "";
  const dispatch = createEventDispatcher();
</script>

<div class="box" on:click={() => dispatch('click')}>{value}</div>

<style>
  .box {
    border-style: solid;
    width: 150px;
    height: 150px;
    font-size: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
