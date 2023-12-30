<script lang="ts">
    import { page } from '$app/stores';
    import { blur } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';
</script>

<div class="container">
    <h1 in:blur={{amount: 10, duration: 500, delay: 1250, easing: quadOut}}>{$page.status}</h1>
    <h2 in:blur={{amount: 10, duration: 500, delay: 1500, easing: quadOut}}>{$page.error?.message}</h2>
</div>

<style>
    div {
        width: 100%;
        height: calc(100svh - var(--page-padding) * 2 - var(--nav-height));
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h2 {
        font-style: italic;
        font-size: 24px;
        font-weight: normal;
    }
</style>