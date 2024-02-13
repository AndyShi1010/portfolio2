<script lang="ts">
    import Slideshow from '$lib/Slideshow.svelte';
    import Break from '$lib/Break.svelte';
	import Chip from '$lib/Chip.svelte';
	import CollageGrid from '$lib/CollageGrid.svelte';
	import { Icon } from 'svelte-remix';
	import { base } from '$app/paths';
	import { pages } from '../data';

	let title = 'Design Now! - Paul Rand';

	let desc = pages.find((e) => e.title == title)!.desc;
	let tags = pages.find((e) => e.title == title)!.tags;
</script>

<div class="generic-project-page">
	<a href="{base}/design" class="back-button">
		<Icon name="corner-up-left-fill" width="16" height="16" tabindex="-1" />
		Back
	</a>
	<div class="heading-section">
		<h1>Design Now! - Paul Rand</h1>
		<!-- <div class="heading-links">
          <Button to="https://livetl.app/en/home/" icon="iconLeft" target="_blank"><Icon name="global-line" width="16" height="16" tabindex="-1"></Icon>Website</Button>
          <Button to="https://github.com/LiveTL/LiveTL" icon="iconLeft" target="_blank"><Icon name="github-line" width="16" height="16" tabindex="-1"></Icon>Github</Button>
          <Button to="https://www.figma.com/proto/2ZhAWvKUJQHHHHwTao3qVn/LiveTL-Desktop-Redesign?node-id=238-84" icon="iconLeft" target="_blank"><Icon name="pencil-ruler-2-line" width="16" height="16" tabindex="-1"></Icon>Figma</Button>
        </div> -->
	</div>
	<p class="subtitle">{desc}</p>
	<div class="chip-container">
		{#each tags as t}
			<Chip text={t} />
		{/each}
	</div>
	<Break />
	<Slideshow ratio="8 / 5">
        <img src="{base}/DesignNowPaulRand/1.jpeg" alt="Page 1">
        <img src="{base}/DesignNowPaulRand/2-3.jpeg" alt="Page 2 and 3">
        <img src="{base}/DesignNowPaulRand/4-5.jpeg" alt="Page 4 and 5">
        <img src="{base}/DesignNowPaulRand/6-7.jpeg" alt="Page 6 and 7">
        <img src="{base}/DesignNowPaulRand/8.jpeg" alt="Page 8">
    </Slideshow>
</div>