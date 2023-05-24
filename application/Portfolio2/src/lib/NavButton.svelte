<script lang='ts'>
    export let href: string = "";
</script>

<a href={href} class="page-link">
    <slot></slot>
</a>

<style>
    a, a:visited {
        color: white;
        text-decoration: none;
    }
    .page-link {
        padding: 4px 24px;
        border: 2px solid transparent;
        font-family: 'Besley', serif;
        font-weight: 400;
        font-size: 16px;
        transition: border 0.5s, box-shadow 0.75s;
        background: linear-gradient(to bottom right, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 60%, rgba(255,255,255,0) 100%);
        background-repeat: no-repeat;
        background-position: -100% -100%;
    }
    .page-link:hover {
        border: 2px solid white;
        box-shadow: inset 0px 0px 15px rgba(255,255,255,0.3), 0px 0px 20px 5px rgba(255,255,255,0.3);
    }
</style>