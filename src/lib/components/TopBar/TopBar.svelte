<script>
    import TopMenu from "$lib/components/TopBar/TopMenu.svelte";
    import TopButtons from "$lib/components/TopBar/TopButtons.svelte";
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    /**
     * @type {HTMLElement}
     */
    let topBar;

    let route = $page.route.id?.replace("/", "");

    /**
     * @type {boolean}
     */
    let scrolled = false;

    /**@type any*/
    let freezedScroll;

    onMount(() => {
        freezedScroll = (() => {
            if (route === "course") {
                return null;
            }
            if (
                Math.max(
                    window.innerWidth,
                    document.documentElement.clientWidth
                ) < 500
            ) {
                return;
            }
            let freezed = false;

            return function scrollHandle() {
                if (freezed) {
                    return;
                }

                freezed = true;

                setTimeout(() => {
                    freezed = false;
                }, 30);

                if (window.scrollY > 250) {
                    scrolled = true;
                } else {
                    scrolled = false;
                }
            };
        })();
    });
</script>

<svelte:document on:scroll={freezedScroll} />

<div
    bind:this={topBar}
    class:scrolled
    class={route === "course" ? "course" : ""}
>
    <TopMenu />
    <TopButtons />
</div>

<style>
    div {
        padding: clamp(0.4rem, 2.5vw, 2.625rem);
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: transparent;
        backdrop-filter: blur(6px);
        transition:
            padding 0.6s ease,
            background 0.6s ease;
        z-index: 5;
    }

    div.scrolled {
        padding: 1rem clamp(1.125rem, 2.5vw, 2.625rem);
        background-color: rgba(192, 192, 192, 0.1);
        box-shadow: 0 0 2px 2px rgba(192, 192, 192, 0.25);
    }

    div.course {
        padding: 1rem clamp(1.125rem, 2.5vw, 2.625rem);
        background-color: rgba(192, 192, 192, 0.1);
        box-shadow: 0 0 2px 2px rgba(192, 192, 192, 0.25);
        position: static;
        width: 100%;
    }

    @media screen and (max-width: 980px) {
        div {
            grid-template-columns: 1fr;
        }
    }
</style>
