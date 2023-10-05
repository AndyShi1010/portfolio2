<script>
    import { fade, fly, blur } from 'svelte/transition'

    let taglines = []
</script>

<div>
<!-- <div> -->
    <span id="hello" in:blur={{amount: 10, duration: 1000, delay: 800}} out:blur={{amount: 10, duration: 500}}>Hello! I am</span>
    <span id="name1" in:blur={{amount: 10, duration: 1000, delay: 1000}} out:blur={{amount: 10, duration: 500}}>Andy Shi</span>
    <span id="tagline"></span>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 50%;
        left: var(--page-padding);
        transform: translateY(calc(-50% - var(--nav-height) - var(--page-padding)));
    }
    #hello {
        font-size: 48px;
    }
    #name1, #name2 {
        font-size: 128px;
    }
</style>
