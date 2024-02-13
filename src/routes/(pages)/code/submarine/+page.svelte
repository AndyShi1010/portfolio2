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

    let title = "Submarine/Subylert"

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
      <h1>Submarine/Subylert</h1>
      <div class="heading-links">
        <Button to="https://showcase.codeday.org/project/cklohluef13895811qffuyjne2t" icon="iconLeft" target="_blank"><Icon name="global-line" width="16" height="16" tabindex="-1"></Icon>Project Page</Button>
        <Button to="https://www.figma.com/proto/0k9jC7kuC1rhEU4opSTlbS/Subscription-App-Idea?node-id=0%3A3&scaling=scale-down" icon="iconLeft" target="_blank"><Icon name="pencil-ruler-2-line" width="16" height="16" tabindex="-1"></Icon>Figma</Button>
      </div>
    </div>
    <p class="subtitle">{desc}</p>
    <div class="chip-container">
      {#each tags as t}
        <Chip text={t}/> 
      {/each}
    </div>
    <Break/>
    <h2>Screenshots</h2>
    <Slideshow>
      <img src="{base}/Submarine/Main App Page.png" alt="Home">
      <img src="{base}/Submarine/Add Sub.png" alt="Add Sub">
      <img src="{base}/Submarine/Main App Page 2.png" alt="Home 2">
    </Slideshow>
    
    <!-- <p>
      Created UI mockups and prototypes to improve the user experience of a Chrome extension with over 30,000 downloads.
    </p> -->
</div>

