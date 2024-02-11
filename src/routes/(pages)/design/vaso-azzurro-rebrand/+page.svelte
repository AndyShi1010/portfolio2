<script lang="ts">
	import type { PageData } from './$types';
	import Break from '$lib/Break.svelte';
	import Chip from '$lib/Chip.svelte';
	import CollageGrid from '$lib/CollageGrid.svelte';
    import Slideshow from '$lib/Slideshow.svelte';
	import { Icon } from 'svelte-remix';
	import { base } from '$app/paths';
	import { pages } from '../data';

	let title = 'Vaso Azzurro Rebrand';

	let desc = pages.find((e) => e.title == title)!.desc;
	let tags = pages.find((e) => e.title == title)!.tags;
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
		<h1>Vaso Azzurro Rebrand</h1>
	</div>
	<p class="subtitle">{desc}</p>
	<div class="chip-container">
		{#each tags as t}
			<Chip text={t} />
		{/each}
	</div>
	<Break />
    <h2>Logo</h2>
    <!-- <img src="{base}/VasoAzzurro/logospec.png" alt="Logo Specs">
    <img src="{base}/VasoAzzurro/logo.png" alt="Logo"> -->
    <CollageGrid
        images={[
            {
                path: "/VasoAzzurro/logospec.png",
                alt: "Logo Specs"
            },
            {
                path: "/VasoAzzurro/logo.png",
                alt: "Logo"
            }
        ]}
    />
    <h2>Application Mockups</h2>
	<Slideshow>
        <img src="{base}/VasoAzzurro/Menu.png" alt="Restaurant Menu">
        <img src="{base}/VasoAzzurro/apron2.jpg" alt="Apron">
        <img src="{base}/VasoAzzurro/BusinessCard.png" alt="Business Card">
        <img src="{base}/VasoAzzurro/PhoneScreen.png" alt="Ordering App">
    </Slideshow>
    <h2>Design Process</h2>
	<Slideshow ratio={"22 / 17"}>
        <img src="{base}/VasoAzzurro/Project5_FinalPresentation_Page_01.jpg" alt="Process Book Page 1">
        <img src="{base}/VasoAzzurro/Project5_FinalPresentation_Page_02.jpg" alt="Process Book Page 2">
        <img src="{base}/VasoAzzurro/Project5_FinalPresentation_Page_05.jpg" alt="Process Book Page 3">
        <img src="{base}/VasoAzzurro/Project5_FinalPresentation_Page_06.jpg" alt="Process Book Page 4">
        <img src="{base}/VasoAzzurro/Project5_FinalPresentation_Page_09.jpg" alt="Process Book Page 5">
        <img src="{base}/VasoAzzurro/Project5_FinalPresentation_Page_10.jpg" alt="Process Book Page 6">
        <img src="{base}/VasoAzzurro/Project5_FinalPresentation_Page_11.jpg" alt="Process Book Page 7">
    </Slideshow>
</div>
