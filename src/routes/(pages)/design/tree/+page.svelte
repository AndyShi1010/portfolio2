<script lang="ts">
    import type { PageData } from './$types';
    import Break from '$lib/Break.svelte';
	import Chip from '$lib/Chip.svelte';
    import CollageGrid from '$lib/CollageGrid.svelte';
	import { Icon } from 'svelte-remix';
	import { base } from '$app/paths';
	import { pages } from '../data';

    export let data: PageData;

    let title = 'Tree';

	let desc = pages.find((e) => e.title == title)!.desc;
	let tags = pages.find((e) => e.title == title)!.tags;
</script>

<div class="generic-project-page">
    <a href="{base}/design" class="back-button">
		<Icon name="corner-up-left-fill" width="16" height="16" tabindex="-1" />
		Back
	</a>
	<div class="heading-section">
		<h1>Tree</h1>
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
                path: "/Tree/TreeFinal.png",
                alt: "Tree"
            }
        ]}
    />
    <!-- <img src="{base}/Tree/TreeFinal.png" alt="Tree"> -->
</div>