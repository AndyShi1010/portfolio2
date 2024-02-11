<script>
    import GridList from "$lib/GridList.svelte";
    import { pages } from "./data";
    import Break from "$lib/Break.svelte";
    import { base } from '$app/paths'
</script>

<!-- <AnimatedPage> -->
    <svelte:head>
	<title>Andy Shi | Code</title>
    </svelte:head>
    <h1>Code</h1>
    <Break />
    <p>A showcase of my various coding projects utilizing different technologies and stacks. Projects include web apps, mobile apps, and games.</p>
    <GridList items={pages} root="/code">
    </GridList>
<!-- </AnimatedPage> -->
