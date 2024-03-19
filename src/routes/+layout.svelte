<script>
    import MobileButton from "$lib/components/MobileMenu/MobileButton.svelte";
    import MobileSliderMenu from "$lib/components/MobileMenu/MobileSliderMenu.svelte";
    import TopBar from "$lib/components/TopBar/TopBar.svelte";
</script>

<TopBar />

<slot />

<MobileButton />
<MobileSliderMenu />

<style>
</style>
