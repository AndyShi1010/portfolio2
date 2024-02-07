<script lang='ts'>
    import { onMount } from 'svelte';
    import { blur, fade } from 'svelte/transition'
    import { cubicOut, quadOut } from 'svelte/easing'
    let ready = false;
    let ellipsis = "";
    import { loadProgress } from '../stores'
    onMount(() => {
        ready = true;
    });

    setInterval(() => {
        if (ellipsis.length >= 3) {
            ellipsis = "";
        } else {
            ellipsis += ".";
        }
    },500)

    let progress: Number;

    loadProgress.subscribe((val) => {
        progress = val;
    })

    let innerWidth: number = 0;
    let innerHeight: number = 0;
    $: radius = Math.max(innerHeight, innerWidth)
    function clipZoom(
		node: HTMLElement,
		params: { delay?: number; duration?: number; easing?: (t: number) => number }
	) {
		return {
			delay: params.delay,
			duration: params.duration,
			easing: cubicOut,
			css: (t: number) => {
				// return `
                //     opacity: ${t};
				// 	transform: scale(${0.25 * t + 0.75});
                //     transform-origin: left center;
				// 	filter: blur(${20 - 20 * t}px);`;
                return `
                    opacity: ${t}
                    mask-image: radial-gradient(circle ${(1 - t) * radius}px, rgba(0,0,0,0) 0%, rgba(0,0,0,${t}) 100%);
                    -webkit-mask-image: radial-gradient(circle ${(1 - t) * radius}px, rgba(0,0,0,0) 0%, rgba(0,0,0,${t}) 100%);
                    mask-image: -webkit-linear-gradient(circle ${(1 - t) * radius}px, rgba(0,0,0,0) 0%, rgba(0,0,0,${t}) 100%);
                    -webkit-mask-image: -webkit-linear-gradient(circle ${(1 - t) * radius}px, rgba(0,0,0,0) 0%, rgba(0,0,0,${t}) 100%);
                    `;
			}
		};
	}


</script>

<svelte:window bind:innerWidth bind:innerHeight  />

{#if ready}
<!-- {progress} -->
<div id="loader-container" out:clipZoom={{duration: 1500, delay: 500}}>
    <div id="loader-bkg">
        <div id="loader-contents" in:blur={{amount: 10, duration: 500}} out:blur={{amount: 10, duration: 500}}>
            <p>Loading{ellipsis}</p>
            <div id="progress-bar">

            </div>
        </div>
    </div>
</div>
{/if}

<style>
    #loader-container {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 20;
    }
    #loader-bkg {
        background-color: #1a0d1c;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #loader-contents #progress-bar{
        width: 220px;
        height: 4px;
        /* border: 1px solid rgba(255,255,255,0.5); */
        background-image: linear-gradient(to right, transparent 25%, white 50%, transparent 75%);
        background-size: 200% 200%;
        animation: progress 0.5s infinite alternate-reverse cubic-bezier(0.7, 0, 0.3, 1);
        position: relative;
    }

    #progress-bar::after {
        content: '';
        width: calc(100% + 12px);
        height: calc(100% + 12px);
        top: -6px;
        left: -6px;
        position: absolute;
        border: 1px solid rgba(255,255,255,0.5);
        box-sizing: border-box;
    }

    @keyframes progress {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: 100% 0%;
        }
    }
    p {
        font-family: var(--default-type);
        font-style: oblique;
    }
</style>