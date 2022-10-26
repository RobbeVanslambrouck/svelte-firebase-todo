<script lang="ts">
  import AddTodo from "./lib/AddTodo.svelte";
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import Todo from "./lib/Todo.svelte";
  import { todos } from "./stores";

  let title = "";
</script>

<div class="app">
  <Header />
  <main>
    <AddTodo bind:title />
    <div class="todos">
      {#each $todos as todo, index}
        <Todo {todo} />
      {/each}
    </div>
  </main>
  <Footer />
</div>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    padding: 5rem;
  }

  .todos {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem auto;
  }
</style>
