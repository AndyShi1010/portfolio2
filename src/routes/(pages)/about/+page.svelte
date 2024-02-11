<script lang='ts'>
    import { fade, fly } from 'svelte/transition';
    import Break from '$lib/Break.svelte';
    import Chip from '$lib/Chip.svelte';
    import Button from '$lib/Button.svelte';
    import Accordion from '$lib/Accordion.svelte';
    import { base } from '$app/paths';
    import { Icon } from 'svelte-remix';
</script>

<svelte:head>
	<title>Andy Shi | About</title>
</svelte:head>

<h1>About</h1>
<Break />
<h2>Hi! My name is Andy Shi.</h2>
<p>
    I am a freshly graduated Computer Science major with a minor in Visual Communications Design.
    I have a strong passion for design and a drive to create captivating immersive experiences.
</p>

<div class="button-row">
    <h3>Hire Me!</h3>
    <div id="buttons">
        <Button icon="iconLeft" to="{base}/Res2.2024.pdf" target="_blank">
            <Icon name="article-line" width="16" height="16" tabindex="-1" />
            View my Résumé
        </Button>
        <Button icon="iconLeft" href="mailto:andy1010999@outlook.com">
            <Icon name="mail-send-line" width="16" height="16" tabindex="-1" />
            Email Me
        </Button>
    </div>
</div>

<Accordion title="Skills" open={false}>
    <h4>Programming</h4>
    <div class="chip-container">
        <Chip text="HTML" />
        <Chip text="CSS" />
        <Chip text="JavaScript" />
        <Chip text="TypeScript" />
        <Chip text="React" />
        <Chip text="Svelte" />
        <Chip text="SQL" />
        <Chip text="Java" />
        <Chip text="C/C++" />
        <Chip text="C#" />
        <Chip text="Swift" />
    </div>

    <h4>Tools</h4>
    <div class="chip-container">
        <Chip text="Git" />
        <Chip text="Microsoft Office" />
        <Chip text="Figma" />
        <Chip text="Adobe Creative Cloud" />
        <Chip text="Affinity Designer" />
    </div>

    <h4>Miscellaneous Skills</h4>
    <div class="chip-container">
        <Chip text="Graphic Design" />
        <Chip text="UI/UX Prototyping" />
        <Chip text="Video Editing" />
        <Chip text="Data Entry" />
        <Chip text="Mandarin Chinese" />
    </div>
</Accordion>

<Accordion title="Education" open={false}>
    <div class="edu-item">
        <div class="edu-title">
            <p class="name">San Francisco State University</p>
            <p class="date">2019 - 2023</p>
        </div>
        <p class="edu-desc">B.S. Computer Science</p>
        <p class="edu-desc">Visual Communications Design Minor</p>
    </div>
</Accordion>

<Accordion title="Experience" open={false}>
    <div class="exp-item">
        <div class="exp-title">
            <p class="name">Web/Graphics Student Assistant</p>
            <p class="date">Jun 2021 - May 2023</p>
        </div>
        <p class="exp-location">San Francisco State University</p>
        <ul>
            <li class="exp-bullet">Created course registration system for Sierra Nevada Field Campus of SFSU using the Qualtrics platform, handling data collection of over 200 students.</li>
            <li class="exp-bullet">Designed graphics for events and announcements.</li>
        </ul>
    </div>
    <div class="exp-item">
        <div class="exp-title">
            <p class="name">Web Development Intern</p>
            <p class="date">Jul 2022 - Aug 2022</p>
        </div>
        <p class="exp-location">Code Tenderloin</p>
        <ul>
            <li class="exp-bullet">Worked on various front-end development projects using HTML and CSS.</li>
            <li class="exp-bullet">Created various UI components and layouts using flexbox and grid.</li>
        </ul>
    </div>
    <div class="exp-item">
        <div class="exp-title">
            <p class="name">Pantry Operations Assistant</p>
            <p class="date">Jun 2019 - Aug 2019</p>
        </div>
        <p class="exp-location">West Valley Community Services</p>
        <ul>
            <li class="exp-bullet">Handled sorting and storage of gleaned produce and supplies.</li>
            <li class="exp-bullet">Interacted with customers, providing assistance when needed.</li>
        </ul>
    </div>
</Accordion>

<p id="credits">Website built with <a href="https://kit.svelte.dev/" target="_blank">Sveltekit</a>, <a href="https://threejs.org/" target="_blank">ThreeJS</a> and <a href="https://www.blender.org/" target="_blank">Blender</a></p>

<style>
    h2 {
        font-size: 32px;
    }
    h3 {
        font-size: 1.5rem;
        font-weight: normal;
    }
    h4 {
        font-size: 18px;
        font-weight: 700;
    }
    p {
        margin: 0;
    }
    .edu-item, .exp-item {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-block-start: 16px;
        margin-block-end: 16px;
    }
    .edu-title, .exp-title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        column-gap: 16px;
        row-gap: 8px;
    }
    .edu-item .name, .exp-title .name {
        font-weight: 700;
    }
    .edu-desc, .exp-location {
        font-style: italic;
    }
    .chip-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 8px;
        margin-block-start: 16px;
        margin-block-end: 16px;
    }
    .button-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
        margin-block-start: 16px;
    }
    #buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
    }
    .button-row h3 {
        margin-block-start: 0;
        margin-block-end: 0;
        margin-right: 8px;
    }
    #credits {
        font-size: 12px;
        font-style: italic;
    }
</style>




