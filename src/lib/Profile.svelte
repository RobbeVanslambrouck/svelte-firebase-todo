<script lang="ts">
  import { user } from "../stores";
  import { signOut } from "../firebase";

  let dropdownDisplay = "none";

  function ToggleDropDown(): void {
    dropdownDisplay = dropdownDisplay === "none" ? "flex" : "none";
  }
</script>

<div class="dropdown">
  {#if $user}
    <button on:click={ToggleDropDown}>
      <img src={$user.photoURL} alt="user avatar" />
    </button>
    <div class="dropdown-content" style="display: {dropdownDisplay};">
      <span class="arrow-up" />
      <p>{$user.displayName}</p>
      <button on:click={signOut}>sign out</button>
    </div>
  {/if}
</div>

<style>
  .dropdown {
    font-size: 1.5rem;
    position: relative;
    display: flex;
  }

  .dropdown > button {
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    height: 3.4rem;
  }

  .dropdown-content {
    display: none;
    flex-direction: column;
    gap: 1rem;
    width: 10rem;
    position: absolute;
    right: 0;
    top: calc(100% + 1rem);
    background-color: #eee;
    padding: 1rem;
    z-index: 100;
    border-radius: 0.5rem;
  }

  .dropdown-content > span {
    position: absolute;
    right: 0.7rem;
    top: -1rem;
  }

  .arrow-up {
    width: 0;
    height: 0;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-bottom: 1rem solid #eee;
  }

  button {
    cursor: pointer;
  }

  img {
    width: 3.4rem;
    border-radius: 0.5rem;
  }
</style>
