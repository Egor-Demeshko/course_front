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
    <Button
        data={{ name, type }}
        wide_button={true}
        --main-color="var(--element-main)"
    />
{/each}
