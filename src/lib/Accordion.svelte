<script lang="ts">
    import { Icon } from 'svelte-remix';
    import { fly } from 'svelte/transition';
    export let title: String;
    export let open: Boolean = false;
</script>

<div class="accordion-container">
    <div class="accordion-header" on:click={() => {open = !open}}>
        <h1>{title}</h1>
        <Icon name="arrow-down-s-line" width="24" height="24" tabindex="-1" style={open ? "rotate: 180deg; transition: rotate 0.25s;": "transition: rotate 0.25s;"}/>
    </div>
    {#if open}
        <div class="accordion-body" transition:fly={{duration: 250, y: -10}}>
            <slot></slot>
        </div>
    {/if}
</div>

<style>
    h1 {
        font-size: 1.5rem;
        font-weight: normal;
    }
    .accordion-header {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        margin-block-start: 32px;
        margin-block-end: 32px;
    }
    .accordion-body {
        margin-block-start: 16px;
        margin-block-end: 16px;
    }
</style>
