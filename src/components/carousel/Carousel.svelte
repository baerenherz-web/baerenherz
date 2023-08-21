<script>
    import { onMount } from "svelte";
    import Glide from "@glidejs/glide";
    onMount(() => {
      new Glide(".glide").mount();
    });
  </script>
  
  <div class="glide">
    <div data-glide-el="track" class="glide__track">
      <ul class="glide__slides">
        <li class="glide__slide">
          <img alt="" src="https://picsum.photos/id/834/900" />
        </li>
        <li class="glide__slide">
          <img alt="" src="https://picsum.photos/id/835/900" />
        </li>
        <li class="glide__slide">
          <img alt="" src="https://picsum.photos/id/836/900" />
        </li>
      </ul>
    </div>
  </div>
  
  <style >
    @import "../node_modules/@glidejs/glide/dist/css/glide.core.min.css";
  </style>
  