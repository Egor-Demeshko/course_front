<script>
    export let data = { name: "Кнопка", type: "main" };
    export let wide_button = false;
    export let clickHandle = () => {};
    export let ariaData = { label: "Кнопка" };

    const { name, type } = data;
</script>

<button
    class={type}
    class:wide_button
    on:click={clickHandle}
    aria-label={ariaData.label}>{name}</button
>

<style>
    button {
        background-color: var(--main-color);
        padding: 1rem 1.875rem;
        text-transform: uppercase;
        border: none;
        color: var(--light-font);
        font-weight: bold;
        cursor: pointer;
        transition: background 0.4s ease;
    }

    button.main:hover {
        background-color: var(--element-main-transfer);
    }

    button.accent:hover {
        background-color: var(--element-danger-transfer);
    }

    button.wide_button {
        width: 100%;
    }
</style>
