<script>
    import TopMenuMobile from "./TopMenuMobile.svelte";
    import TopButtonsMobile from "./TopButtonsMobile.svelte";
    import { mobileMenuOpenState } from "$lib/components/MobileMenu/stores/mobileMenu.js";

    $: isMenuOpen = $mobileMenuOpenState;
</script>

<nav class:isMenuOpen>
    <TopMenuMobile />

    <div class="bottom_menu">
        <TopButtonsMobile />
    </div>
</nav>

<style>
    nav {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        height: 100dvh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        transform: translateX(-100%);
        transition: transform 0.6s ease;
        z-index: 10;
        visibility: visible;
        background-color: var(--white);
    }

    .isMenuOpen {
        transform: translateX(0);
    }

    @media screen and (min-width: 980px) {
        nav {
            visibility: hidden;
        }
    }
</style>
