<script lang="ts">
    import { Icon } from 'svelte-remix'
    import { fly } from 'svelte/transition';
    import { transitioning } from '../stores';
    import { page } from '$app/stores';
    import { base } from '$app/paths'

    import { quadOut, expoOut, elasticOut } from 'svelte/easing'

    let transition: Boolean;

	transitioning.subscribe((value) => {
		transition = value;
	});

    let innerWidth = 0;

    let showNavMenu = false;

    let showSocialMenu = false;

    $: mobile = innerWidth < 1080

    $: mobile2 = innerWidth < 640

    $: {if (mobile == false) {showNavMenu = false}}

    $: {if (mobile == false || mobile2 == false) {showSocialMenu = false}}

    function toggleNavMenu() {
        // console.log("toggle menu");
        showSocialMenu = false;
        document.body.removeEventListener('click', toggleSocialMenu);
        showNavMenu = !showNavMenu;
        if (showNavMenu == true) {
            document.body.addEventListener('click', toggleNavMenu);
        } else {
            document.body.removeEventListener('click', toggleNavMenu);
        }
    }

    function toggleSocialMenu() {
        // console.log("toggle menu");
        showNavMenu = false;
        document.body.removeEventListener('click', toggleNavMenu);
        showSocialMenu = !showSocialMenu;
        if (showSocialMenu == true) {
            document.body.addEventListener('click', toggleSocialMenu);
        } else {
            document.body.removeEventListener('click', toggleSocialMenu);
        }
    }

    // function hideMenu(node: any) {
    //     showNavMenu = false;
    //     document.body.removeEventListener('click', toggleMenu);
    // }
    
</script>

<svelte:window bind:innerWidth  />

