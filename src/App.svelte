<script lang="ts">
  import { onDbchange } from "./firebase";
  import AddTodo from "./components/AddTodo.svelte";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Todo from "./components/Todo.svelte";
  import { todos, user } from "./stores";

  let title = "";
</script>

<div class="app">
  <Header />
  <main>
    {#if $user}
      <AddTodo bind:title />
      <div class="todos">
        {#await $todos then}
          {#each $todos as todo, index}
            <Todo {todo} />
          {/each}
        {/await}
      </div>
    {:else}
      <p>Sign in and go to your todos</p>
    {/if}
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
