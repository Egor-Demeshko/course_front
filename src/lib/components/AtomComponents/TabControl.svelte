<script>
    export let text = "";
    export let id = "";

    import { activeTab } from "$lib/components/course/course_stores.js";

    let active = false;

    activeTab.subscribe((obj) => {
        if (obj.tabid === id) {
            active = true;
        } else {
            active = false;
        }
    });
</script>

<button class:active on:click={() => activeTab.set({ tabid: id })}
    >{text}</button
>

<style>
    button {
        border: none;
        padding: 1.3rem 3.625rem;
        font-size: 1.5rem;
        text-transform: uppercase;
        background-color: var(--background);
        cursor: pointer;
        transition: background 0.4s ease;
    }

    button:hover {
        background-color: var(--element-secondary);
    }

    .active {
        background-color: var(--element-secondary);
    }

    .active:hover {
        background-color: var(--element-main-transfer);
    }
</style>