{#if showNavMenu || showSocialMenu}
    <div class="menu-background-blur" transition:fly={{y: 40, duration: 700, easing: quadOut}}></div>
    <div class="menu-background" transition:fly={{y: 40, duration: 700, easing: quadOut}}></div>
{/if}

{#if mobile}
    <div id="nav">
        <div id="nav-bar">
            <div id="nav-pages">
                <button type="button" id="hamburger-button" on:click|stopPropagation={toggleNavMenu} class={showNavMenu ? "menu-open" : ""}>
                    <Icon name="menu-5-line" width="20" height="20" tabindex="-1"/>
                </button>
                <div id="nav-menu" class:disabled={showNavMenu == false}>
                {#if showNavMenu}
                    <a href="{base}/" class="menu-link" 
                            in:fly={{y: 40, duration: 1000, delay: 500, easing: expoOut}} 
                            out:fly={{y: 40, duration: 1000, delay: 300, easing: expoOut}}
                        >Home</a>
                    <a href="{base}/about" class="menu-link" 
                        in:fly={{y: 40, duration: 1000, delay: 600, easing: expoOut}} 
                        out:fly={{y: 40, duration: 1000, delay: 200, easing: expoOut}}
                    >About</a>
                    <a href="{base}/code" class="menu-link" 
                        in:fly={{y: 40, duration: 1000, delay: 700, easing: expoOut}} 
                        out:fly={{y: 40, duration: 1000, delay: 100, easing: expoOut}}
                    >Code</a>
                    <a href="{base}/design" class="menu-link" 
                        in:fly={{y: 40, duration: 1000, delay: 800, easing: expoOut}} 
                        out:fly={{y: 40, duration: 1000, easing: expoOut}}
                    >Design</a>
                {/if}
                </div>
            </div>
            <div id="nav-socials">
            {#if mobile2}
                <button type="button" id="hamburger-button" on:click|stopPropagation={toggleSocialMenu} class={showSocialMenu ? "menu-open" : ""}>
                    <Icon name="user-heart-line" width="20" height="20" tabindex="-1"/>
                </button>
                <div id="social-menu" class:disabled={showSocialMenu == false}>
                {#if showSocialMenu}
                    <a href="https://github.com/AndyShi1010" target="_blank" 
                        in:fly={{y: 40, duration: 1000, delay: 500, easing: expoOut}} 
                        out:fly={{y: 40, duration: 1000, delay: 300, easing: expoOut}}
                    >
                        <Icon name="github-line" tabindex="-1"/>
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/andyshi10/" target="_blank" 
                        in:fly={{y: 40, duration: 1000, delay: 600, easing: expoOut}} 
                        out:fly={{y: 40, duration: 1000, delay: 200, easing: expoOut}}
                    >
                        <Icon name="linkedin-box-line" tabindex="-1"/>
                        LinkedIn
                    </a>
                    <a href="https://twitter.com/and0shi" target="_blank" 
                        in:fly={{y: 40, duration: 1000, delay: 700, easing: expoOut}} 
                        out:fly={{y: 40, duration: 1000, delay: 100, easing: expoOut}}
                    >
                        <Icon name="twitter-x-line" tabindex="-1"/>
                        X
                    </a>
                    <a href="https://www.instagram.com/and0shi/" target="_blank"
                        in:fly={{y: 40, duration: 1000, delay: 800, easing: expoOut}} 
                        out:fly={{y: 40, duration: 1000, easing: expoOut}}
                    >
                        <Icon name="instagram-line" tabindex="-1"/>
                        Instagram
                    </a>
                {/if}
                </div>
            {:else}
                <a href="https://github.com/AndyShi1010" class="social-link" target="_blank">
                    <Icon name="github-line" tabindex="-1"/>
                </a>
                <a href="https://www.linkedin.com/in/andyshi10/" class="social-link" target="_blank">
                    <Icon name="linkedin-box-line" tabindex="-1"/>
                </a>
                <a href="https://twitter.com/and0shi" class="social-link" target="_blank">
                    <Icon name="twitter-x-line" tabindex="-1"/>
                </a>
                <a href="https://www.instagram.com/and0shi/" class="social-link" target="_blank">
                    <Icon name="instagram-line" tabindex="-1"/>
                </a>
            {/if}
        </div>
        </div>
    </div>
{:else}
    <div id="nav">
        <div id="nav-bar">
            <div id="nav-pages">
                <a href="{base}/" id="home-button"><Icon name="home-4-line" width="20" height="20" tabindex="-1"/></a>
                <!-- <a id="home" href="/">
                    <HomeOutlined size="20"/>
                </a> -->
                <a href="{base}/about" class="{$page.url.pathname.includes("/about")  ? "selected" : ""} {"nav-button"}" style={transition ? "pointer-events: none;" : ""}>About</a>
                <a href="{base}/code" class="{$page.url.pathname.includes("/code") ? "selected" : ""} {"nav-button"}" style={transition ? "pointer-events: none;" : ""}>Code</a>
                <a href="{base}/design" class="{$page.url.pathname.includes("/design") ? "selected" : ""} {"nav-button"}" style={transition ? "pointer-events: none;" : ""}>Design</a>
            </div>
            <div id="nav-socials">
                <a href="https://github.com/AndyShi1010" class="social-link" target="_blank">
                    <Icon name="github-line" tabindex="-1"/>
                </a>
                <a href="https://www.linkedin.com/in/andyshi10/" class="social-link" target="_blank">
                    <Icon name="linkedin-box-line" tabindex="-1"/>
                </a>
                <a href="https://twitter.com/and0shi" class="social-link" target="_blank">
                    <Icon name="twitter-x-line" tabindex="-1"/>
                </a>
                <a href="https://www.instagram.com/and0shi/" class="social-link" target="_blank">
                    <Icon name="instagram-line" tabindex="-1"/>
                </a>
            </div>
        </div>
    </div>
{/if}

<style>
    a, a:visited, button {
        color: white;
        text-decoration: none;
        display: flex;
        position: relative;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
    }
    .disabled {
        pointer-events: none;
        cursor: default;
    }
    div#nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: fixed;
        bottom: 0;
        left: 0;
        /* height: var(--nav-height); */
        /* background-color: rgba(0,0,0,0.2); */
        margin-bottom: var(--page-padding);
        width: 100%;
    }
    #nav-bar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: var(--nav-height);
    }

    #nav-pages {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 24px;
        margin-left: var(--page-padding);
    }

    #home-button, #hamburger-button, .nav-button {
        background-color: transparent;
        color: white;
        border: none;
        transition: border 0.5s, box-shadow 0.75s, background-position 0.75s cubic-bezier(0, 0.55, 0.45, 1);
        /* background-image: linear-gradient(to bottom right, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0.0) 100%); */
        background-image: radial-gradient(farthest-side, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.0) 100%);
        background-repeat: no-repeat;
        background-position: 0px -100%;
        background-size: 100% 200%;
        box-shadow: inset 0px 0px 0px 1px rgba(255,255,255,0.5);
        font-family: var(--default-type);
        line-height: 1.2;
        font-weight: 400;
        font-size: 20px;
    }

    #home-button, #hamburger-button {
        width: 40px;
        height: 40px;
        display: inline-flex;
    }

    .nav-button {
        height: 40px;
        width: 120px;
    }
    .nav-button:hover, .nav-button.selected:hover, .nav-button:focus, #home-button:hover, #home-button:focus, #hamburger-button:hover, #hamburger-button.menu-open {
        /* border: 2px solid white; */
        box-shadow: inset 0px 0px 0px 2px rgba(255,255,255,1), inset 0px 0px 15px rgba(255,255,255,0.3), 0px 0px 20px 8px rgba(255,255,255,0.3);
        background-position: 0% 50%;
    }
    .nav-button.selected {
        box-shadow: inset 0px 0px 0px 2px rgba(255,255,255,0.75), inset 0px 0px 15px rgba(255,255,255,0.3), 0px 0px 20px 0px rgba(255,255,255,0.3);
        background-position: 0% 0%;
    }
    .nav-button::before, #home-button:before, #hamburger-button:before {
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
    .nav-button:hover::before, .nav-button:focus::before, #home-button:hover::before, #home-button:focus::before{
        border: 1px solid rgba(255,255,255,0.75);
        width: calc(100% + 12px);
        height: calc(100% + 12px);
        top: -6px;
        left: -6px;
        animation: breathe 0.75s infinite alternate-reverse cubic-bezier(0.37, 0, 0.63, 1);
        animation-delay: 0.75s;
        /* transform: scale(1.2); */
    }

    .nav-button::after, #home-button::after, #hamburger-button::after {
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
    .nav-button:hover::after, .nav-button:focus:after, #home-button:hover::after, #home-button:focus:after, #hamburger-button:hover::after, #hamburger-button:focus:after {
        border: 1px solid rgba(255,255,255,0.75);
        /* width: calc(100% + 24px);
        height: calc(100% + 24px);
        top: -12px;
        left: -12px; */
        animation: pulse 0.75s cubic-bezier(0.45, 0, 0.55, 1);
        /*                           */
        /* transform: scale(1.2); */
    }

    #nav-socials{
        margin-right: var(--page-padding);
        display: flex;
        flex-direction: row;
        gap: 12px;
        align-items: center;
    }

    .social-link {
        width: 40px;
        height: 40px;
        border: none;
        background-color: transparent;
        display: inline-flex;
        position: relative;
        height: auto;
        font-size: 36px;
        padding: 8px;
        cursor: pointer;
        transition: background-color 0.25s, box-shadow 0.75s;
    }

    .social-link:hover {
        box-shadow: inset 0px 0px 0px 2px rgba(255,255,255,1), inset 0px 0px 15px rgba(255,255,255,0.3), 0px 0px 10px 4px rgba(255,255,255,0.3);
        background-color: rgba(255,255,255,0.1);
    }

    .social-link :global(svg) {
        opacity: 0.7;
        transition: opacity 0.75s;
    }

    .social-link:hover :global(svg) {
        opacity: 1;
    }

    #nav-menu, #social-menu {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* background-color: rgba(255,255,255,0.2); */
        position: absolute;
        bottom: calc(100% + var(--page-padding));
        left: 0;
        z-index: 20;
        /* backdrop-filter: blur(20px);
        border: 2px solid rgba(255,255,255,0.2); */
        /* box-shadow: 0px 0px 20px 8px rgba(255,255,255,0.3); */
    }

    #nav-menu a, #social-menu a {
        padding: 16px;
        width: 100%;
        line-height: 1.2;
        font-weight: 400;
        font-size: 20px;
        display: flex;
        gap: 8px;
        transition: background-color 0.2s;
    }

    #nav-menu a:hover, #social-menu a:hover {
        text-decoration: underline;
    }

    .menu-background-blur {
        width: 100%;
        height: 60svh;
        position: absolute;
        bottom: 0;
        left: 0;
        backdrop-filter: blur(20px) saturate(0.8) brightness(0.8);
        mask-image: linear-gradient(to top, black 0, black 70%, transparent 100%);
        -webkit-mask-image: linear-gradient(to top, black 0, black 70%, transparent 100%);
        mask-image: -webkit-linear-gradient(to top, black 0, black 70%, transparent 100%);
        -webkit-mask-image: -webkit-linear-gradient(to top, black 0, black 70%, transparent 100%);
    }

    .menu-background {
        width: 100%;
        height: 60svh;
        position: absolute;
        bottom: 0;
        left: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%),;
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