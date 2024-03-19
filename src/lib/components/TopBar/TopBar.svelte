<script>
    import TopMenu from "./TopMenu.svelte";
    import TopButtons from "./TopButtons.svelte";
</script>

<div>
    <TopMenu />
    <TopButtons />
</div>

<style>
    div {
        padding: clamp(1.125rem, 2.5vw, 2.625rem);
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 15;
    }

    @media screen and (max-width: 980px) {
        div {
            grid-template-columns: 1fr;
        }
    }
</style>
