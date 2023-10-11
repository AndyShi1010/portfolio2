<script lang="ts">
    import type { PageData } from './$types';
    import Slideshow from '$lib/Slideshow.svelte';
    import Break from '$lib/Break.svelte';
    import Chip from '$lib/Chip.svelte';
    import Button from '$lib/Button.svelte';
    import { Icon } from 'svelte-remix'
    import { base } from '$app/paths'

    import { pages } from "../data";

    let title = "LiveTL"

    let desc = pages.find((e) => e.title == title)!.desc;
    let tags = pages.find((e) => e.title == title)!.tags;
    

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
        <Button to="https://github.com/LiveTL/LiveTL" icon="iconLeft" target="_blank"><Icon name="github-line" width="16" height="16" tabindex="-1"></Icon>Github</Button>
        <Button to="https://www.figma.com/proto/2ZhAWvKUJQHHHHwTao3qVn/LiveTL-Desktop-Redesign?node-id=238-84" icon="iconLeft" target="_blank"><Icon name="pencil-ruler-2-line" width="16" height="16" tabindex="-1"></Icon>Figma</Button>
      </div>
    </div>
    <p class="subtitle">{desc}</p>
    <div class="chip-container">
      {#each tags as t}
        <Chip text={t}/> 
      {/each}
    </div>
    <Break/>
    <Slideshow>
      <img src="{base}/LiveTL/LiveTL.png" alt="LiveTL UI">
      <img src="{base}/LiveTL/Layout Editor.png" alt="Layout Editor">
      <img src="{base}/LiveTL/Settings General.png" alt="Settings">
      <img src="{base}/LiveTL/Chat Layout.png" alt="Settings">
      <!-- <img src="/burger.jpg" alt="Test3">
      <img src="/grapes.jpg" alt="Test4"> -->
      <!-- <video src="/video2.mp4" controls></video> -->
    </Slideshow>
    
    <p>
      Created UI mockups and prototypes to improve the user experience of a Chrome extension with over 30,000 downloads.
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
    gap: 16px;
    margin-block-end: 16px;
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
  .chip-container {
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-block-start: 16px;
    margin-block-end: 16px;
  }
  .subtitle {
    margin: 0;
    margin-block-end: 16px;
    font-style: italic;
  }
</style>
