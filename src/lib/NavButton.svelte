<script lang='ts'>
    export let href: string = "";
    import { transitioning } from '../stores';
    import { page } from '$app/stores';

    let transition: Boolean;

	transitioning.subscribe((value) => {
		transition = value;
	});

    console.log($page.route)
</script>

<a style={transition ? "pointer-events: none;" : ""} href={href} class="{$page.url.pathname.includes(href) && href != "/" ? "selected" : ""} {href=="/" ? "home-button" : "nav-button"}">
    <!-- {$page.url.pathname} -->
    <!-- {transition} -->
    <!-- {href} -->
    <slot></slot>
</a>

<style>
    a, a:visited {
        color: white;
        text-decoration: none;
        position: relative;
        transition: border 0.5s, box-shadow 0.75s, background-position 0.75s cubic-bezier(0, 0.55, 0.45, 1);
        background-image: linear-gradient(to bottom right, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 70%, rgba(255,255,255,0.0) 100%);
        background-repeat: no-repeat;
        background-position: 0px 0px;
        background-size: 200% 200%;
        box-shadow: inset 0px 0px 0px 1px rgba(255,255,255,0.5);
        box-sizing: border-box;
    }
    a:hover, a:focus {
        /* border: 2px solid white; */
        box-shadow: inset 0px 0px 0px 2px rgba(255,255,255,1), inset 0px 0px 15px rgba(255,255,255,0.3), 0px 0px 20px 8px rgba(255,255,255,0.3);
        background-position: 0% 100%;
    }
    a.selected {
        box-shadow: inset 0px 0px 0px 2px rgba(255,255,255,0.75), inset 0px 0px 15px rgba(255,255,255,0.3), 0px 0px 20px 0px rgba(255,255,255,0.3);
    }
    a::before {
        content: '';
        border: 1px solid rgba(255,255,255,0);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        transition: border 0.5s, top 0.5s, left 0.5s, width 0.5s, height 0.5s;
        transition-timing-function: cubic-bezier(0.76, 0, 0.24, 1);
        box-sizing: border-box;
    }
    a:hover::before, a:focus:before {
        border: 1px solid rgba(255,255,255,0.75);
        width: calc(100% + 12px);
        height: calc(100% + 12px);
        top: -6px;
        left: -6px;
        animation: breathe 0.75s infinite alternate-reverse cubic-bezier(0.37, 0, 0.63, 1);
        animation-delay: 0.75s;
        /* transform: scale(1.2); */
    }

    a::after {
        content: '';
        border: 1px solid rgba(255,255,255,0);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        /* transition: border 0.75s, top 0.75s, left 0.75s, width 0.75s, height 0.75s;
        transition-timing-function: cubic-bezier(0.76, 0, 0.24, 1); */
        box-sizing: border-box;
    }
    a:hover::after, a:focus:after {
        border: 1px solid rgba(255,255,255,0.75);
        /* width: calc(100% + 24px);
        height: calc(100% + 24px);
        top: -12px;
        left: -12px; */
        animation: pulse 0.75s cubic-bezier(0.45, 0, 0.55, 1);
        /*                           */
        /* transform: scale(1.2); */
    }
    .nav-button {
        padding: 8px 32px;
        margin: 0;
        /* border: 2px solid transparent; */
        font-family: var(--default-type);
        line-height: 1.2;
        font-weight: 400;
        font-size: 20px;
    }
    @keyframes breathe {
        from {
            border: 1px solid rgba(255,255,255,0.35);
            width: calc(100% + 6px);
            height: calc(100% + 6px);
            top: -3px;
            left: -3px;
        }
        to {
            border: 1px solid rgba(255,255,255,0.75);
            width: calc(100% + 12px);
            height: calc(100% + 12px);
            top: -6px;
            left: -6px;
        }
    }
    @keyframes pulse {
        0% {
            border: 1px solid rgba(255,255,255,0.35);
        }
        50% {
            border: 1px solid rgba(255,255,255,0.6);
        }
        100% {
            border: 1px solid rgba(255,255,255,0);
            width: calc(100% + 24px);
            height: calc(100% + 24px);
            top: -12px;
            left: -12px;
        }
    }
</style>