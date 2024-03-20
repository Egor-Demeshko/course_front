<script>
    /**@type {{name: string, type: string, isSubmit?: boolean}}*/
    export let data = { name: "Кнопка", type: "main", isSubmit: false };
    export let wide_button = false;

    /**
     * @param e {Event} [e=undefined]
     */
    export let clickHandle = (e) => {};
    export let ariaData = { label: "Кнопка" };

    const { name, type, isSubmit } = data;
</script>

<button
    class={type}
    class:wide_button
    on:click={clickHandle}
    aria-label={ariaData.label}
    type={isSubmit ? "submit" : "button"}>{name}</button
>

<style>
    button {
        /**main-color задается при создании экземпляра компонента*/
        background-color: var(--element-main);
        padding: 1rem 1.875rem;
        text-transform: uppercase;
        border: none;
        color: var(--light-font);
        font-weight: bold;
        cursor: pointer;
        transition: background 0.4s ease;
    }

    /**SECONDARY BUTTON*/
    button.secondary {
        background-color: var(--element-secondary);
    }
    button.secondary:hover {
        background-color: var(--element-main-transfer);
    }

    /**MAIN BUTTON*/
    button.main:hover {
        background-color: var(--element-main-transfer);
    }

    /**ACCENT BUTTON*/
    button.accent {
        background-color: var(--element-danger);
    }
    button.accent:hover {
        background-color: var(--element-danger-transfer);
    }

    button.wide_button {
        width: 100%;
    }
</style>
