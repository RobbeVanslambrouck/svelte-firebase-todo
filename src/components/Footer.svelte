<script lang="ts">
  import githubLogo from "../assets/github-icon.svg";
</script>

<footer>
  <p>
    made by: <a href="https://github.com/RobbeVanslambrouck/"
      ><img src={githubLogo} alt="github icon" /> robbe vanslambrouck</a
    >
  </p>
</footer>

<style>
  footer {
    box-shadow: 3px -3px 10px 3px #ddd;
    font-size: 1.6rem;
    height: 5rem;
  }
  p {
    display: flex;
    gap: 1rem;
    justify-content: center;
    text-transform: capitalize;
    height: 5rem;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: black;
    display: flex;
    gap: 0.3rem;
  }

  a:hover {
    color: #ff3e00;
    text-decoration: underline;
  }

  img {
    height: 1.4rem;
  }
</style>
