<script lang="ts">
    import type { PageData } from './$types';
    import Break from '$lib/Break.svelte';
	import Chip from '$lib/Chip.svelte';
	import Slideshow from '$lib/Slideshow.svelte';
    import Button from '$lib/Button.svelte';
	import { Icon } from 'svelte-remix';
	import { base } from '$app/paths';
	import { pages } from '../data';

	let title = 'Gorilla';

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
		<h1>Gorilla</h1>
		<div class="heading-links">
          <Button to="https://www.figma.com/proto/dyesdJqdqj1TAIp6iphuQk/Gorilla-App?node-id=14-424&starting-point-node-id=14%3A424&mode=design&t=5tpvR5DILqwRRxFF-1" icon="iconLeft" target="_blank"><Icon name="pencil-ruler-2-line" width="16" height="16" tabindex="-1"></Icon>Figma Prototype</Button>
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
        <img src="{base}/Gorilla/Main Screen.jpg" alt="Main Screen">
        <img src="{base}/Gorilla/Photo View.jpg" alt="Photo View">
        <img src="{base}/Gorilla/Edit.jpg" alt="Edit View">
        <img src="{base}/Gorilla/Library View.jpg" alt="Library View">
        <img src="{base}/Gorilla/Upload View Selected.jpg" alt="Upload View">
        <img src="{base}/Gorilla/Settings Link Search.jpg" alt="Settings View">
    </Slideshow>
</div>
