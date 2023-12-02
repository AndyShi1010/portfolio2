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
</script>

<div class="generic-project-page">
    <a href="{base}/design" class="back-button">
      <Icon name="corner-up-left-fill" width="16" height="16" tabindex="-1"></Icon>
      Back
    </a>
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
</div>

