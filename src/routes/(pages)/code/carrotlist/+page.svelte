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

    let title = "CarrotList"

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
      <h1>CarrotList</h1>
      <div class="heading-links">
        <Button to="https://github.com/AndyShi1010/GroceryList" icon="iconLeft" target="_blank"><Icon name="github-line" width="16" height="16" tabindex="-1"></Icon>Github</Button>
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
    <video controls>
        <source src="{base}/CarrotList/iOS Demo.mp4" type="video/mp4">
        <track kind="captions">
    </video>
    <!-- <Slideshow>
      <img src="{base}/Piqued/Home.png" alt="Home">
      <img src="{base}/Piqued/Sign Up.png" alt="Sign Up">
      <img src="{base}/Piqued/Blog.png" alt="Blog">
      <img src="{base}/Piqued/Settings.png" alt="Settings">
    </Slideshow> -->
    
    <!-- <p>
      Created UI mockups and prototypes to improve the user experience of a Chrome extension with over 30,000 downloads.
    </p> -->
</div>

<style>
    video {
        width: 100%;
        height: auto;
        aspect-ratio: 16 / 9;
        background-color: black;
    }
</style>

