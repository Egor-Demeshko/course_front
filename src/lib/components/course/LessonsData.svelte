<script>
    import { courseInfo } from "$lib/components/course/course_stores.js";
    import TabElement from "$lib/components/AtomComponents/TabElement.svelte";
    let content = "";
    let slidesurl = "";

    courseInfo.subscribe((data) => {
        if (data?.content && content !== data.content) {
            content = data.content;
        }

        if (data?.slidesurl && slidesurl !== data.slidesurl) {
            slidesurl = data.slidesurl;
        }
    });
</script>

<div class="lessons_data">
    <div class="buttons">
        {#if content}
            <TabElement />
        {:else}{/if}
    </div>
</div>

<style>
    .lessons_data {
        padding: 3.625rem clamp(1px, 3.3vw, 3rem);
        background-color: red;
    }
</style>
