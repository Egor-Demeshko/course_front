<script>
    import TopMenuMobile from "./TopMenuMobile.svelte";
    import TopButtonsMobile from "./TopButtonsMobile.svelte";
    import { mobileMenuOpenState } from "$lib/components/MobileMenu/stores/mobileMenu.js";
    import Button from "$lib/components/AtomComponents/Button.svelte";

    $: isMenuOpen = $mobileMenuOpenState;
</script>

<div
    class:isMenuOpen
    class="mobile_menu"
    role="dialog"
    aria-modal="true"
    aria-label="Мобильное меню"
>
    <TopMenuMobile />

    <div class="bottom_menu">
        <div class="buttom_menu__inner">
            <TopButtonsMobile />
            <div class="w-100 mt-26">
                <Button
                    data={{ name: "Закрыть", type: "accent" }}
                    --main-color="var(--element-danger)"
                    wide_button={true}
                    clickHandle={() => mobileMenuOpenState.set(false)}
                    ariaData={{ label: "Закрыть мобильное меню" }}
                />
            </div>
        </div>
    </div>
</div>

<style>
    .mobile_menu {
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
        overflow-y: scroll;
    }

    .bottom_menu {
        display: flex;
        justify-content: center;
        align-items: start;
    }

    .buttom_menu__inner {
        max-width: 180px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.625rem;
    }

    .isMenuOpen {
        transform: translateX(0);
    }

    @media screen and (min-width: 980px) {
        .mobile_menu {
            visibility: hidden;
        }
    }
</style>
