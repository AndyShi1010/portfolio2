<script>
    import { onMount } from 'svelte';
    import { blur, fade } from 'svelte/transition'
    let ready = false;
    let ellipsis = "";
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


</script>

{#if ready}
<div id="loader-container" out:fade={{duration: 1000, delay: 500}}>
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
        background-color: #28142A;
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