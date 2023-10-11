<script>
    import { base } from '$app/paths'
</script>

<div class="break">
    <img src="{base}/End1.svg" alt="End 1">
    <div id="line"></div>
    <img src="{base}/End2.svg" alt="End 2">
</div>

<style>
    .break {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        position: relative;
        opacity: 1;
        user-select: none;
        pointer-events: none;
        opacity: 0.75;
        margin-block-start: 24px;
        margin-block-end: 24px;
    }
    #line {
        width: calc(100% - 8px);
        height: 1px;
        background-color: white;
        position: absolute;
        left: 6px;
    }
</style>