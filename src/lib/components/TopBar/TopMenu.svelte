<script>
    //TODO первонально сервер будет давать данные по меню.
    //тут мы данные получить из store data

    const testMenu = ["О курсе", "Стоимость", "Документы"];
</script>

<nav>
    <ul>
        {#each testMenu as item}
            <li><a href="#">{item}</a></li>
        {/each}
    </ul>
</nav>

<style>
    nav {
        font-weight: bold;
        font-size: 1.125rem;
    }

    ul {
        display: flex;
        gap: clamp(0.875rem, 1.8vw, 1.875rem);
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        color: var(--font-color-main);
    }

    a {
        display: block;
        padding: 0.625rem;
        background-color: transparent;
        transition: background 0.4s ease;
        border-radius: 4px;
    }

    a:hover {
        background-color: var(--main-transition-state);
    }
</style>
