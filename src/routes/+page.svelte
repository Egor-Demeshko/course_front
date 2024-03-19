<script>
    import HelloBlockWithVideo from "$lib/components/MainPageBlocks/HelloBlockWithVideo.svelte";
    import KeyFeatures from "$lib/components/MainPageBlocks/KeyFeatures/KeyFeatures.svelte";
</script>

<HelloBlockWithVideo />
<KeyFeatures />

<style>
    :global(body) {
        background-color: var(--background);
        width: 100vw;
    }
</style>
