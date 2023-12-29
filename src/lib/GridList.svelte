<script lang="ts">
    import GridItem from "./GridItem.svelte";
    import { fly } from 'svelte/transition';
    import { quadOut } from "svelte/easing";
    export let items: PageMetadata[];
    export let root: string


    let innerWidth = 0;

    $: mobile = innerWidth < 1080
</script>

<svelte:window bind:innerWidth  />

<div class="grid-items">
    {#each items as i, idx}
        {#if mobile}
            <div in:fly="{{y: 10, duration: 500, delay: ((idx + 1) * 100) + 500, easing: quadOut}}">
                <GridItem path={root + i.link} title={i.title} desc={i.desc} tags={i.tags} img={i.thumb}/>
            </div>
        {:else}
            <div in:fly="{{x: -10, duration: 500, delay: ((idx + 1) * 100) + 500, easing: quadOut}}">
                <GridItem path={root + i.link} title={i.title} desc={i.desc} tags={i.tags} img={i.thumb}/>
            </div>
        {/if}
    {/each}
</div>

<style>
    .grid-items {
        display: flex; 
        flex-direction: column;
        gap: 8px;
    }
</style>