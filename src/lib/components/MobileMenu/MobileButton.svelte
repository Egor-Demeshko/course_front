<script>
    import { mobileMenuOpenState } from "$lib/components/MobileMenu/stores/mobileMenu.js";
</script>

<button
    on:click={() => mobileMenuOpenState.set(!$mobileMenuOpenState)}
    aria-label="Открыть мобильное меню"
>
    <span></span>
    <span></span>
    <span></span>
</button>

<style>
    button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        width: 5rem;
        height: 5rem;
        border: none;
        border-radius: 50%;
        background-color: var(--element-main);
        cursor: pointer;
        padding: 0.5rem;
        position: fixed;
        bottom: 1rem;
        left: 50%;
        transform: translate(-50%, 0);
        transition: background 0.4s ease;
    }

    button:hover {
        background-color: var(--element-main-transfer);
    }

    span {
        display: block;
        background-color: var(--light-font);
        height: 6px;
        width: 70%;
        border-radius: 4px;
    }

    @media screen and (min-width: 980px) {
        button {
            display: none;
        }
    }
</style>
