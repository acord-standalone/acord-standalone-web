<script>
  export let text = "";
</script>

<div class="card">
  <div class="icon">
    <slot />
  </div>
  <div class="text">{text}</div>
</div>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width: 14rem;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 0.5rem;
    gap: 0.25rem;

    & > .text {
      font-size: 1rem;
      font-weight: 700;
      color: whitesmoke;
    }

    & > .icon :global(svg) {
      color: whitesmoke;
      width: 4rem;
    }
  }
</style>
