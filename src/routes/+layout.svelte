<script lang='ts'>
    
    import Nav from '$lib/Nav.svelte'
    import ThreeCanvas from '$lib/ThreeCanvas.svelte';
    //import { setContext, getContext, beforeUpdate } from 'svelte';
    // import { page } from '$app/stores';
    import { base } from '$app/paths'
    import { beforeNavigate, afterNavigate } from '$app/navigation';
    import { page } from '$app/stores';
    import { scale, fade, blur } from 'svelte/transition'
    import { onMount } from 'svelte';
    import { loading, loadProgress } from '../stores'
    import Loader from '$lib/Loader.svelte';

    let ready = false;
    onMount(() => {setTimeout(() => {
        ready = true
    }, 500)});

    
    let modelLoading: Boolean = true;
    loading.subscribe((val) => {
        setTimeout(() => {
            modelLoading = val
        }, 0)
    })

    // let isTransitioning;

    // transitioning.subscribe((val) => {
    //     isTransitioning = transitioning;
    // })

    // console.log($page.status)
</script>

{#if $page.status <= 400}
    {#if !modelLoading}
        <slot></slot>
        <Nav/>
    {:else}
        <Loader></Loader>
    {/if}
    <ThreeCanvas />
{:else}
    <slot></slot>
    <Nav/>
{/if}

<style>
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100svh;
        object-fit: cover;
        z-index: -3;
    }
    #page {
        width: 100%;
        height: 100%;
    }
    :global(a > svg:focus, button > svg:focus) {
        outline: none;
    }
    :global(.generic-project-page .heading-section) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        margin-block-end: 16px;
    }
    :global(.generic-project-page .heading-links) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 8px;
    }
    :global(.generic-project-page .chip-container) {
        display: flex;
        flex-direction: row;
        gap: 8px;
        margin-block-start: 16px;
        margin-block-end: 16px;
    }
    :global(.generic-project-page .subtitle) {
        margin: 0;
        margin-block-end: 16px;
        font-style: italic;
    }
    :global(.generic-project-page #nav-back) {
        color: rgba(255,255,255,0.75);
    }
    :global(.generic-project-page h2) {
        font-weight: normal;
        margin-block-start: 16px;
        margin-block-end: 16px;
    }
    :global(.generic-project-page img) {
        width: 100%;
    }
</style>