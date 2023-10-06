import { writable, type Writable } from 'svelte/store'

// export const prevRoute: Writable<string> = writable("/")

export const transitioning: Writable<Boolean> = writable(false);

// transitioning.update((currentValue) => true);


// export function pathDepth(): number {
//     prevRoute.subscribe((data) => {
//         count = data.match(/\//g)!.length;
//     });
//     return count;
// }