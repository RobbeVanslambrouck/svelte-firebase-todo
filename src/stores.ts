import { readable, writable } from "svelte/store";
import { auth, onSignInOrOut } from "./firebase";
import type { Todo } from "./lib/Todo";

export const user = readable(auth.currentUser, function start(set) {
  onSignInOrOut((user) => {
    set(user);
  });
});

export const todos = writable<Todo[]>([]);
