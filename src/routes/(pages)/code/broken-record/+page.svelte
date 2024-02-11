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

    let title = "Broken Record"

    let desc = pages.find((e) => e.title == title)!.desc;
    let tags = pages.find((e) => e.title == title)!.tags;
</script>

<svelte:head>
	<title>Andy Shi | {title}</title>
</svelte:head>

<div class="generic-project-page">
    <a href="{base}/code" class="back-button">
      <Icon name="corner-up-left-fill" width="16" height="16" tabindex="-1"></Icon>
      Back
    </a>
    <div class="heading-section">
      <h1>Broken Record</h1>
      <div class="heading-links">
        <Button to="https://github.com/AndyShi1010/broken-record-archive" icon="iconLeft" target="_blank"><Icon name="github-line" width="16" height="16" tabindex="-1"></Icon>Github</Button>
      </div>
    </div>
    <p class="subtitle">{desc}</p>
    <div class="chip-container">
      {#each tags as t}
        <Chip text={t}/> 
      {/each}
    </div>
    <Break/>
    <h2>App Demos</h2>
    <Slideshow>
        <video controls>
            <source src="{base}/BrokenRecord/demo.mp4" type="video/mp4">
            <track kind="captions">
        </video>
        <video controls>
            <source src="{base}/BrokenRecord/mididemo.mp4" type="video/mp4">
            <track kind="captions">
        </video>
    </Slideshow>
    <h2>Screenshots</h2>
    <Slideshow>
      <img src="{base}/BrokenRecord/drum.png" alt="Drum">
      <img src="{base}/BrokenRecord/osc.png" alt="Synth">
    </Slideshow>
    
    <!-- <p>
      Created UI mockups and prototypes to improve the user experience of a Chrome extension with over 30,000 downloads.
    </p> -->
</div>

