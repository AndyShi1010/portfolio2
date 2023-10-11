<script lang='ts'>
    import Link from "./Link.svelte";
    import Chip from "./Chip.svelte";
    import { base } from '$app/paths'
    import { Icon } from 'svelte-remix'

    export let img: {src: string, alt: string} | undefined;
    export let title: string;
    export let desc: string;
    export let tags: string[];
    export let path: string;
</script>

<a class="grid-item" href={base + path}>
    {#if img}
        <img src={base + img.src} alt={img.alt}>
    {:else}
        <div class="img-placeholder">
            <Icon name="sparkling-2-line" width="64" height="64" tabindex="-1"></Icon>
        </div>
    {/if}
    <div class="item-contents">
        <h2>{title}</h2>
        <p>{desc}</p>
        <div class="tags-container">
            {#each tags as t}
                <Chip text={t}></Chip>
            {/each}
        </div>
    </div>
</a>

<style>
    .grid-item {
        display: grid;
        grid-template-columns: 30% auto;
        padding: 16px;
        transition: box-shadow 0.75s;
        text-decoration: none;
    }
    .grid-item:hover {
        box-shadow: inset 0px 0px 0px 2px rgba(255,255,255,1), inset 0px 0px 15px rgba(255,255,255,0.3), 0px 0px 10px 4px rgba(255,255,255,0.3);
    }
    img {
        aspect-ratio: 16 / 9;
        width: 100%;
        object-fit: cover;
        border: 1px solid rgba(255,255,255,0.15);
    }
    .img-placeholder {
        aspect-ratio: 16 / 9;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(255,255,255,0.15);
    }
    .img-placeholder :global(svg) {
        fill: rgba(255,255,255,0.5);
    }
    .tags-container {
        display: flex;
        flex-direction: row;
        gap: 8px;
    }
    .item-contents {
        display: flex;
        flex-direction: column;
        padding: 8px 16px 8px 32px;
        gap: 8px;
    }
    h2 {
        margin: 0;
        font-weight: 400;
        font-size: 32px;
    }
    p {
        margin: 0;
        font-style: italic;
        font-size: 18px;
    }
</style>