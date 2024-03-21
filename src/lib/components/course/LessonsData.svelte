<script>
    import { courseInfo } from "$lib/components/course/course_stores.js";
    import TabControl from "$lib/components/AtomComponents/TabControl.svelte";
    import {
        activeTab,
        CONTENT_ID,
        SLIDES_ID,
    } from "$lib/components/course/course_stores.js";
    import { onMount } from "svelte";
    import Tabs from "$lib/components/course/Tabs.svelte";

    let content = false;
    let slidesurl = "";

    onMount(() => {
        $activeTab.tabid = CONTENT_ID;
    });

    courseInfo.subscribe((data) => {
        if (data?.content && content === false) {
            content = true;
        }

        if (data?.slidesurl && slidesurl !== data.slidesurl) {
            slidesurl = data.slidesurl;
        }
    });
</script>

<div class="lessons_data">
    <div class="buttons">
        {#if content}
            <TabControl id={CONTENT_ID} text={"Конспект"} />
        {/if}
        {#if slidesurl}
            <TabControl id={SLIDES_ID} text={"Слайды"} />
        {/if}
    </div>

    <Tabs />
</div>

<style>
    .lessons_data {
        padding: 3.625rem clamp(1px, 3.3vw, 3rem);
    }

    .buttons {
        display: flex;
        gap: 0;
    }
</style>
