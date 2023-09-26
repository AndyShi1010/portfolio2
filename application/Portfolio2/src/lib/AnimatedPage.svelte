<script lang='ts'>
    import { fade, fly } from 'svelte/transition'
    import { flip } from 'svelte/animate'
    import { page } from '$app/stores';
    import { onMount, onDestroy } from 'svelte'
    import { beforeNavigate, afterNavigate } from '$app/navigation';
    import 'simplebar'
    // import ResizeObserver from 'resize-observer-polyfill';
    // window.ResizeObserver = ResizeObserver;
    // import { Svroller, Svrollbar } from 'svrollbar'
    // import { onMount } from 'svelte';
    // import { prevRoute } from '/src/stores.ts'


    // onMount(() => {
    //     let count = $prevRoute.match(/\//g)!.length;
    //     if (count == 1) {
    //         console.log("Fly Y", count, $prevRoute);
    //     } else {
    //         console.log("Fly X", count, $prevRoute);
    //     }
    // })

    // / -> /a Y
    // /a -> /a/b X
    // /a/b -> /a -X

    // import { prevRoute } from '/src/stores.ts'
    let node;
    $: fromRoute = "/";
    $: toRoute = "/";
    let subToPar = false;
    
    function checkSub() {
        let currPage = $page.url.pathname
        if (currPage.match(/\//g) != null && currPage.match(/\//g)!.length > 1) {
            console.log("sub");
            subToPar = true
        }
    }
    
    onMount(() => {
        checkSub();
        window.ResizeObserver = ResizeObserver;
    });

    let animationState: number;

    // beforeNavigate(({from, to}) => {
    //     //console.log(from?.url.pathname || "/", to?.url.pathname);
    //     fromRoute = from?.url.pathname || "/"
    //     toRoute = to?.url.pathname || "/"
    //     console.log(fromRoute + " to " + toRoute)
    //     let fromCount = fromRoute.match(/\//g).length
    //     let toCount = toRoute.match(/\//g).length
    //     console.log(fromCount, toCount);
    //     if (fromCount > 1 && toCount <= 1) {
    //         subToPar = true;
    //     }
    // })

    // onDestroy(() => {
    //     console.log("destroy");
    //     console.log(node);

    // })

    //console.log(animationState);

</script>

<svelte:window />

{#if subToPar}
<div class="animated content-container" bind:this={node} in:fly="{{x: 10, duration: 200, delay: 200}}" out:fly="{{x: 10, duration: 200}}">
    <div data-simplebar>
        <a href="/">close</a>
        <h2>Y</h2>
        <slot></slot>
    </div>
</div>
{:else}
<div class="animated content-container" bind:this={node} in:fly="{{x: -10, duration: 1000, delay: 1000}}" out:fly="{{x: -10, duration: 200}}">
    <div data-simplebar>
        <a href="/">close</a>
        <h2>X</h2>
        <slot></slot>
    </div>
</div>
{/if}

<!-- {#if invoker == "/about"} -->
<!-- <div data-simplebar class="animated-y"  in:fly="{{y: 10, duration: 1000, delay:500}}" out:fly="{{y:10, duration:500}}">
    <slot></slot>
</div> -->
<!-- {:else}
<div class="animated-x"  in:fly="{{x: 10, duration: 2000, delay:500}}" out:fly="{{x:10, duration:500}}">
    <slot></slot>
</div>
{/if} -->

<!-- <slot></slot> -->


<style>
    a {
        color: white;
    }
    .content-container {
        -ms-overflow-style: none;
        scrollbar-width: none;

        --svrollbar-track-width: 20px;
        --svrollbar-track-background: #85b4b9;
        --svrollbar-track-opacity: 1;

        --svrollbar-thumb-width: 10px;
        --svrollbar-thumb-background: #d9ab55;
        --svrollbar-thumb-opacity: 1;
    }
    .content-container {
        /* position: absolute;
        top: 0;
        left: 0; */
        /*-ms-overflow-style: none;
        scrollbar-width: none;*/
        /* overflow-x: hidden; */
        overflow-y: scroll;
        height: 100%; 
        /* margin: 0px 64px 64px 64px; */
        /* min-width: calc(100% - 64px); */
        /* width: calc(100% - 64px); */
        width: 100%;
        /* min-width: calc(100% - 128px); */
        display: block;
        /* margin: 64px; */
        /* height: 100%; */
        /* border: 1px solid rgba(255,255,255,0.5); */
        mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 16px), transparent 100%);
        -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 16px), transparent 100%);

    }
    .content-container > div {
        width: 100%;
        --svrollbar-track-width: 20px;
        --svrollbar-track-background: #85b4b9;
        --svrollbar-track-opacity: 1;

        --svrollbar-thumb-width: 10px;
        --svrollbar-thumb-background: #d9ab55;
        --svrollbar-thumb-opacity: 1;
    }
</style>