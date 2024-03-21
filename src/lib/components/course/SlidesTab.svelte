<script>
    import { courseInfo } from "$lib/components/course/course_stores.js";
    import cleanFromScripts from "$lib/js/cleanFromScripts";
    import Loader from "$lib/components/AtomComponents/Loader.svelte";
    import { onDestroy } from "svelte";

    let slidesurl = "";
    let not_loaded = true;

    courseInfo.subscribe((data) => {
        if (data?.slidesurl && slidesurl !== data.slidesurl) {
            slidesurl = cleanFromScripts(data.slidesurl);
        }
    });

    onDestroy(() => {
        not_loaded = true;
    });
</script>

<div>
    <iframe
        title="Slides"
        loading="lazy"
        src={slidesurl}
        frameborder="0"
        width="960"
        height="569"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        on:load={() => {
            not_loaded = false;
        }}
    ></iframe>

    <div class="loader_placeholder" class:not_loaded>
        <Loader />
    </div>
</div>

<style>
    div {
        padding-top: 4.25rem;
        position: relative;
    }

    .loader_placeholder {
        display: none;
        position: absolute;
        top: 50%;
        left: 40%;
        transform: translate(-50%, -50%);
    }

    .not_loaded {
        display: block;
    }
</style>
