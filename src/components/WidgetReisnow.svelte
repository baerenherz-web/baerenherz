<script>
  import { onMount, afterUpdate } from 'svelte';

  let isLoading = true; 

  onMount(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://tamaro.raisenow.com/brenh-1353/latest/widget.js';

    script1.onload = () => {
      window.rnw.tamaro.runWidget('.rnw-widget-container');
      isLoading = false; 
    };

    document.body.appendChild(script1);
  });

  afterUpdate(() => {
    setTimeout(() => {
      if (isLoading) {
        isLoading = false;
      }
    }, 5000); // 5000 milisegundos (5 segundos)
  });
</script>

{#if isLoading}
  <div class="flex justify-center p-8 transition-shadow">
  <div
  class="h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span
  >
  </div>
</div>
{:else}
  <div class="rnw-widget-container"></div>
{/if}