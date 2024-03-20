import { writable } from "svelte/store";

/**
 * {
 * youtubeurl
 * slidesurl
 * content
 * }
 */
export const courseInfo = writable({
    youtubeurl: "",
    slidesurl: "",
    content: "",
});
