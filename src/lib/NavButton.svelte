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
    
</style>