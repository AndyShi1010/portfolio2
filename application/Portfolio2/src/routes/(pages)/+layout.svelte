<script lang='ts'>
    import { fade, fly } from 'svelte/transition'
    import { Svroller, Svrollbar } from 'svrollbar'
    import { afterUpdate, beforeUpdate, onMount } from 'svelte'
    import { beforeNavigate, afterNavigate } from '$app/navigation';
    import AnimatedPage from '$lib/AnimatedPage.svelte';
    // import { prevRoute } from '/src/stores.ts'
    import Loader from '$lib/Loader.svelte';
    import { transitioning } from '../../stores'
    import SimpleBar from 'simplebar'
    import 'simplebar/dist/simplebar.css';
    import ResizeObserver from 'resize-observer-polyfill';

    afterUpdate(() => {
        // new SimpleBar(document.getElementById('myElement'));
        // let elem = document.querySelector('[data-simplebar]');
        // new SimpleBar(document.getElementById('contents')!);
        // SimpleBar.instances.get(elem!)
        window.ResizeObserver = ResizeObserver;
    })

    onMount(() => {
        // console.log("test");
        // let bar = new SimpleBar(document.getElementById('contents')!);
        // console.log(bar);
    })

    export let data
    
</script>

<div 
    class="page-background-blur" 
    in:fly="{{x: -500, duration: 750}}" 
    out:fly="{{x: -500, duration: 750}}"  
    on:outrostart={() => {transitioning.set(true);}} 
    on:outroend={() => {transitioning.set(false);}}
    on:introstart={() => {transitioning.set(true);}} 
    on:introend={() => {transitioning.set(false);}} />
<div class="page-background" in:fly="{{x: -500, duration: 750}}" out:fly="{{x: -500, duration: 750}}"  />

<!-- <div class="page-background-blur" />
<div class="page-background"/> -->

<!-- {#key data.pathname} -->

{#key data.pathname}
<div class="page-container">
    <!-- <h1>{$prevRoute}</h1> -->
    <!-- {data.pathname} -->
    <div class="page-contents" id="contents" in:fly="{{x: -10, duration: 600, delay: 610}}" out:fly="{{x: -10, duration: 200}}" on:transitionend={() => {}}>
    <!-- <div class="page-contents" id="contents" in:fly="{{x: -10, duration: 600, delay: 610}}" out:fly="{{x: -10, duration: 600}}" data-simplebar> -->
        <Svroller 
            width="100%" 
            height="100%" 
            alwaysVisible={true}
            initiallyVisible={true}
            >   
            <!-- <Svroller 
            width="100%" 
            height="100%" 
            hideAfter={500}
            initiallyVisible={true}
            alwaysVisible={true}
            >    -->
            <div class="content-slot">
                <slot>
                </slot>
            </div>
        </Svroller>
    </div>
    <!-- <div class="page-contents" transition:fly|local="{{x: -10, duration: 1200}}">
        <slot>
        </slot> -->
        <!-- <div class="content-container" bind:this={contents}>
            <slot>
            </slot>
        </div> -->
    <!-- </div> -->
    <!--<Svrollbar {viewport} {contents} margin="{{top:64}}" alwaysVisible />-->
</div>
<!-- <Svrollbar {viewport} {contents} /> -->
{/key}
<!-- {/key} -->



<style>
    .page-background-blur {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
        backdrop-filter: blur(10px);
        mask-image: linear-gradient(to right, black 0, black 50%, transparent 100%);
        -webkit-mask-image: linear-gradient(to right, black 0, black 50%, transparent 100%);
        mask-image: -webkit-linear-gradient(to right, black 0, black 50%, transparent 100%);
        -webkit-mask-image: -webkit-linear-gradient(to right, black 0, black 50%, transparent 100%);
    }
    .page-background {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
    .page-container {
        padding: var(--page-padding) 0px var(--page-padding) calc(var(--page-padding) * 1.5);
        box-sizing: border-box;
        /* width: 100%;  */
        width: calc(50% - var(--page-padding));
        height: calc(100vh - var(--nav-height) - var(--page-padding));
        /* width: 50%;
        height: calc(100vh - 96px); */
        /* padding: 64px; */
        /*border: 1px solid cyan;*/
        display: block;
        position: relative;
        overflow: hidden;
        /* overflow-x: scroll; */
    }

    .page-contents {
        display: block;
        height: 100%;
        overflow: auto;
        /* padding-right: 16px; */
        border-right: 1px solid rgba(255,255,255,0.25);

        --svrollbar-track-width: 6px;
        /* --svrollbar-track-background: #85b4b9; */
        --svrollbar-track-opacity: 1;

        --svrollbar-thumb-width: 2px;
        --svrollbar-thumb-background: rgb(255,255,255);
        --svrollbar-thumb-opacity: 0.75;
    }

    .content-slot {
        padding-right: var(--page-padding);
    }

    :global(.svlr-viewport) {
        mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
        -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
    }

    /* :global(.v-track) {
        width: 6px !important;
    } */

    :global(.v-thumb) {
        margin: 0px 0px 0px auto !important;
        -webkit-clip-path: polygon(0 50%, 100% 100%, 100% 0);
        clip-path: polygon(0 50%, 100% 100%, 100% 0);
        border-radius: 0 !important;
        transition: opacity 0.2s, clip-path 0.2s, -webkit-clip-path 0.2s, width 0.2s;
    }

    :global(.v-track:hover + .v-thumb, .v-thumb:hover) {
        -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        width: 6px !important;
    }
    
    :global(.simplebar-track.simplebar-vertical) {
        width: 6px;
        /* transition: width 0.25s; */
    }

    
    :global(.simplebar-track.simplebar-vertical.simplebar-hover, .simplebar-dragging .simplebar-track.simplebar-vertical) {
        width: 6px;
    }
    :global(.simplebar-scrollbar:before) {
        background: white;
        transition: opacity 0.5s, clip-path 0.5s, -webkit-clip-path 0.5s, width 0.5s;
        border-radius: 0px;
        top: 0px;
        bottom: 0px;
        left: initial;
        right: 0px;
        -webkit-clip-path: polygon(0 50%, 100% 100%, 100% 0);
        clip-path: polygon(0 50%, 100% 100%, 100% 0);
        width: 2px;
    }
    :global(.simplebar-hover .simplebar-scrollbar.simplebar-visible:before, .simplebar-dragging .simplebar-scrollbar.simplebar-visible:before, .simplebar-track:hover .simplebar-scrollbar:before) {
        opacity: 0.75;
        -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        width: 6px;
    }
    :global(.simplebar-scrollbar.simplebar-visible:before) {
        opacity: 0.75;
        transition-duration: 0.2s;
    }
    :global(.simplebar-wrapper) {
        mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
        -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
    }
    
    
    .page-contents::-webkit-scrollbar {
        display: none;
    }
    /* .page-contents::before {
        content: '';
        position: absolute;
        top: 0;
        width: 18px;

    } */

    @media only screen and (min-width: 960px) {
        /* .page-container {
            width: 50%;
            height: calc(100vh - var(--nav-height) - var(--page-padding));
        }
        .page-contents {
        } */
        .page-background {
            background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 70% ,rgba(0,0,0,0) 100%);
        }
    }
    
</style>