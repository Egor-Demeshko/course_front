<script>
    import BlockHeading from "$lib/components/AtomComponents/BlockHeading.svelte";
    import KeyBlock from "./KeyBlock.svelte";
    import TextSlides from "./TextSlides.svelte";
    import { page } from "$app/stores";

    const keyBlocksData = $page.data.key_blocks || [];
</script>

<section id="course" aria-label="Блок Ключевые особенности" class="site_center">
    <BlockHeading name={"Ключевые особенности:"} />
    <div>
        <div class="key_features">
            {#each keyBlocksData as block}
                <KeyBlock {block} />
            {/each}
        </div>
        <!--<TextSlides />-->
    </div>
</section>

<style>
    section {
    }

    .key_features {
        display: flex;
        justify-content: center;
        gap: 5.125rem;
        padding-top: 4rem;
    }
</style>
