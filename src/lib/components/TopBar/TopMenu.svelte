<script>
    import { page } from "$app/stores";

    const menus = $page.data.menus;
</script>

<nav itemscope itemtype="https://schema.org/SiteNavigationElement">
    <ul itemprop="about" itemscope itemtype="https://schema.org/ItemList">
        {#each menus as { name, link }}
            <li
                itemprop="itemListElement"
                itemscope
                itemtype="https://schema.org/ItemList"
            >
                <a href={link}>{name}</a>
                <meta itemprop="name" content={name} />
            </li>
        {/each}
    </ul>
</nav>

<style>
    nav {
        font-weight: bold;
        font-size: clamp(0.875rem, 1.8vw, 1.125rem);
    }

    ul {
        display: flex;
        gap: clamp(0.4rem, 1.8vw, 1.875rem);
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

    @media screen and (max-width: 500px) {
        ul {
            justify-content: center;
        }
    }
</style>
