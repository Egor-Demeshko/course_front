<script>
    import BlockHeading from "$lib/components/AtomComponents/BlockHeading.svelte";
    import TextBlock from "./TextBlock.svelte";
    import DocImages from "./DocImages.svelte";
</script>

<BlockHeading name={"Документы:"} />

<section id="docs" class="site_center">
    <TextBlock />
    <DocImages />
</section>

<style>
    section {
        padding-top: var(--padding-betweenblocks);
        padding-bottom: var(--padding-betweenblocks);
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
</style>
