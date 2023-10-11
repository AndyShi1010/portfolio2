<script lang="ts">
    import GridItem from "./GridItem.svelte";
    export let items: PageData[];
    export let root: string
</script>

<div class="grid-items">
    {#each items as i}
        <GridItem path={root + i.link} title={i.title} desc={i.desc} tags={i.tags} img={i.thumb}/>
    {/each}
</div>

<style>
    .grid-items {
        display: flex; 
        flex-direction: column;
        gap: 8px;
    }
</style>