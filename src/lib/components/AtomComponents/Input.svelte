<script>
    export let type = "text";
    export let name = "";
    export let placeholder = "";
    import { onMount } from "svelte";

    /**@type HTMLInputElement*/
    let inputElement;

    onMount(() => {
        /** css препроцессорм убираются неиспользуемые CSS селекторы
         * туда попадает data-filled, у которого стиль зависит от true
         * но изначально он должен стоять false
         * чтобы не разбираться долго в конфиге, ставим принудительно true
         * а при монтаже компанента ставим во false
         */
        inputElement.dataset.filled = "false";
    });

    function inputChanged({ target }) {
        /** to keep the label in the designated place */
        if (target.value.length === 0) {
            target.dataset.filled = "false";
        } else {
            target.dataset.filled = "true";
        }
    }
</script>

<div class="code">
    <input
        data-filled="true"
        class="code__input"
        {type}
        {name}
        id={"code" + name}
        required
        aria-required="true"
        on:change={inputChanged}
        bind:this={inputElement}
    />
    <label class="code__label" for={"code" + name}>{placeholder}</label>
</div>

<style>
    .code {
        position: relative;
        width: 100%;
    }

    .code__label {
        position: absolute;
        font-size: 1.125rem;
        font-weight: bold;
        top: 50%;
        left: 0.75rem;
        transform: translate(0, -50%);
        z-index: 0;
        transition: all 0.3s ease-in-out;
        color: var(--element-secondary);
        pointer-events: none;
    }

    .code__input {
        width: 100%;
        border: none;
        border-bottom: 2px solid var(--element-main);
        outline: none;
        background-color: transparent;
        z-index: 1;
        padding: 0.5rem;
        border-radius: 0;
        font-size: 1.125rem;
        font-weight: bold;
    }

    .code__input:active + .code__label,
    .code__input:focus + .code__label,
    .code__input[data-filled="true"] + .code__label {
        top: -18px;
        left: 0;
        font-size: 1rem;
        color: var(--element-main);
        font-weight: 500;
    }
</style>
