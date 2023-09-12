<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      const script1 = document.createElement('script');
      script1.src = 'https://tamaro.raisenow.com/brenh-1353/latest/widget.js';
      document.body.appendChild(script1);
  
      script1.onload = () => {
        window.rnw.tamaro.runWidget('.rnw-widget-container');
      };
    });
  </script>
  
  <div class="rnw-widget-container"></div>
  