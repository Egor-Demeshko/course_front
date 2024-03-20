<script>
    import HelloBlockWithVideo from "$lib/components/MainPageBlocks/HelloBlockWithVideo.svelte";
    import KeyFeatures from "$lib/components/MainPageBlocks/KeyFeatures/KeyFeatures.svelte";
    import Documents from "$lib/components/MainPageBlocks/Documents/Documents.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Modal from "$lib/components/AtomComponents/Modal/Modal.svelte";
    import TopBar from "$lib/components/TopBar/TopBar.svelte";
</script>

<TopBar />

<main>
    <HelloBlockWithVideo />
    <KeyFeatures />
    <Documents />
</main>

<Footer />
<Modal />

<style>
    :global(body) {
        background-color: var(--background);
        width: 100%;
    }

    @media screen and (max-width: 1150px) {
        :global(body) {
            padding: 0 1.5rem;
        }
    }
</style>
