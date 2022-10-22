<script lang="ts">
  import { todos } from "../stores";
  import { Todo } from "./Todo";
  export let title = "";

  function handleAddTodo(event: SubmitEvent) {
    $todos = [...$todos, new Todo(title)];
  }
</script>

<form on:submit|preventDefault={handleAddTodo}>
  <input type="text" bind:value={title} name="new-todo" id="new-todo" />
  <label for="new-todo">add todo</label>
  <button type="submit"> add Todo</button>
</form>

<style>
  label {
    display: none;
  }
</style>
