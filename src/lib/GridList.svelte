<script lang="ts">
    export let isList: boolean = false;
</script>

{#if isList}
    <div class="list-items">
        <slot></slot>
    </div>
{:else}
    <div class="grid-items">
        <slot></slot>
    </div>
{/if}

<style>
    .grid-items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
        gap: 32px;
    }
</style>