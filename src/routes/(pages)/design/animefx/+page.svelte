<script lang="ts">
	import type { PageData } from './$types';
	import Break from '$lib/Break.svelte';
	import Chip from '$lib/Chip.svelte';
	import CollageGrid from '$lib/CollageGrid.svelte';
	import { Icon } from 'svelte-remix';
	import { base } from '$app/paths';
	import { pages } from '../data';

	let title = 'AnimeFX - Various Works';

	let desc = pages.find((e) => e.title == title)!.desc;
	let tags = pages.find((e) => e.title == title)!.tags;
</script>

<div class="generic-project-page">
	<a href="{base}/design" class="back-button">
		<Icon name="corner-up-left-fill" width="16" height="16" tabindex="-1" />
		Back
	</a>
	<div class="heading-section">
		<h1>AnimeFX - Various Works</h1>
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
    <h2>Social Media Calendar Posts</h2>
	<CollageGrid
		images={[
			{
				path: "/AnimeFX/AprilStory.png",
				alt: "April Story"
			},
			{
				path: "/AnimeFX/MarchStory.png",
				alt: "March Story"
			},
			{
				path: "/AnimeFX/FebStory3.png",
				alt: "February Story"
			},
			{
				path: "/AnimeFX/JanRender.png",
				alt: "January Story"
			},
			{
				path: "/AnimeFX/DecemberCal.png",
				alt: "December Story"
			},
		]}
    />
    <h2>Print Flyer Screening Annoucements</h2>
	<!-- <CollageGrid>
        <img src="{base}/AnimeFX/ASilentVoice5.png" alt="LiveTL UI">
        <img src="{base}/AnimeFX/GotF.png" alt="Layout Editor">
        <img src="{base}/AnimeFX/WolfChildren.png" alt="Settings">
        <img src="{base}/AnimeFX/Maquia.png" alt="Settings">
    </CollageGrid> -->
</div>
