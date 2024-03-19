<script>
    export let block = {};

    const { first, second, third } = block;
</script>

<div class="key_block">
    <div class="key_block__first-row">
        <p class={second === "" ? "big_first" : ""}>{first}</p>
        {#if second !== ""}
            <p>{second}</p>
        {/if}
    </div>
    <div class="key_block__second-row">
        <p>{third}</p>
    </div>
</div>

<style>
    .key_block {
        padding: 2.5rem 2.25rem;
        background-image: var(--key-block-gradient);
        border-radius: 14px;
    }

    p {
        margin: 0;
        line-height: 1;
    }

    .key_block__first-row,
    .key_block__second-row {
        color: var(--light-font);
    }
    .key_block__first-row {
        display: grid;
        grid-template: 2.56rem 2.56rem / 1fr auto;
        column-gap: 0.75rem;
    }

    .key_block__first-row p:first-child {
        font-size: 5.125rem;
        font-family: Stoke, Ubuntu, sans-serif;
        grid-row: 1 / 3;
        justify-self: start;
    }

    .big_first {
        grid-column: 1 / 3;
        justify-self: center !important;
    }

    .key_block__first-row p:nth-child(2) {
        font-size: 2.5rem;
        font-weight: bold;
        text-transform: uppercase;
        grid-row: 1 / 2;
    }

    .key_block__second-row p:first-child {
        font-size: 2.375rem;
        text-transform: lowercase;
        font-weight: bold;
        text-align: center;
    }
</style>
