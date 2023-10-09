<script lang="ts">
    import type { PageData } from './$types';
    import { fade, fly } from 'svelte/transition'
    import AnimatedPage from "$lib/AnimatedPage.svelte";
    import Slideshow from '$lib/Slideshow.svelte';
    import Break from '$lib/Break.svelte';
    import Chip from '$lib/Chip.svelte';
    import Button from '$lib/Button.svelte';
    import ThreeCanvas from '$lib/ThreeCanvas.svelte';
    // import Carousel from 'svelte-carousel';
    import { Icon } from 'svelte-remix'
    import { base } from '$app/paths'

    export let data: PageData;

    let carousel;

</script>

<!-- <AnimatedPage> -->
<div>
    <div class="page-title">
      
    </div>

    <a href="{base}/design" class="back-button">
      <Icon name="corner-up-left-fill" width="16" height="16" tabindex="-1"></Icon>
      Back
    </a>
    <!-- <p id="nav-back">/design/</p> -->
    <div class="heading-section">
      <h1>LiveTL</h1>
      <div class="heading-links">
        <Button to="https://livetl.app/en/home/" icon="iconLeft" target="_blank"><Icon name="global-line" width="16" height="16" tabindex="-1"></Icon>Website</Button>
        <Button to="https://livetl.app/en/home/" icon="iconLeft" target="_blank"><Icon name="github-line" width="16" height="16" tabindex="-1"></Icon>Github</Button>
        <Button to="https://livetl.app/en/home/" icon="iconLeft" target="_blank"><Icon name="pencil-ruler-line" width="16" height="16" tabindex="-1"></Icon>Figma</Button>
      </div>
    </div>
    <p><em>Live stream and chat translation for YouTube and Twitch.</em></p>
    <Chip text="UI/UX"/> <Chip text="2022"/>
    <Break/>

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
      <img src="{base}/burger.jpg" alt="Test1">
      <img src="{base}/grapes.jpg" alt="Test2">
      <img src="{base}/movie.jpg" alt="Test2">
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
  .heading-section {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .heading-links {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 8px;
  }
  #nav-back {
    color: rgba(255,255,255,0.75);
  }
</style>
