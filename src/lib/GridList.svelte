<script lang="ts">
    export let items;
</script>


<div class="grid-items">
    <slot></slot>
</div>


<style>
    .grid-items {
        display: flex; 
        flex-direction: column;
        gap: 16px;
    }
</style>