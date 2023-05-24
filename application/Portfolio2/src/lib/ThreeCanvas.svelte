<script lang="ts">
    import { onMount } from 'svelte';
    import { createScene } from "$lib/scene";
    let canvas: Element;
    onMount(() => {
        createScene(canvas)
    });
</script>

<canvas id="three-canvas" bind:this={canvas}></canvas>

<style>
    #three-canvas {
			position: absolute;
			top: 0;
			right: 0;
			width: 50vw;
			height: 100vh;
			z-index: -2;
		}
</style>