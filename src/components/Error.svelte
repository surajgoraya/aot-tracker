<script lang="ts">
  export let ErrorTitle: String | undefined;
  export let ErrorDescrip: String | undefined;
  export let ErrorCode: String | undefined;
</script>

<div class="AOT_error">
  <i class="AOT_error__icon bi bi-cone-striped" />
  <div class="AOT_error__information">
    <h4 class="AOT_error__information__Title">
      {ErrorTitle ? ErrorTitle : "an error occurred."}
    </h4>
    {#if ErrorDescrip}
      <p class="AOT_error__information__Descrip">{ErrorDescrip}</p>
    {:else}
      <p class="AOT_error__information__Descrip">
        It's possible MAL's API is down or throttling requests. You can check <a
          href="https://status.myanimelist.net/">here</a
        >.
      </p>
    {/if}

    {#if ErrorCode}
      <p class="AOT_error__information__ErrorCode">{ErrorCode}</p>
    {:else}
      <p class="AOT_error__information__ErrorCode">
        UNKNOWN_ERROR
      </p>
    {/if}
  </div>
</div>

<style>
  .AOT_error {
    display: grid;
    opacity: 0.75;
    grid-template-rows: auto;
  }
  .AOT_error__icon {
    font-size: 5rem;
    margin-top: 3rem;
  }
  .AOT_error__information {
    display: flex;
    flex-direction: column;
  }

  .AOT_error__information__ErrorCode {
    font-family: monospace;
    font-size: 0.75rem;
  }
</style>
