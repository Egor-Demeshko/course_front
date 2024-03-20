<script>
    import { modalState } from "../stores";
    import { MODAL_TYPES_CONTACTS, MODAL_TYPES_LOGIN } from "../modalConst";
    import Contacts from "./Contacts.svelte";
    import LOGIN from "./Login.svelte";
    import Registration from "./Registration.svelte";

    let type = "";
    let show = false;

    $: if (show) {
        dialog?.showModal();
    } else {
        dialog?.close();
    }

    /**@type HTMLDialogElement*/
    let dialog;

    modalState.subscribe((modal) => {
        type = modal.type;
        show = modal.show;
    });
</script>

<dialog bind:this={dialog}>
    {#if type === MODAL_TYPES_CONTACTS}
        <Contacts {type} />
    {:else if type === MODAL_TYPES_LOGIN}
        <LOGIN {type} />
    {:else}
        <Registration {type} />
    {/if}
</dialog>

<style>
    dialog {
        display: none;
        margin: auto;
        width: clamp(300px, 100%, 788px);
        background-color: var(--light-background);
        border: none;
        border-radius: 10px;
        padding: clamp(24px, 3.6vw, 52px) clamp(28px, 4.3vw, 62px);
    }

    dialog[open] {
        display: block;
    }
</style>
