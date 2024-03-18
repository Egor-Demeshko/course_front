<script>
    import Button from "$lib/components/AtomComponents/Button.svelte";

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
        {#if type === "accent"}
            <Button
                data={{ name, type }}
                --main-color="var(--element-danger)"
            />
        {:else}
            <Button data={{ name, type }} --main-color="var(--element-main)" />
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
