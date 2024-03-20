<script>
    import Button from "$lib/components/AtomComponents/Button.svelte";
    import {
        MODAL_TYPES_CONTACTS,
        MODAL_TYPES_LOGIN,
    } from "$lib/components/AtomComponents/modalConst";
    import { modalState } from "$lib/components/AtomComponents/stores.js";

    const buttons = [
        {
            name: "Контакты",
            type: "main",
            id: MODAL_TYPES_CONTACTS,
        },
        {
            name: "Вход",
            type: "main",
            id: MODAL_TYPES_LOGIN,
        },
        {
            name: "Регистрация",
            type: "accent",
            id: "",
        },
    ];
</script>

{#each buttons as { name, type, id }}
    {#if id === MODAL_TYPES_CONTACTS || id === MODAL_TYPES_LOGIN}
        <Button
            data={{ name, type }}
            wide_button={true}
            clickHandle={() => {
                modalState.set({ type: id, show: true });
            }}
        />
    {:else}
        <Button data={{ name, type }} wide_button={true} />
    {/if}
{/each}
