<script>
    export let to = "";
    export let icon = "none";
</script>

<a  
    style={icon == "iconLeft" ? "padding: 8px 16px 8px 12px; gap: 8px; flex-direction: row": icon == "iconRight" ? "padding: 8px 12px 8px 16px; gap: 8px; flex-direction: row-reverse;" : icon == "iconOnly" ? "padding: 8px 8px;" : "padding: 8px 16px;"} 
    href={to} {...$$restProps}>
    <slot></slot>
</a>

<style>
    a {
        font-family: var(--default-type);
        font-size: 14px;
        text-decoration: none;
        position: relative;
        display: flex;
        align-items: center;
        width: min-content;
        height: min-content;
        white-space: nowrap;
        box-shadow: inset 0px 0px 0px 1px rgba(255,255,255,0.5);
        transition: background-color 0.25s, box-shadow 0.75s;;
        cursor: pointer;
    }
    a:hover {
        box-shadow: inset 0px 0px 0px 2px rgba(255,255,255,1), inset 0px 0px 15px rgba(255,255,255,0.3), 0px 0px 10px 4px rgba(255,255,255,0.3);
        background-color: rgba(255,255,255,0.1);
    }
    @media only screen and (min-width: 1080px) { 
        a {
            font-size: 16px;
        }
    }
</style>