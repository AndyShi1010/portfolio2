<script lang='ts'>
    import Link from "./Link.svelte";
    export let img: {src: string, alt: string} = {src: "", alt: ""};
    export let title: string;
    export let desc: string;
    export let tags: string[];
    export let path: string;
</script>

<div class="grid-item">
    {#if img}
    <img src={img.src} alt={img.alt}>
    {/if}
    <a class="title" href={path}>{title}</a>
    <hr>
    <div class="tags-container">
        {#each tags as t}
        <span>{t}</span>
        {/each}
    </div>
    <p>{desc}</p>
</div>

<style>
    .grid-item {
        display: flex;
        flex-direction: column;
    }
    img {
        aspect-ratio: 16 / 9;
        object-fit: cover;
    }
</style>