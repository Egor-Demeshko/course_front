<script>
    import {
        activeTab,
        CONTENT_ID,
        SLIDES_ID,
    } from "$lib/components/course/course_stores.js";

    import ContentTab from "$lib/components/course/ContentTab.svelte";
    import SlidesTab from "$lib/components/course/SlidesTab.svelte";

    let tabToShow = "";

    activeTab.subscribe((obj) => {
        if (obj.tabid !== tabToShow) {
            tabToShow = obj.tabid;
        }
    });
</script>

<section>
    {#if tabToShow === CONTENT_ID}
        <ContentTab />
    {:else if tabToShow === SLIDES_ID}
        <SlidesTab />
    {/if}
</section>
