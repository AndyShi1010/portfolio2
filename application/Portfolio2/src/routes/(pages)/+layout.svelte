<script lang='ts'>
    import { fade, fly } from 'svelte/transition'
    import { Svroller, Svrollbar } from 'svrollbar'
    import { afterUpdate, beforeUpdate, onMount } from 'svelte'
    import { beforeNavigate, afterNavigate } from '$app/navigation';
    import AnimatedPage from '$lib/AnimatedPage.svelte';
    import { prevRoute } from '/src/stores.ts'

    // import { onMount } from 'svelte';
    // import { prevRoute } from '/src/stores.ts'


    // $: rt = $prevRoute;

    // console.log($prevRoute);
    // afterNavigate(() => {
    //     let count = $prevRoute.match(/\//g)!.length;
    //     if (count == 1) {
    //         console.log("Fly Y", count, $prevRoute);
    //     } else {
    //         console.log("Fly X", count, $prevRoute);
    //     }
    // })

    // import { base } from '$app/paths'
    

    // import { page } from '$app/stores'
	// import { beforeNavigate } from '$app/navigation';

    // let currPath = '';

    // beforeNavigate(() => {
    //     currPath = $page.url.pathname;
    //     console.log(currPath);
    // })
    
</script>

<div class="page-background-blur" transition:fly="{{x: -500, duration: 1000}}" />
<div class="page-background" transition:fly="{{x: -500, duration: 1000}}" />


<div class="page-container">
    <!-- <h1>{$prevRoute}</h1> -->
    <slot>
    </slot>
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
        /* margin: 64px; */
        /* width: 100%;  */
        width: 50%;
        height: calc(100vh - 96px);
        /* width: 50%;
        height: calc(100vh - 96px); */
        display: flex;
        /* padding: 64px; */
        /*border: 1px solid cyan;*/
        position: relative;
        overflow-x: scroll;
    }
    
    /*.page-contents::-webkit-scrollbar {
        display: none;
    }*/
    /* .page-contents::before {
        content: '';
        position: absolute;
        top: 0;
        width: 18px;

    } */

    @media only screen and (min-width: 960px) {
        .page-container {
            width: 50%;
            height: calc(100vh - 96px);
            /* padding: 64px; */
        }
        .page-contents {
            /* margin: 64px 64px 64px 64px; */
        }
        .page-background {
            background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 70% ,rgba(0,0,0,0) 100%);
        }
    }
    
</style>