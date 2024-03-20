<script>
    import BlockHeading from "$lib/components/AtomComponents/BlockHeading.svelte";
    import KeyBlock from "./KeyBlock.svelte";
    import TextSlides from "./TextSlides.svelte";
    import { page } from "$app/stores";

    const keyBlocksData = $page.data.key_blocks || [];
</script>

<BlockHeading name={"Ключевые особенности:"} />

<section id="course" aria-label="Блок Ключевые особенности" class="site_center">
    <div class="key_features">
        {#each keyBlocksData as block}
            <KeyBlock {block} />
        {/each}
    </div>
    <TextSlides />
</section>

<style>
    section {
        padding-top: var(--padding-betweenblocks);
        padding-bottom: var(--padding-betweenblocks);
    }

    .key_features {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: clamp(2.56rem, 5.7vw, 5.125rem);
        margin-bottom: 5.3rem;
    }
</style>
