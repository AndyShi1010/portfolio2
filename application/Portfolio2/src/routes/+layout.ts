import type { LayoutLoad } from './$types';

export const load = (async ({ url }) => {
    const { pathname } = url
    // console.log(pathname);

    return {
        pathname
    }
}) satisfies LayoutLoad;

export const prerender = true;