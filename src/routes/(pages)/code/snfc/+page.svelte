<script lang="ts">
    import type { PageData } from './$types';
    import Slideshow from '$lib/Slideshow.svelte';
    import Break from '$lib/Break.svelte';
    import Chip from '$lib/Chip.svelte';
    import Button from '$lib/Button.svelte';

    import { Icon } from 'svelte-remix'
    import { base } from '$app/paths'

    import { pages } from "../data";

    let title = "SNFC Registration"

    let desc = pages.find((e) => e.title == title)!.desc;
    let tags = pages.find((e) => e.title == title)!.tags;
</script>

<div class="generic-project-page">
    <a href="{base}/code" class="back-button">
      <Icon name="corner-up-left-fill" width="16" height="16" tabindex="-1"></Icon>
      Back
    </a>
    <div class="heading-section">
      <h1>SNFC Registration</h1>
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
      <img src="{base}/SNFC/Home.png" alt="Home">
      <img src="{base}/SNFC/Page 2.png" alt="Sign Up">
      <img src="{base}/SNFC/Page 3.png" alt="Blog">
    </Slideshow>
    
    <!-- <p>
      Created UI mockups and prototypes to improve the user experience of a Chrome extension with over 30,000 downloads.
    </p> -->
</div>

