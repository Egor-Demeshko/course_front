<script>
    import { courseInfo } from "$lib/components/course/course_stores.js";

    let heading = "";
    let content = "";

    courseInfo.subscribe((data) => {
        if (data?.heading && heading !== data.heading) {
            heading = data.heading;
        }

        if (data?.content && content !== data.content) {
            content = data.content;
        }
    });
</script>

<div class="content">
    <h1>{heading}</h1>
    {#if false}
        <p></p>
    {/if}
    {@html content}
</div>

<style>
    h1 {
        margin: 0;
        font-size: 2rem;
        margin-bottom: 2.5rem;
    }

    .content {
        padding-top: 4.25rem;
    }

    .content p {
        margin: 0;
    }

    /**вверху испльзуется отрицательный блок, чтобы это правило работало, иначе svelte его убирает как 
    неиспользуемое*/
    .content p:nth-child(n + 1) {
        margin-top: 1.5rem;
    }
</style>
