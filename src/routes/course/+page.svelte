<script>
    import Modal from "$lib/components/AtomComponents/Modal/Modal.svelte";
    import { page } from "$app/stores";
    import TopBar from "$lib/components/TopBar/TopBar.svelte";
    import LessonsData from "$lib/components/course/LessonsData.svelte";
    import parseContentData from "$lib/js/parseContentData.js";

    let data = $page.data;

    parseContentData(data);
</script>

<div class="page_wrapper">
    <div class="top_bar">
        <TopBar />
    </div>
    <iframe
        width="540"
        height="378"
        src={""}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
    ></iframe>
    <div class="lessons">
        <LessonsData />
    </div>
</div>
<Modal />

<style>
    .page_wrapper {
        background-color: var(--white);
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    iframe {
        grid-column: 1 / 4;
        width: 100%;
        height: clamp(300px, 43vw, 700px);
    }

    .lessons {
        grid-column: span 3;
    }

    .top_bar {
        grid-column: span 4;
    }

    @media screen and (max-width: 1150px) {
        :global(body) {
            padding: unset;
        }
    }
</style>
