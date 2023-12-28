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

    let title = "ATeM"

    let desc = pages.find((e) => e.title == title)!.desc;
    let tags = pages.find((e) => e.title == title)!.tags;
</script>

<div class="generic-project-page">
    <a href="{base}/code" class="back-button">
      <Icon name="corner-up-left-fill" width="16" height="16" tabindex="-1"></Icon>
      Back
    </a>
    <div class="heading-section">
      <h1>ATeM</h1>
      <div class="heading-links">
        <Button to="https://github.com/krleong/ATeM" icon="iconLeft" target="_blank"><Icon name="github-line" width="16" height="16" tabindex="-1"></Icon>Github</Button>
        <Button to="https://www.figma.com/proto/MBt4GZlHmMR7X164PLI5vP/ATeM?type=design&node-id=23-2&t=rGy133qKIQI0l7L1-1&scaling=scale-down&page-id=0%3A1&mode=design" icon="iconLeft" target="_blank"><Icon name="pencil-ruler-2-line" width="16" height="16" tabindex="-1"></Icon>Figma</Button>
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
      <img src="{base}/ATeM/Home.png" alt="Home">
      <img src="{base}/ATeM/Sign Up.png" alt="Sign Up">
      <img src="{base}/ATeM/Feed.png" alt="Feed">
      <img src="{base}/ATeM/Dashboard.png" alt="Dashboard">
      <img src="{base}/ATeM/Transaction.png" alt="Transaction">
    </Slideshow>
    
    <!-- <p>
      Created UI mockups and prototypes to improve the user experience of a Chrome extension with over 30,000 downloads.
    </p> -->
</div>

