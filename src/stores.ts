import { readable } from "svelte/store";
import { auth, onSignInOrOut } from "./firebase";

export const user = readable(auth.currentUser, function start(set) {
  onSignInOrOut((user) => {
    set(user);
  });
});
