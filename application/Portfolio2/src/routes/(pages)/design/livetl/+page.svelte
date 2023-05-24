<script lang="ts">
    import type { PageData } from './$types';
    import { fade, fly } from 'svelte/transition'
    import AnimatedPage from "$lib/AnimatedPage.svelte";

    export let data: PageData;
</script>

<AnimatedPage>
<div>
    <a href="/design">back</a>
    <h1>LiveTL</h1>
</div>

</AnimatedPage>
