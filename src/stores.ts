import { derived, readable, writable } from "svelte/store";
import { auth, onDbchange, onSignInOrOut } from "./firebase";
import type { Todo } from "./lib/Todo";

export const user = readable(auth.currentUser, function start(set) {
  onSignInOrOut((user) => {
    set(user);
  });
});

export const todos = derived(
  user,
  ($user, set) => {
    if (!$user) {
      return;
    }

    onDbchange($user, (data) => {
      if (!data) {
        return;
      }
      set(data);
    });
  },
  []
);
