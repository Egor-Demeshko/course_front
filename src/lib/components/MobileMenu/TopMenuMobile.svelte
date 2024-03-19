<script>
    import { page } from "$app/stores";

    const menus = $page.data.menus;
</script>

<nav
    aria-label="Навигация по главной странице"
    itemscope
    itemtype="https://schema.org/SiteNavigationElement"
>
    <ul itemprop="about" itemscope itemtype="https://schema.org/ItemList">
        {#each menus as { name, link }}
            <li
                itemprop="itemListElement"
                itemscope
                itemtype="https://schema.org/ItemList"
            >
                <a
                    aria-label={`Переход на страницу ${name}`}
                    itemprop="url"
                    href={link}>{name}</a
                >
                <meta itemprop="name" content={name} />
            </li>
        {/each}
    </ul>
</nav>

<style>
    nav {
        font-weight: bold;
        padding-top: 2.5rem;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--element-main);
    }

    li {
        text-align: center;
        width: 100%;
    }

    a {
        display: block;
        padding: 1.25rem;
        font-size: 1.125rem;
        border-bottom: 2px solid var(--element-main);
    }
</style>
