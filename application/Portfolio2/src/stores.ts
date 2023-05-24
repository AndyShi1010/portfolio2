import { writable, type Writable } from 'svelte/store'

export const prevRoute: Writable<string> = writable("/")

export let count: number = 0;

// export function pathDepth(): number {
//     prevRoute.subscribe((data) => {
//         count = data.match(/\//g)!.length;
//     });
//     return count;
// }