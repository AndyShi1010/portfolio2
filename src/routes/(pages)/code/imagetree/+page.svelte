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

    let title = "Imagetree"

    let desc = pages.find((e) => e.title == title)!.desc;
    let tags = pages.find((e) => e.title == title)!.tags;
</script>

<div class="generic-project-page">
    <a href="{base}/code" class="back-button">
      <Icon name="corner-up-left-fill" width="16" height="16" tabindex="-1"></Icon>
      Back
    </a>
    <div class="heading-section">
      <h1>Imagetree</h1>
      <div class="heading-links">
        <Button to="https://github.com/AndyShi1010/Imagetree-CSC317" icon="iconLeft" target="_blank"><Icon name="github-line" width="16" height="16" tabindex="-1"></Icon>Github</Button>
      </div>
    </div>
    <p class="subtitle">{desc}</p>
    <div class="chip-container">
      {#each tags as t}
        <Chip text={t}/> 
      {/each}
    </div>
    <Break/>
    <h2>App Demo</h2>
    <div class="yt-player">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NJkhdmN7Ysc?si=oxyM_PKQh8l7h9dj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    
    <!-- <p>
      Created UI mockups and prototypes to improve the user experience of a Chrome extension with over 30,000 downloads.
    </p> -->
</div>

<style>
    .yt-player {
        width: 100%;
        height: 100%;
        border: 1px solid rgba(255,255,255,0.15);
        background-color: rgba(0,0,0,0.2);
        aspect-ratio: 16 / 9;
    }
    .yt-player iframe {
        width: 100%;
        height: 100%;
    }
</style>

