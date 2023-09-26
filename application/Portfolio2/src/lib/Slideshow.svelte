<script lang="ts">
	import type { SvelteComponentTyped } from 'svelte';
    import { Icon } from 'svelte-remix'
    import { fade, fly, scale } from 'svelte/transition'
    import { onMount } from 'svelte';
    let loading = true;
    let currSlide = 0;
    let updateSlide;
    let contents: HTMLDivElement;

    let totalSlides = 0;
    $: totalSlides = contents?.children.length;
    $: currSlideElem = contents?.children[currSlide]


    const nextSlide = () => { 
        const prev = currSlide;
        if (currSlide >= totalSlides - 1) {
            currSlide = 0;
        } else {
            currSlide++;
        }
        // console.log(contents?.children[currSlide])
        Array.from(contents?.children).forEach((e, i) => {
            const elem = e as HTMLElement;
            // if (e.nodeName == "VIDEO") {
            //     let elem = e as HTMLMediaElement 
            //     elem.pause();
            //     elem.inert = true;
            // }
            elem.className = "";
            // void elem.offsetWidth;
            if (i == prev) {
                elem.classList.add("animate-out-left");
                if (elem.nodeName == "VIDEO") {
                    let mediaElem = elem as HTMLMediaElement 
                    mediaElem.pause();
                    mediaElem.inert = true;
                }
            } 
            else if (i == currSlide) {
                // console.log(currSlide, e);
                elem.classList.add("animate-in-right");
                e.classList.add("current");
                if (elem.nodeName == "VIDEO") {
                    let mediaElem = elem as HTMLMediaElement 
                    // elem.pause();
                    mediaElem.inert = false;
                }
            }
        })
        // contents?.children[currSlide].classList.add("current")
    }
   

    const prevSlide = () => {
        const prev = currSlide;
        if (currSlide <= 0) {
            currSlide = totalSlides - 1;
        } else {
            currSlide--;
        }
        Array.from(contents?.children).forEach((e, i) => {
            const elem = e as HTMLElement;
            elem.className = "";
            // void elem.offsetWidth;
            if (i == prev) {
                elem.classList.add("animate-out-right");
                if (elem.nodeName == "VIDEO") {
                    let mediaElem = elem as HTMLMediaElement 
                    mediaElem.pause();
                    mediaElem.inert = true;
                }
            } 
            else if (i == currSlide) {
                // console.log(currSlide, e);
                elem.classList.add("animate-in-left");
                e.classList.add("current");
                if (elem.nodeName == "VIDEO") {
                    let mediaElem = elem as HTMLMediaElement 
                    // elem.pause();
                    mediaElem.inert = false;
                }
            }
        })
    }

    // $: {
    //     Array.from(contents?.children).forEach((e, i) => {
    //         console.log("Update", e);
    //         if (e.nodeName == "VIDEO") {
    //             let elem = e as HTMLMediaElement 
    //             elem.pause();
    //             elem.inert = true;
    //         }
    //     });
    // }


    onMount(() => {
        loading = false;
        console.log("mount")
        contents?.children[0].classList.add("current");
    })


</script>

<div class="slideshow-container">
    <!-- <svelte:component this={contents}></svelte:component> -->

    {#if loading}
        <div id="slide-loader" class="loader"></div>
    {/if}
    
    <div class="slides-main">

        <div class="slides" bind:this={contents}>
            <slot />
        </div>

        <div class="slides-controls">
            <div class="indicator">
                {#if loading}
                    <div id="text-loader" class="loader"></div>
                {:else}
                    Slide {currSlide + 1} of {totalSlides}
                {/if}
            </div>
            <div class="nav-buttons">
                <button id="prev-button" on:click={prevSlide} disabled={loading}>
                    <Icon name="arrow-left-s-line" width="24" tabindex="-1"></Icon>
                </button>
            
                <button id="next-button" on:click={nextSlide} disabled={loading}>
                    <Icon name="arrow-right-s-line" width="24" tabindex="-1"></Icon>
                </button>
            </div>
        </div>
    </div>
    

</div>

<style>
    :global(.slides > *) {
        width: 100%;
        height: 100%;
        aspect-ratio: 16 / 9;
        object-fit: contain;
        /* position: absolute;
        top: 0;
        left: 0; */
        display: none;
        transition: opacity 0.15s;
        /* display: block; */
        box-sizing: border-box;
        z-index: 1;
    }
    :global(.slides > *.animate-in-left) {
        animation: slide-from-left 0.2s;
    }
    :global(.slides > *.animate-in-right) {
        animation: slide-from-right 0.2s;
    }
    :global(.slides > *.animate-out-left) {
        animation: slide-from-left 0.2s reverse;
    }
    :global(.slides > *.animate-out-right) {
        animation: slide-from-right 0.2s reverse;
    }
    :global(.slides > *.current) {
        /* position: relative; */
        display: block;
        transform: translateX(0);
        z-index: 10;
    }
    .slides-main {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .slides {
        /* overflow: hidden; */
        width: 100%;
        height: 100%;
        position: relative;
        /* background-color: rgba(255,255,255,0.10); */
        /* backdrop-filter: blur(40px); */
        border: 1px solid rgba(255,255,255,0.15);
        background-color: rgba(0,0,0,0.2);
        overflow: hidden;
    }
    .loader {
        z-index: 10;
        background-image: linear-gradient(to bottom right, transparent 0%, transparent 25%, rgba(255, 255, 255, 0.15) 50%, transparent 75%, transparent 100%);
        background-size: 200% 200%;
        background-repeat: no-repeat;
        animation: skeleton 0.5s infinite alternate-reverse;
    }
    #slide-loader {
        width: 100%;
        height: 100%;
        position: relative;
        aspect-ratio: 16 / 9;
    }
    #text-loader {
        width: 120px;
        height: 32px;
    }

    .slides-controls {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 8px;
        align-items: center;
    }

    .indicator {
        padding-left: 8px;
    }

    .nav-buttons {
        display: flex;
        gap: 8px;
    }

    .nav-buttons button {
        border: none;
        background-color: transparent;
        display: inline-flex;
        position: relative;
        height: auto;
        font-size: 36px;
        padding: 8px;
        box-shadow: inset 0px 0px 0px 1px rgba(255,255,255,0.5);
    }

    .nav-buttons button:not(:disabled) {
        transition: background-color 0.25s, box-shadow 0.25s;
        color: white;
    }

    .nav-buttons button:not(:disabled):hover {
        box-shadow: inset 0px 0px 0px 2px rgba(255,255,255,1), inset 0px 0px 15px rgba(255,255,255,0.3), 0px 0px 12px 2px rgba(255,255,255,0.3)
    }

    .nav-buttons button:disabled {
        color: rgba(255,255,255,0.5);
    }

    .nav-buttons button :global(svg) {
        transition: transform 0.2s ease-out;
    }

    .nav-buttons #next-button:not(:disabled):active :global(svg) {
        transform: translateX(4px);
    }

    .nav-buttons #prev-button:not(:disabled):active :global(svg) {
        transform: translateX(-4px);
    }

    @keyframes skeleton{
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: 100% 100%;
        }
    }

    @keyframes slide-from-right {
        0% {
            transform: translateX(100px); 
            opacity: 0;
        }
        100% {
            transform: translateX(0px);
            opacity: 1; 
        }
    }

    @keyframes slide-from-left {
        0% {
            transform: translateX(-100px); 
            opacity: 0;
        }
        100% {
            transform: translateX(0px); 
            opacity: 1;
        }
    }
</style>

