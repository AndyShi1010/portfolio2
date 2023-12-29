<script lang="ts">
	import { base } from '$app/paths';
	import { crossfade, fade } from 'svelte/transition';
	import { cubicOut, quadOut } from 'svelte/easing';
	const [send, receive] = crossfade({ duration: 300, easing: cubicOut });

	export let images: { path: string; alt: string }[];

	// let maximized = false;
	let maxImage: { path: string; alt: string } | null = null;

	let dialog: HTMLDialogElement;

	function showDialog(e: Event, imgIndex: number, id: string) {
		// console.log(document.getElementById(id));
		// let elem = document.getElementById(id)!.cloneNode();
		// document.getElementById(id)!.appendChild(elem);
		maxImage = images[imgIndex];
		// maxImage.push(images[imgIndex]);
		// console.log(maxImage);
		dialog.showModal();
	}

	function closeDialog() {
		maxImage = null;
		dialog.close();
	}
</script>

<div class="collage-container">
	<div class="collage-grid">
		{#each images as item, i}
			<div class="image-container">
				<img src="{base}{item.path}" alt={item.alt} id={item.path} />
				{#if maxImage !== item}
					<img
						src="{base}{item.path}"
						alt={item.alt}
						id={item.path}
						on:click={(e) => {
							showDialog(e, i, item.path);
						}}
						in:receive={{ key: item.path }}
						out:send={{ key: item.path }}
						class="clickable"
					/>
				{/if}
			</div>
		{/each}
	</div>

	<dialog
		class="maximized-viewer"
		bind:this={dialog}
		on:click={closeDialog}
		on:cancel|preventDefault={closeDialog}
	>
		<!-- <div class="dialog-body">

        </div> -->
		{#if maxImage}
			{#await maxImage then m}
				<img
					src="{base}{maxImage.path}"
					alt={maxImage.alt}
					in:receive|global={{ key: maxImage.path }}
					out:send|global={{ key: maxImage.path }}
				/>
			{/await}
		{/if}
	</dialog>
</div>

<style>
	dialog::backdrop {
		background-color: rgba(0,0,0,0.5);
		animation: backdrop-fade 0.25s normal 1;
        /* backdrop-filter: blur(20px); */
	}

	/* @starting-style {
		dialog[open]::backdrop {
            background-color: rgba(0,0,0,0);
        }
        dialog[open] {
            display: none;
            position: fixed;
            justify-content: center;
		    align-items: center;
            opacity: 0;
            width: 100%;
		    height: 100%;
		    max-width: 100%;
		    max-height: 100%;
        }
	} */
	dialog {
		/* display: none; */
		/* justify-content: center; */
        display: none;
        justify-content: center;
		align-items: center;
		width: calc(100% - 2 * var(--page-padding));
		height: calc(100% - 2 * var(--page-padding));
		max-width: calc(100% - 2 * var(--page-padding));
		max-height: calc(100% - 2 * var(--page-padding));
		/* top: 0;
        left: 0;
        position: absolute; 
        padding: 0; */
        padding: var(--page-padding);
		margin: 0;
		border: none;
		outline: none;
		background-color: rgba(0, 0, 0, 0);
        opacity: 1;
        transition: display 0.25s allow-discrete, overlay 0.25s allow-discrete, opacity 0.25s;
	}
	/* dialog .dialog-body {
        background-color: aqua;
        width: 100px;
        height: 100px;
    } */
	dialog[open] {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	dialog img {
		height: auto;
		width: auto;
		max-height: 100%;
		max-width: 100%;
		user-select: none;
	}
    @keyframes backdrop-fade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
	.collage-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 8px;
	}
	.image-container {
		position: relative;
		z-index: 99;
	}
	.image-container .clickable {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 999;
	}
	:global(.collage-grid img) {
		width: 100%;	
        cursor: pointer;
	}
</style>
