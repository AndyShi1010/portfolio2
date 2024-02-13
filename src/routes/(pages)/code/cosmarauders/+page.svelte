<script lang="ts">
    import type { PageData } from './$types';
    import Slideshow from '$lib/Slideshow.svelte';
    import Break from '$lib/Break.svelte';
    import Chip from '$lib/Chip.svelte';
    import Button from '$lib/Button.svelte';
    import CollageGrid from '$lib/CollageGrid.svelte';
    import { Icon } from 'svelte-remix'
    import { base } from '$app/paths'

    import { pages } from "../data";

    let title = "Cosmarauders"

    let desc = pages.find((e) => e.title == title)!.desc;
    let tags = pages.find((e) => e.title == title)!.tags;
</script>

<div class="generic-project-page">
    <a href="{base}/code" class="back-button">
      <Icon name="corner-up-left-fill" width="16" height="16" tabindex="-1"></Icon>
      Back
    </a>
    <div class="heading-section">
      <h1>Cosmarauders</h1>
      <div class="heading-links">
        <Button to="https://github.com/cyberscoundrel/fungame1" icon="iconLeft" target="_blank"><Icon name="github-line" width="16" height="16" tabindex="-1"></Icon>Github</Button>
      </div>
    </div>
    <p class="subtitle">{desc}</p>
    <div class="chip-container">
      {#each tags as t}
        <Chip text={t}/> 
      {/each}
    </div>
    <Break/>
    <h2>Game Trailer</h2>
    <video controls>
      <source src="{base}/Cosmarauders/trailer.mp4" type="video/mp4">
      <track kind="captions">
    </video>
    <h2>Screenshots</h2>
    <Slideshow>
      <img src="{base}/Cosmarauders/title.png" alt="Title Screen">
      <img src="{base}/Cosmarauders/game.png" alt="Game">
      
    </Slideshow>
    
    <!-- <p>
      Created UI mockups and prototypes to improve the user experience of a Chrome extension with over 30,000 downloads.
    </p> -->
</div>

<style>
  video {
        width: 100%;
        height: auto;
        background-color: black;
    }
</style>

