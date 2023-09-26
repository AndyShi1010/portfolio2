<script>
    import { Icon } from 'svelte-remix'
    import NavButton from '$lib/NavButton.svelte';
</script>

<div id="nav">
    <div id="nav-bar">
        <div id="nav-pages">
            <NavButton href="/"><Icon name="home-4-line" width="20" height="20" tabindex="-1"/></NavButton>
            <!-- <a id="home" href="/">
                <HomeOutlined size="20"/>
            </a> -->
            <NavButton href="/about">About</NavButton>
            <NavButton href="/code">Code</NavButton>
            <NavButton href="/design">Design</NavButton>
        </div>
        <div id="nav-socials">
            <a href="https://github.com/AndyShi1010" class="social-link">
                <Icon name="github-line" tabindex="-1"/>
            </a>
            <a href="" class="social-link">
                <Icon name="linkedin-box-line" tabindex="-1"/>
            </a>
            <a href="https://twitter.com/and0shi" class="social-link">
                <Icon name="twitter-x-line" tabindex="-1"/>
            </a>
            <a href="https://www.instagram.com/and0shi/" class="social-link">
                <Icon name="instagram-line" tabindex="-1"/>
            </a>
        </div>
    </div>
</div>

<style>
    /* @font-face{
        font-family: 'Besley';
        font-style: normal;
        src: url('https://fonts.googleapis.com/css2?family=Besley:wght@500&display=swap');
    }  */
    a, a:visited {
        color: white;
        text-decoration: none;
        display: flex;
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
    a#home {
        border: 1px solid rgba(255,255,255, 0.5);
        width: 40px;
        height: 40px;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
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
        gap: 32px;
        margin-left: var(--page-padding);
    }
    /* @keyframes {

    } */
    #nav-socials{
        margin-right: var(--page-padding);
        display: flex;
        flex-direction: row;
        gap: 8px;
        align-items: center;
    }
    #nav-socials a {
        display: flex;
        position: relative;
        height: auto;
        font-size: 36px;
        padding: 12px;
        transition: background-color 0.25s;
    }

    #nav-socials a:hover {
        background-color: rgba(255,255,255,0.2);
    }

    #nav-socials a > svg {
        display: block;
    }
</style>