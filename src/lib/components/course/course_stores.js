import { writable } from "svelte/store";

/**
 * {
 * youtubeurl
 * slidesurl
 * content
 * heading
 * }
 */
export const courseInfo = writable({
    youtubeurl: "",
    slidesurl: "",
    content: "",
    heading: "",
});

export const activeTab = writable({
    tabid: "",
});

export const lessonsSideBarisOpen = writable(false);

export const CONTENT_ID = "content";

export const SLIDES_ID = "slides";
