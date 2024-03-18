<script>
    import MobileButton from "$lib/components/MobileMenu/MobileButton.svelte";
    import MobileSliderMenu from "$lib/components/MobileMenu/MobileSliderMenu.svelte";
    import TopBar from "$lib/components/TopBar/TopBar.svelte";
</script>

<TopBar />
<section></section>
<MobileButton />
<MobileSliderMenu />

<style>
    section {
        margin: auto 0;
        max-width: 1410px;
    }
</style>
