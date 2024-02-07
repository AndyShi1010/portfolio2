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
        <div class="img-container">
            <img src={base + img.src} alt={img.alt}>
        </div>
    {:else}
        <div class="img-placeholder">
            <Icon name="sparkling-2-line" width="50%" height="50%" tabindex="-1"></Icon>
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
        /* flex-wrap: wrap; */
        /* grid-template-columns: minmax(140px, 30%) auto; */
        grid-template-columns: auto;
        column-gap: 16px;
        padding: 16px;
        transition: box-shadow 0.75s;
        text-decoration: none;
        position: relative;
        container: item / inline-size;
    }
    .grid-item:hover {
        box-shadow: inset 0px 0px 0px 2px rgba(255,255,255,1), inset 0px 0px 15px rgba(255,255,255,0.3), 0px 0px 10px 4px rgba(255,255,255,0.3);
    }

    .grid-item:hover::before {
        content: '';
        height: 100%;
        width: 100%;
        display: block;
        position: absolute;
        backdrop-filter: saturate(120%) brightness(110%);
        background-image: linear-gradient(to right, transparent 0%, transparent 20%, rgba(255, 255, 255, 0.2) 50%, transparent 80%, transparent 100%);
        background-size: 200% 200%;
        background-repeat: no-repeat;
        animation: 1s 1 grad-swipe forwards reverse ease-in;
    }

    /* .grid-item::after {
        content: '';
        position: absolute;
        opacity: 0;
        right: 32px;
        bottom: 50%;
        width: 120px;
        height: 48px;
        transform: translateY(50%);
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('Arrow.svg');
        transition: 0.25s;
    }
    .grid-item:hover::after {
        right: 12px;
        opacity: 0.3;
    } */
    
    /* .grid-item:hover::after {
        content: '';
        height: 100%;
        width: 100%;
        display: block;
        position: absolute;
        background-image: url(https://grainy-gradients.vercel.app/noise.svg);
        filter: grayscale(1);
        animation: 1.5s fade-noise forwards ease-out;
    }
    @keyframes fade-noise {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0.3;
        }
        100% {
            opacity: 0;
        }
    } */
    @keyframes grad-swipe {
        0% {
            opacity: 0;
            background-position: 0% 0%;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            background-position: 100% 100%;
        }
    }
    img {
        width: min-content;
        object-fit: cover;
        width: 100%;
        aspect-ratio: 16 / 9;
        border: 1px solid rgba(255,255,255,0.15);
    }
    .img-placeholder, .img-container {
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
        flex-wrap: wrap;
    }
    .item-contents {
        display: flex;
        flex-direction: column;
        padding: 8px 0px 0px 0px;
        gap: 8px;
        flex-grow: 4;
    }
    h2 {
        margin: 0;
        font-weight: 400;
        font-size: 24px;
        overflow-wrap: anywhere;
    }
    p {
        margin: 0;
        font-style: italic;
        font-size: 14px;
        line-height: 1;
    }
    @container (min-width: 720px) {
        .grid-item {
            background-color: blue;
        }
    }
    
    @media only screen and (min-width: 1080px) { 
        h2 {
            font-size: 32px;
        }
        p {
            font-size: 16px;
        }
        .grid-item { 
            padding: 24px;
            column-gap: 32px;
            /* grid-template-columns: minmax(140px, 30%) auto; */
        }
        .item-contents { 
            gap: 8px;
            padding: 8px 0px;
        }
        /* .grid-item::after {
            right: 32px;
            bottom: 50%;
            width: 180px;
            height: 72px;
        }
        .grid-item:hover::after {
            right: 24px;
        } */
    }
</style>