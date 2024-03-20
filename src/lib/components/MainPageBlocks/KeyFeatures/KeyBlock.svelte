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
        padding: clamp(1.25rem, 2.7vw, 2.5rem) clamp(1.125rem, 2.56vw, 2.25rem);
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
        grid-template:
            clamp(1.28rem, 2.8vw, 2.56rem) clamp(1.28rem, 2.8vw, 2.56rem)
            / 1fr auto;
        column-gap: 0.75rem;
    }

    .key_block__first-row p:first-child {
        font-size: clamp(2.56rem, 5.7vw, 5.125rem);
        font-family: Stoke, Ubuntu, sans-serif;
        grid-row: 1 / 3;
        justify-self: start;
    }

    .big_first {
        grid-column: 1 / 3;
        justify-self: center !important;
    }

    .key_block__first-row p:nth-child(2) {
        font-size: clamp(1.25rem, 2.7vw, 2.5rem);
        font-weight: bold;
        text-transform: uppercase;
        grid-row: 1 / 2;
    }

    .key_block__second-row p:first-child {
        font-size: clamp(1.188rem, 2.6vw, 2.375rem);
        text-transform: lowercase;
        font-weight: bold;
        text-align: center;
    }
</style>
