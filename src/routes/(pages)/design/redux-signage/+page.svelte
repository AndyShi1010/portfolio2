<script lang="ts">
    import Slideshow from '$lib/Slideshow.svelte';
    import Break from '$lib/Break.svelte';
	import Chip from '$lib/Chip.svelte';
	import CollageGrid from '$lib/CollageGrid.svelte';
	import { Icon } from 'svelte-remix';
	import { base } from '$app/paths';
	import { pages } from '../data';

	let title = 'Redux Signage';

	let desc = pages.find((e) => e.title == title)!.desc;
	let tags = pages.find((e) => e.title == title)!.tags;
</script>

<div class="generic-project-page">
	<a href="{base}/design" class="back-button">
		<Icon name="corner-up-left-fill" width="16" height="16" tabindex="-1" />
		Back
	</a>
	<div class="heading-section">
		<h1>Redux Signage</h1>
	</div>
	<p class="subtitle">{desc}</p>
	<div class="chip-container">
		{#each tags as t}
			<Chip text={t} />
		{/each}
	</div>
	<Break />
	<CollageGrid
    images={[
        {
            path: "/Redux/Audio.png",
            alt: "Audio"
        },
        {
            path: "/Redux/Games.png",
            alt: "Games"
        },
        {
            path: "/Redux/Tools.png",
            alt: "Tools"
        }
    ]}
/>
</div>