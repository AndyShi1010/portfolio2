<script>
    import GridItem from "$lib/GridItem.svelte";
    import { pages } from "./data";
</script>

<!-- <AnimatedPage> -->
    <h1>Code</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem soluta, exercitationem, excepturi nemo eveniet numquam repudiandae, quo quas eos incidunt voluptas tempore. Unde reiciendis omnis non, autem repudiandae minima nesciunt?</p>
    {#each pages as i}
        <GridItem path={"/code" + i.link} title={i.title} desc={i.desc} tags={i.tags} img={i.thumb}/>
    {/each}
<!-- </AnimatedPage> -->
