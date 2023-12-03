<script lang="ts">
    import Slideshow from '$lib/Slideshow.svelte';
    import Break from '$lib/Break.svelte';
	import Chip from '$lib/Chip.svelte';
	import CollageGrid from '$lib/CollageGrid.svelte';
	import { Icon } from 'svelte-remix';
	import { base } from '$app/paths';
	import { pages } from '../data';

	let title = 'CoSE - Various Works';

	let desc = pages.find((e) => e.title == title)!.desc;
	let tags = pages.find((e) => e.title == title)!.tags;
</script>

<div class="generic-project-page">
	<a href="{base}/design" class="back-button">
		<Icon name="corner-up-left-fill" width="16" height="16" tabindex="-1" />
		Back
	</a>
	<div class="heading-section">
		<h1>CoSE - Various Works</h1>
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
    <h2>Event Annoucement Banners</h2>
	<Slideshow ratio="2 / 1">
		<img src="{base}/CoSE/lunch.jpg" alt="Lunch">
        <img src="{base}/CoSE/dinner.png" alt="Dinner">
        <img src="{base}/CoSE/gathering.png" alt="Gathering">
        <img src="{base}/CoSE/holiday.png" alt="Holiday">
        <img src="{base}/CoSE/pi.png" alt="Pi">
    </Slideshow>
	<h2>Event Print Flyers</h2>
	<CollageGrid
		images={[
			{
				path: "/CoSE/pastries.png",
				alt: "Pastries"
			},
			{
				path: "/CoSE/print.png",
				alt: "Print"
			}
		]}
    />
</div>