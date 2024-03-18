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

{#each buttons as { name, type }}
    {#if type === "accent"}
        <Button data={{ name, type }} --main-color="var(--element-danger)" />
    {:else}
        <Button data={{ name, type }} --main-color="var(--element-main)" />
    {/if}
{/each}
