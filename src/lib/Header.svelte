<script lang="ts">
  import { signIn } from "../firebase";
  import { user } from "../stores";
  import Profile from "./Profile.svelte";
</script>

<header>
  <a href="/"><h1>My Todo's</h1></a>
  <div id="profile">
    {#if $user}
      <Profile />
    {:else}
      <button on:click={signIn}>Sign in with google</button>
    {/if}
  </div>
</header>

<style>
  header {
    background-color: #fff;
    box-shadow: 0 4px 4px 0 rgba(89, 89, 89, 0.25);
    height: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 3rem;
  }
  a {
    text-decoration: none;
    color: inherit;
    margin: 0 2rem;
  }

  a:hover {
    text-decoration: underline;
    color: #ff3e00;
  }

  #profile {
    /* justify-content: flex-end; */
    margin: 0 2rem;
  }
</style>
