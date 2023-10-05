<script lang="ts">
    import type { PageData } from './$types';
    import { fade, fly } from 'svelte/transition'
    import AnimatedPage from "$lib/AnimatedPage.svelte";
    import Slideshow from '$lib/Slideshow.svelte';
    import ThreeCanvas from '$lib/ThreeCanvas.svelte';
    // import Carousel from 'svelte-carousel';
    import { Icon } from 'svelte-remix'

    export let data: PageData;

    let carousel;

</script>

<!-- <AnimatedPage> -->
<div>
    <div class="page-title">
      
    </div>

    <a href="/design" class="back-button">
      <Icon name="corner-up-left-fill" width="16" height="16" tabindex="-1"></Icon>
      Back
    </a>
    <!-- <p id="nav-back">/design/</p> -->
    <h1>LiveTL</h1>

    <!-- <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Minima quas ut illo labore incidunt dolorum odio temporibus 
      esse cumque fugiat ad, veritatis porro aliquam saepe debitis 
      repellendus hic, cum voluptatum.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Minima quas ut illo labore incidunt dolorum odio temporibus 
      esse cumque fugiat ad, veritatis porro aliquam saepe debitis 
      repellendus hic, cum voluptatum.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Minima quas ut illo labore incidunt dolorum odio temporibus 
      esse cumque fugiat ad, veritatis porro aliquam saepe debitis 
      repellendus hic, cum voluptatum.
    </p> -->
    <Slideshow>
      <img src="/burger.jpg" alt="Test1">
      <img src="/grapes.jpg" alt="Test2">
      <img src="/movie.jpg" alt="Test2">
      <!-- <img src="/burger.jpg" alt="Test3">
      <img src="/grapes.jpg" alt="Test4"> -->
      <!-- <video src="/video2.mp4" controls></video> -->
    </Slideshow>
    
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Minima quas ut illo labore incidunt dolorum odio temporibus 
      esse cumque fugiat ad, veritatis porro aliquam saepe debitis 
      repellendus hic, cum voluptatum.
    </p>

    <!-- <Carousel
    bind:this={carousel}
  >
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </Carousel> -->
</div>

<!-- </AnimatedPage> -->

<style>
  .page-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: space-between; */
    gap: 16px;
  }
  #nav-back {
    color: rgba(255,255,255,0.75);
  }
</style>
