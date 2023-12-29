<script lang="ts">
	import { fade, fly, blur } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

	let taglines = ['I like creating immersive experiences.', 'I do nerd stuff.', 'Just another guy on the internet.', 'Graphic design is my passion.'];

	let currTaglineIndex = 0;

	setInterval(() => {
		currTaglineIndex++;
		if (currTaglineIndex >= taglines.length) {
			currTaglineIndex = 0;
		}
	}, 4000);

	function blurfade(
		node: HTMLElement,
		params: { delay?: number; duration?: number; easing?: (t: number) => number }
	) {
		return {
			delay: params.delay,
			duration: params.duration,
			easing: quadOut,
			css: (t: number) => {
				return `
                    opacity: ${t};
					transform: scale(${0.25 * t + 0.75});
                    transform-origin: left center;
					filter: blur(${20 - 20 * t}px);`;
			}
		};
	}

	function blurswipe(
		node: HTMLElement,
		params: { delay?: number; duration?: number; easing?: (t: number) => number }
	) {
		return {
			delay: params.delay,
			duration: params.duration,
			easing: quadOut,
			css: (t: number) => {
				return `
                    opacity: ${t};
					transform: scaleX(${t});
                    transform-origin: left center;
					filter: blur(${20 - 20 * t}px);`;
			}
		};
	}
</script>

<!-- <div class="wrapper"> -->
	<!-- <div> -->
    <!-- <h3>Work in progress</h3> -->
	<div class="container">
		<span id="hello" in:blurfade={{ duration: 1000, delay: 500 }} out:blurfade={{ duration: 500 }}
			>Hello! I am</span
		>
		<span id="name1" in:blurfade={{ duration: 1000, delay: 750 }} out:blurfade={{ duration: 500 }}
			>Andy Shi</span
		>
        <span id="tagline" in:blurfade={{ duration: 1000, delay: 1250}} out:blurfade={{ duration: 500 }}>{taglines[currTaglineIndex]}</span>
	</div>


<style>
    .container {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 50%;
		left: calc(var(--page-padding) * 2);
		transform: translateY(calc(-50% - var(--nav-height) / 2 - var(--page-padding)));
		/* outline: solid 1px rgba(0,0,0,0.5); */
	}
	/* .guide {
        position: absolute;
        top: 50%;
        width: 100%;
        height: 1px;
        background-color: white;
    } */

	#hello {
		font-size: 48px;
        line-height: 1.5;
	}
	#name1,
	#name2 {
		font-size: 128px;
        line-height: 1;
	}
    #tagline {
        margin-top: var(--page-padding);
        font-size: 24px;
        font-style: italic;
        overflow: hidden; 
        white-space: nowrap;
        border-right: 4px solid white; 
        animation: typewriter 1s 1s steps(20, end), type-cursor 1s infinite;
    }

    @keyframes typewriter {
    0% { width: 0 }
    100% { width: 100% }
    }

    @keyframes type-cursor {
    0%, 100% { border-color: transparent }
    50% { border-color: white; }
    }

</style>
