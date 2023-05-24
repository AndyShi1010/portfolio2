<script lang='ts'>
    import Nav from '$lib/Nav.svelte'
    import ThreeCanvas from '$lib/ThreeCanvas.svelte';
    //import { setContext, getContext, beforeUpdate } from 'svelte';
    // import { page } from '$app/stores';
    import { base } from '$app/paths'
    import { beforeNavigate, afterNavigate } from '$app/navigation';
    import { prevRoute } from '/src/stores.ts'
    import { page } from '$app/stores';
    import { scale } from 'svelte/transition'

    console.log($page.status)

    // console.log(prevRoute);

    // let previousPage: string;
    // prevRoute.subscribe((data) => {
    //     previousPage = data;
    //     // previousPage = from?.url.pathname || previousPage
    //     //console.log(data);
    // })

    
    // beforeNavigate(() => {
    //     let currRoute: string = $page.url.pathname;
    //     setContext('route', currRoute);
    //     //console.log(getContext('route'));
    //     console.log("Test");
    // })
    // let path;

    // function getPath(currentPath) {
    //     path = currentPath;
    //     setContext('route', path);
    //     console.log(getContext('route'));
    // }

    // $: getPath(from?.url.pathname);
    // export let prevPath = writable(base);
    // prevPath.subscribe()
    // let previousPage: string = base ;

    // afterNavigate(({from}) => {
    //     prevRoute.update((currentData) => {
    //         return from?.url.pathname || previousPage;
    //     });
    //     // previousPage = from?.url.pathname || previousPage
    //     //console.log(previousPage);
    // }) 
</script>

<div id="page" in:scale="{{start:1.5}}">
<!-- <ThreeCanvas /> -->
{#if $page.status <= 400}
<img src="/test.jpg" alt="Test">
{/if}
<slot></slot>
<Nav/>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Besley:wght@500&display=swap');
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        z-index: -3;
    }
</style>