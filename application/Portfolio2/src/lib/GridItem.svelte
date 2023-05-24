<script lang='ts'>
    export let img: {src: string, alt: string} = {src: "", alt: ""};
    export let title: string;
    export let desc: string;
    export let tags: string[];
    export let path: string;
</script>

<div>
    <!-- {#if img}
    <img src={img.src} alt={img.alt}>
    {/if} -->
    <a href={path}>{title}</a>
    <p>{desc}</p>
    {#each tags as t}
        <div>{t}</div>
    {/each}
</div>

<style>
    
</style>