<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Todo } from "./Todo";

  export let todo: Todo;

  const dispatch = createEventDispatcher();

  function handleRemove() {
    dispatch("clickRemove");
  }

  function handleEdit() {
    dispatch("clickEdit");
  }
</script>

<section>
  <h3>{todo.title}</h3>
  <button on:click={handleEdit}>✏️</button>
  <button on:click={handleRemove}>🗑️</button>
</section>

<style>
  section {
    display: flex;
    gap: 1rem;
    font-size: 1.4rem;
    align-items: center;
    background-color: #eee;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid black;
    max-width: 25rem;
  }

  h3 {
    margin-right: auto;
    font-size: 2rem;
    text-transform: capitalize;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  button {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
  }
</style>
