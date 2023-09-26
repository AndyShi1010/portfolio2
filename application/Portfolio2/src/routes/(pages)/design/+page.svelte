<script lang="ts">
    import GridItem from "$lib/GridItem.svelte";
    import AnimatedPage from "$lib/AnimatedPage.svelte";
    let tags: string[] = ['Hello', 'World'];

    // class pageListing {
    //     let title: String;
    //     let desc: String; 
    // }
    import { page } from '$app/stores'

    let currPath = $page.url.pathname;

    

    let menu: {path: string, name: string}[] = [];
    const pages = import.meta.glob('../design/**');
    // document.onresize = () => {console.log(currPath)};

    for (let p in pages) {
        //console.log(p);
        let path = p.match(/((\/))(.*?)(?=\/)/g)?.toString();
        let name = path!.replace('/', '');
        //console.log(path);
        if (path != null) {
            menu.push({path, name});
        }
    }
    //console.log(menu);
</script>

<!-- <AnimatedPage> -->


<h1>Design</h1>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi ipsa nam suscipit assumenda reprehenderit blanditiis distinctio possimus ut ea praesentium harum dolor repellat nisi molestias, modi consequatur iusto quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi ipsa nam suscipit assumenda reprehenderit blanditiis distinctio possimus ut ea praesentium harum dolor repellat nisi molestias, modi consequatur iusto quaerat.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi ipsa nam suscipit assumenda reprehenderit blanditiis distinctio possimus ut ea praesentium harum dolor repellat nisi molestias, modi consequatur iusto quaerat.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi ipsa nam suscipit assumenda reprehenderit blanditiis distinctio possimus ut ea praesentium harum dolor repellat nisi molestias, modi consequatur iusto quaerat.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi ipsa nam suscipit assumenda reprehenderit blanditiis distinctio possimus ut ea praesentium harum dolor repellat nisi molestias, modi consequatur iusto quaerat.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi ipsa nam suscipit assumenda reprehenderit blanditiis distinctio possimus ut ea praesentium harum dolor repellat nisi molestias, modi consequatur iusto quaerat.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi ipsa nam suscipit assumenda reprehenderit blanditiis distinctio possimus ut ea praesentium harum dolor repellat nisi molestias, modi consequatur iusto quaerat.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi ipsa nam suscipit assumenda reprehenderit blanditiis distinctio possimus ut ea praesentium harum dolor repellat nisi molestias, modi consequatur iusto quaerat.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi ipsa nam suscipit assumenda reprehenderit blanditiis distinctio possimus ut ea praesentium harum dolor repellat nisi molestias, modi consequatur iusto quaerat.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi ipsa nam suscipit assumenda reprehenderit blanditiis distinctio possimus ut ea praesentium harum dolor repellat nisi molestias, modi consequatur iusto quaerat.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi ipsa nam suscipit assumenda reprehenderit blanditiis distinctio possimus ut ea praesentium harum dolor repellat nisi molestias, modi consequatur iusto quaerat.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi ipsa nam suscipit assumenda reprehenderit blanditiis distinctio possimus ut ea praesentium harum dolor repellat nisi molestias, modi consequatur iusto quaerat.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi ipsa nam suscipit assumenda reprehenderit blanditiis distinctio possimus ut ea praesentium harum dolor repellat nisi molestias, modi consequatur iusto quaerat.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi ipsa nam suscipit assumenda reprehenderit blanditiis distinctio possimus ut ea praesentium harum dolor repellat nisi molestias, modi consequatur iusto quaerat.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi ipsa nam suscipit assumenda reprehenderit blanditiis distinctio possimus ut ea praesentium harum dolor repellat nisi molestias, modi consequatur iusto quaerat.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi ipsa nam suscipit assumenda reprehenderit blanditiis distinctio possimus ut ea praesentium harum dolor repellat nisi molestias, modi consequatur iusto quaerat.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi ipsa nam suscipit assumenda reprehenderit blanditiis distinctio possimus ut ea praesentium harum dolor repellat nisi molestias, modi consequatur iusto quaerat.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi ipsa nam suscipit assumenda reprehenderit blanditiis distinctio possimus ut ea praesentium harum dolor repellat nisi molestias, modi consequatur iusto quaerat.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi ipsa nam suscipit assumenda reprehenderit blanditiis distinctio possimus ut ea praesentium harum dolor repellat nisi molestias, modi consequatur iusto quaerat.</p>

{#each menu as i}
    <GridItem path={"/design" + i.path} title={i.name} desc={'This is a test'} tags={tags} />
{/each}
<!-- </AnimatedPage> -->