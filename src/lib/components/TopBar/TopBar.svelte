<script>
    import TopMenu from "./TopMenu.svelte";
    import TopButtons from "./TopButtons.svelte";
</script>

<nav>
    <TopMenu />
    <TopButtons />
</nav>

<style>
    nav {
        padding: clamp(1.125rem, 2.5vw, 2.625rem);
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }

    @media screen and (max-width: 980px) {
        nav {
            grid-template-columns: 1fr;
        }
    }
</style>
