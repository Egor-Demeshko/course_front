import { onMount } from "svelte";
import Glide from "@glidejs/glide";

/** @type {{ [key: string]: Glide }} */
export const sliders = {};

/**
 * Creates a slider for the specified element using the provided options.
 *
 * @param {string} element - The DOM element to turn into a slider.
 * @param {Object} options - The options to customize the slider.
 */
export default function makeSlider(element, options) {
    onMount(() => {
        sliders[element] = new Glide(element, options).mount();
    });
}
