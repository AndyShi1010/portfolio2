<script>
    export let text = "";
</script>

<p class="chip">
    {text}
</p>

<style>
    .chip {
        padding: 6px 8px;
        background-color: rgba(255,255,255,0.25);
        width: min-content;
        font-size: 14px;
        line-height: 1;
        font-family: var(--default-type);
        display: inline;
    }
</style>