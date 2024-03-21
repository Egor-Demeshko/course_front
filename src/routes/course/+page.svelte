<script>
    import Modal from "$lib/components/AtomComponents/Modal/Modal.svelte";
    import { page } from "$app/stores";
    import TopBar from "$lib/components/TopBar/TopBar.svelte";
    import LessonsData from "$lib/components/course/LessonsData.svelte";
    import parseContentData from "$lib/js/parseContentData.js";
    import { courseInfo } from "$lib/components/course/course_stores.js";
    import LessonsList from "$lib/components/course/Lessons/LessonsList.svelte";
    import MobileBottomBar from "$lib/components/course/MobileBottomBar.svelte";
    import { lessonsSideBarisOpen } from "$lib/components/course/course_stores.js";

    let data = $page.data;
    let open = false;

    lessonsSideBarisOpen.subscribe((value) => {
        if (value != open) open = value;
    });

    /**внутри этой функции задается courseInfo*/
    parseContentData(data);
</script>

<div class="page_wrapper">
    <div class="top_bar">
        <TopBar />
    </div>
    <iframe
        width="540"
        height="378"
        src={$courseInfo.youtubeurl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
    ></iframe>
    <div class="lessons">
        <LessonsData />
    </div>
    <div class="lessons__list" class:open>
        <LessonsList lessons={data.lessonsList} />
    </div>
</div>
<Modal />
<MobileBottomBar />

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

    .lessons__list {
        grid-column: 4/4;
        grid-row: 2/4;
    }

    .top_bar {
        grid-column: span 4;
    }

    @media screen and (max-width: 1150px) {
        :global(body) {
            padding: unset;
        }
    }

    @media screen and (max-width: 1400px) {
        .page_wrapper {
            grid-template-columns: 1fr;
        }

        .lessons__list {
            position: fixed;
            top: 0;
            right: 0;
            width: 335px;
            height: 100dvh;
            background-color: var(--light-background);
            transform: translateX(100%);
            transition: transform 0.4s ease;
        }

        .lessons__list.open {
            transform: translateX(0);
        }
    }
</style>
