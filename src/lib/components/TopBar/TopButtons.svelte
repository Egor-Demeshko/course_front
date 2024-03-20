<script>
    import Button from "$lib/components/AtomComponents/Button.svelte";
    import { modalState } from "$lib/components/AtomComponents/stores.js";
    import {
        MODAL_TYPES_CONTACTS,
        MODAL_TYPES_LOGIN,
        MODAL_TYPES_REGISTRATION,
    } from "$lib/components/AtomComponents/modalConst";

    let isLoggedIn = false;

    const buttons = [
        {
            name: "Контакты",
            type: "main",
        },
        {
            name: "Вход",
            type: "main",
        },
        {
            name: "Регистрация",
            type: "accent",
        },
    ];
</script>

<div>
    {#each buttons as { name, type }}
        {#if name === "Контакты"}
            <Button
                data={{ name, type }}
                clickHandle={() => {
                    modalState.set({ type: MODAL_TYPES_CONTACTS, show: true });
                }}
            />
        {:else if name === "Вход"}
            <Button
                data={{ name: isLoggedIn ? "Профиль" : "Вход", type }}
                clickHandle={() => {
                    modalState.set({ type: MODAL_TYPES_LOGIN, show: true });
                }}
            />
        {:else if !isLoggedIn}
            <Button
                data={{ name, type }}
                clickHandle={() => {
                    modalState.set({
                        type: MODAL_TYPES_REGISTRATION,
                        show: true,
                    });
                }}
            />
        {/if}
    {/each}
</div>

<style>
    div {
        display: flex;
        justify-content: end;
        gap: 1.5rem;
    }

    @media screen and (max-width: 980px) {
        div {
            display: none;
        }
    }
</style>
