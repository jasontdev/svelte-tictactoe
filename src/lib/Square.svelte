<script>
  export let value = "";
  export let onClick;
</script>

<div class="box" on:click={onClick}>{value}</div>

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
