<script lang="ts">
	import type { PageData } from './$types';
	import Break from '$lib/Break.svelte';
	import Chip from '$lib/Chip.svelte';
	import Slideshow from '$lib/Slideshow.svelte';
    import Button from '$lib/Button.svelte';
	import { Icon } from 'svelte-remix';
	import { base } from '$app/paths';
	import { pages } from '../data';

	let title = 'Pogify';

	let desc = pages.find((e) => e.title == title)!.desc;
	let tags = pages.find((e) => e.title == title)!.tags;
</script>

<div class="generic-project-page">
	<a href="{base}/design" class="back-button">
		<Icon name="corner-up-left-fill" width="16" height="16" tabindex="-1" />
		Back
	</a>
	<div class="heading-section">
		<h1>Pogify</h1>
		<div class="heading-links">
          <Button to="https://www.figma.com/proto/FMEIIXDaXwr8c5aVg1Ce6P/Pogify?type=design&node-id=1108-250&t=IXuzg2tBNjCYJCIG-1&scaling=min-zoom&page-id=1108%3A2&mode=design" icon="iconLeft" target="_blank"><Icon name="pencil-ruler-2-line" width="16" height="16" tabindex="-1"></Icon>Figma</Button>
        </div>
	</div>
	<p class="subtitle">{desc}</p>
	<div class="chip-container">
		{#each tags as t}
			<Chip text={t} />
		{/each}
	</div>
	<Break />
    <h2>Prototypes</h2>
	<Slideshow ratio={"181 / 129"}>
        <img src="{base}/Pogify/Light Theme.jpg" alt="Light Theme">
        <img src="{base}/Pogify/Dark Theme.jpg" alt="Dark Theme">
        <img src="{base}/Pogify/Session.jpg" alt="Session">
        <img src="{base}/Pogify/Session 2.jpg" alt="Session 2">
    </Slideshow>
</div>
