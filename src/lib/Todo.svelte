<script lang="ts">
  import type { Todo } from "./Todo";
  import { todos } from "../stores";

  export let todo: Todo;

  let showEditor = false;
  let savedTitle;

  function handleRemove() {
    $todos = $todos.filter((v) => v.id !== todo.id);
  }

  function startEdit(element) {
    element.focus();
    element.select();
    savedTitle = todo.title;
  }

  function handleKeyDown(event) {
    console.log(typeof event.key);

    if (showEditor && event.key === "Escape") {
      todo.title = savedTitle;
      showEditor = false;
    }
  }
</script>

<svelte:window on:keydown={handleKeyDown} />

<section>
  {#if showEditor}
    <form
      on:submit|preventDefault={() => {
        showEditor = false;
      }}
    >
      <input
        type="text"
        id="edit_title"
        bind:value={todo.title}
        use:startEdit
      />
      <button type="submit">✅</button>
      <button
        on:click={() => {
          todo.title = savedTitle;
        }}
        type="submit">❎</button
      >
    </form>
  {:else}
    <h3
      on:dblclick={() => {
        showEditor = true;
      }}
    >
      {todo.title}
    </h3>
    <button
      on:click={() => {
        showEditor = true;
      }}>✏️</button
    >
    <button on:click={handleRemove}>🗑️</button>
  {/if}
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

  form {
    display: flex;
    gap: 1rem;
    width: 100%;
  }

  input {
    margin: 0;
    margin-right: auto;
    padding: 0 0.5rem;
    font-size: 1.6rem;
    width: 100%;
    box-sizing: border-box;
  }
</style>
