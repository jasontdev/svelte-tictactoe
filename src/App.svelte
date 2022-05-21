<script lang="ts">
  import Board from "./lib/Board.svelte";
</script>

<div class="layout">
  <main class="content">
    <h1 class="title">Svelte Tic Tac Toe</h1>
    <Board />
  </main>
</div>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .title {
    text-align: center;
  }

  .layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    width: 100hw;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: min(100%, 700px);
  }
</style>
