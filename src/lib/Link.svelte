<script>
    export let props = {}
</script>

<a {...$$restProps}>
    <slot></slot>
</a>

<style>
    a, a:visited {
        color: white;
        position: relative;
        text-decoration: none;
        font-size: 18px;
        padding-left: 2px;
        padding-right: 2px;
    }

    a:hover, a:visited:hover {
        /* color: black; */
    }

    a::before, a:visited::before {
        content: '';
        width: 100%;
        height: 1px;
        background: repeating-linear-gradient(90deg,#fff,#fff 2px, transparent 2px,transparent 4px);
        position: absolute;
        bottom: 2px;
        left: 0;
        transition: height 0.2s;
    }

    a:hover::before, a:visited:hover::before {
        background: white;
        height: 2px;
    }
</style>