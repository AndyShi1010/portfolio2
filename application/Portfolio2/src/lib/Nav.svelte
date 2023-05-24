<script>
    import { GithubFilled, LinkedinFilled, TwitterSquareFilled, InstagramFilled } from 'svelte-ant-design-icons';
    import NavButton from '$lib/NavButton.svelte';
</script>

<div id="nav">
    <div id="nav-pages">
        <NavButton href="/">Close</NavButton>
        <NavButton href="/about">About</NavButton>
        <NavButton href="/code">Code</NavButton>
        <NavButton href="/design">Design</NavButton>
        <!-- <a href="/" id="close" class="page-link">Close</a>
        <a href="/about" id="about" class="page-link">About</a>
        <a href="/code" id="code" class="page-link">Code</a>
        <a href="/design" id="design" class="page-link">Design</a> -->
    </div>
    <div id="nav-socials">
        <a href="https://github.com/AndyShi1010" class="social-link">
            <GithubFilled size="24" focusable="false"/>
        </a>
        <a href="" class="social-link">
            <LinkedinFilled size="24" focusable="false"/>
        </a>
        <a href="https://twitter.com/and0shi" class="social-link">
            <TwitterSquareFilled size="24" focusable="false"/>
        </a>
        <a href="https://www.instagram.com/and0shi/" class="social-link">
            <InstagramFilled size="24" focusable="false"/>
        </a>
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
    }
    div#nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: fixed;
        bottom: 0;
        left: 0;
        height: 96px;
        /* background-color: rgba(0,0,0,0.2); */
        width: 100%;
    }
    #nav-pages {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 24px;
        margin-left: 48px;
    }
    /* @keyframes {

    } */
    #nav-socials{
        margin-right: 48px;
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