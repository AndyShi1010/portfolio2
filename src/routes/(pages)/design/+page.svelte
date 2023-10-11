<script lang="ts">
    import GridItem from "$lib/GridItem.svelte";
    import AnimatedPage from "$lib/AnimatedPage.svelte";
    import Break from "$lib/Break.svelte";
    import { pages } from "./data";
    import { base } from '$app/paths'

    // class pageListing {
    //     let title: String;
    //     let desc: String; 
    // }
    import { page } from '$app/stores'
	import GridList from "$lib/GridList.svelte";

    let currPath = $page.url.pathname;

    

    // const pages = import.meta.glob('../design/**');
    // // document.onresize = () => {console.log(currPath)};

    // for (let p in pages) {
    //     console.log(p);
    //     let path = p.match(/((\/))(.*?)(?=\/)/g)?.toString();
    //     let name = path!.replace('/', '');
    //     console.log(path);
    //     if (path != null) {
    //         menu.push({path, name});
    //     }
    // }
    //console.log(menu);
</script>

<!-- <AnimatedPage> -->


<h1>Design</h1>
<Break />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi ipsa nam suscipit assumenda reprehenderit blanditiis distinctio possimus ut ea praesentium harum dolor repellat nisi molestias, modi consequatur iusto quaerat.</p>

<GridList items={pages} root="/design">
</GridList>
<!-- </AnimatedPage> -->