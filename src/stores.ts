import { writable, type Writable } from 'svelte/store'

// export const prevRoute: Writable<string> = writable("/")

export const transitioning: Writable<Boolean> = writable(false);

export const loading: Writable<Boolean> = writable(true)

export const loadProgress: Writable<Number> = writable(0);

// transitioning.update((currentValue) => true);


// export function pathDepth(): number {
//     prevRoute.subscribe((data) => {
//         count = data.match(/\//g)!.length;
//     });
//     return count;
// }