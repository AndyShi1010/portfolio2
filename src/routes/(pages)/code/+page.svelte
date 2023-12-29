<script>
    import GridList from "$lib/GridList.svelte";
    import { pages } from "./data";
    import Break from "$lib/Break.svelte";
    import { base } from '$app/paths'
</script>

<!-- <AnimatedPage> -->
    <h1>Code</h1>
    <Break />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem soluta, exercitationem, excepturi nemo eveniet numquam repudiandae, quo quas eos incidunt voluptas tempore. Unde reiciendis omnis non, autem repudiandae minima nesciunt?</p>
    <GridList items={pages} root="/code">
    </GridList>
<!-- </AnimatedPage> -->
