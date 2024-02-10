<script lang="ts">
	import { fade, fly, blur } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

	let taglines = ['Aspiring creative technologist.', 'I do nerd stuff.', 'I make cool stuff sometimes.', 'Design is my passion. Code is my craft.', 'Professional button-masher.', "My computer goes beep boop beep boop.", "Just a monkey slamming on a keyboard."];

	let currTaglineIndex = Math.ceil(Math.random() * taglines.length - 1);

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

	function lineswipe(
		node: HTMLElement,
		params: { delay?: number; duration?: number; easing?: (t: number) => number }
	) {
		return {
			delay: params.delay,
			duration: params.duration,
			easing: quadOut,
			css: (t: number) => {
				return `
					animation: swipe 1s infinite forwards ease-in-out;`;
			}
		};
	}
</script>

<!-- <div class="wrapper"> -->
	<!-- <div> -->
    <!-- <h3>Work in progress</h3> -->
	<div class="container">
		<span id="hello" in:blurfade={{ duration: 750, delay: 1200 }} out:blurfade={{ duration: 500 }}
			>Hello! I am</span
		>
		<span id="name1" in:blurfade={{ duration: 750, delay: 1400 }} out:blurfade={{ duration: 500 }}
			>Andy Shi</span
		>
        <span id="tagline" in:blurfade={{ duration: 750, delay: 2000}} out:blurfade={{ duration: 500 }}>
			{taglines[currTaglineIndex]}
			{#key currTaglineIndex}
				<div id="underline" ></div>
			{/key}
		</span>
	</div>


<style>
    .container {
		display: flex;
		flex-direction: column;
		position: absolute;
		bottom: 20%;
		top: initial;
		left: var(--page-padding);
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
		font-size: 32px;
        line-height: 1.5;
	}
	#name1,
	#name2 {
		font-size: 64px;
        line-height: 1;
	}
    #tagline {
        margin-top: var(--page-padding);
		width: max-content;
        font-size: 18px;
        font-style: italic;
        overflow: hidden;
		position: relative; 
		padding: 8px 4px;
    }

	/* #tagline::after {
		content: '';
		height: 100%;
		width: 2px;
		position: absolute;
		top: 0;
		right: 0;
		background-color: white;
		animation: blink 0.5s 0.5s infinite alternate cubic-bezier(0.7, 0, 0.3, 1); 
	} */
	#underline {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.5) 100%);
		animation: swipe 1s 1 forwards cubic-bezier(0.7, 0, 0.3, 1); 
	}
	@keyframes swipe {
		0% {
			right: 100%;
			left: 0;
			width: 0;
		}
		50% {
			right: 0;
			width: 100%;
		}
		100% {
			right: 0;
			left: 100%;
			width: 0%;
		}
	}
	/* @keyframes blink {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	} */
	@media only screen and (min-width: 1080px) {
		.container {
			bottom: initial;
			top: 50%;
			left: calc(var(--page-padding) * 2);
			transform: translateY(calc(-50% - var(--nav-height) / 2 - var(--page-padding)));
		}
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
			font-size: 24px;
		}
	}
</style>
