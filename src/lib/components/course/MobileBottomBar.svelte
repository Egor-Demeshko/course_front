<script>
    import { lessonsSideBarisOpen } from "$lib/components/course/course_stores.js";
    import { mobileMenuOpenState } from "$lib/components/MobileMenu/stores/mobileMenu.js";
</script>

<div class="bottom_bar">
    <button
        class="bottom_bar__menu"
        aria-label="Открыть мобильное меню"
        on:click={() => mobileMenuOpenState.set(!$mobileMenuOpenState)}
    >
        <div class="bottom_bar__menu--inner" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </button>
    <button
        class="bottom_bar__side_menu"
        on:click={() => lessonsSideBarisOpen.set(!$lessonsSideBarisOpen)}
        aria-label="Открыть список уроков"
    >
        <div aria-hidden="true">
            <svg
                width="25"
                height="42"
                viewBox="0 0 25 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M2.16663 2.25H14.6666C16.8768 2.25 18.9964 3.12797 20.5592 4.69078C22.122 6.25358 23 8.3732 23 10.5833V39.75C23 38.0924 22.3415 36.5027 21.1694 35.3306C19.9973 34.1585 18.4076 33.5 16.75 33.5H2.16663V2.25Z"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            <svg
                width="25"
                height="42"
                viewBox="0 0 25 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M22.8333 2.25H10.3333C8.1232 2.25 6.00358 3.12797 4.44078 4.69078C2.87797 6.25358 2 8.3732 2 10.5833V39.75C2 38.0924 2.65848 36.5027 3.83058 35.3306C5.00268 34.1585 6.5924 33.5 8.25 33.5H22.8333V2.25Z"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
    </button>
</div>

<style>
    .bottom_bar {
        display: none;
        height: 94px;
        box-shadow: 0 0 4px rgba(105, 110, 245, 0.32);
    }

    .bottom_bar__menu,
    .bottom_bar__side_menu {
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding: 24px;
        color: var(--element-main);
    }

    .bottom_bar__menu {
        display: none;
        justify-content: center;
        flex: 1 0;
        border: none;
        cursor: pointer;
        transition: background 0.4s ease;
    }
    .bottom_bar__menu--inner {
        aspect-ratio: 1/1;
        width: 3.4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    .bottom_bar__menu span {
        display: block;
        background-color: var(--element-main);
        height: 6px;
        border-radius: 4px;
        width: 100%;
    }

    .bottom_bar__side_menu {
        flex: 1 0;
    }

    @media screen and (max-width: 1400px) {
        .bottom_bar {
            display: flex;
            width: 436px;
            position: fixed;
            bottom: 1rem;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--background);
            border-radius: 14px;
        }
    }

    @media screen and (max-width: 1150px) {
        .bottom_bar__menu {
            display: flex;
        }
    }
</style>
