<script lang="ts">
    import type { PageData } from './$types';
    import Break from '$lib/Break.svelte';
	import Chip from '$lib/Chip.svelte';
	import Slideshow from '$lib/Slideshow.svelte';
    import Button from '$lib/Button.svelte';
	import { Icon } from 'svelte-remix';
	import { base } from '$app/paths';
	import { pages } from '../data';

	let title = 'Leaplist';

	let desc = pages.find((e) => e.title == title)!.desc;
	let tags = pages.find((e) => e.title == title)!.tags;
    
    export let data: PageData;
</script>

<svelte:head>
	<title>Andy Shi | {title}</title>
</svelte:head>

<div class="generic-project-page">
	<a href="{base}/design" class="back-button">
		<Icon name="corner-up-left-fill" width="16" height="16" tabindex="-1" />
		Back
	</a>
	<div class="heading-section">
		<h1>Leaplist</h1>
		<div class="heading-links">
          <Button to="https://www.figma.com/proto/Zh87ZaPYOFF6cuiSnFL6Rn/Frog-App?type=design&node-id=2-2&t=idbELhfTG7nygyX4-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2" icon="iconLeft" target="_blank"><Icon name="pencil-ruler-2-line" width="16" height="16" tabindex="-1"></Icon>Figma Prototype</Button>
        </div>
	</div>
	<p class="subtitle">{desc}</p>
	<div class="chip-container">
		{#each tags as t}
			<Chip text={t} />
		{/each}
	</div>
	<Break />
    <h2>App Screenshots</h2>
	<Slideshow ratio={"4 / 3"}>
        <img src="{base}/Leaplist/Landing.jpg" alt="Landing Screen">
        <img src="{base}/Leaplist/Sign Up.jpg" alt="Sign Up View">
        <img src="{base}/Leaplist/Home.jpg" alt="Home">
        <img src="{base}/Leaplist/Category View.jpg" alt="Category View">
        <img src="{base}/Leaplist/Details View.jpg" alt="Details View">
        <img src="{base}/Leaplist/Timer View.jpg" alt="Timer View">
        <img src="{base}/Leaplist/Pet Main.jpg" alt="Pet View">
    </Slideshow>
</div>
