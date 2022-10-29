<script lang="ts">
  import { todos } from "../stores";
  import { Todo } from "../lib/Todo";
  import { addTodoToDb } from "../firebase";
  export let title = "";

  function handleAddTodo(event: SubmitEvent) {
    const todo = new Todo(title);
    addTodoToDb(todo);
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
