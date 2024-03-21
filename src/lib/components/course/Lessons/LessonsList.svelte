<script>
    import LessonsItem from "$lib/components/course/Lessons/LessonsItem.svelte";
    /**
     * @type {{name: string, type: string, watched: boolean}[]}
     */
    export let lessons = [];
</script>

<aside>
    <ul>
        {#each lessons as lessonData}
            <LessonsItem {lessonData} />
        {/each}
    </ul>
</aside>

<style>
    aside {
    }

    ul {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        justify-content: start;
        margin: 0;
        padding: 0;
        height: 100dvh;
    }
</style>
