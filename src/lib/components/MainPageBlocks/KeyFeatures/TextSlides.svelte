<script>
    import makeSlider from "$lib/js/slider/makeSlider";
    import { page } from "$app/stores";

    const textSlides = $page.data.text_slides || [];

    makeSlider(".text_slider", {
        type: "carousel",
        perView: 3,
        startAt: 0,
        gap: 55,
        autoplay: 5000,
        breakpoints: {
            1200: {
                perView: 2,
            },
            768: {
                perView: 1,
            },
        },
    });
</script>

<div
    class="glide text_slider"
    aria-roledescription="слайдер с текстами"
    role="region"
>
    <div
        class="glide__track"
        data-glide-el="track"
        aria-live="polite"
        aria-atomic="true"
    >
        <ul class="glide__slides" role="listbox">
            {#each textSlides as { texts, index }}
                <li
                    class="glide__slide"
                    aria-roledescription="текст"
                    aria-posinset={index + 1}
                    aria-setsize={textSlides.length}
                >
                    {#each texts as text}
                        <p class="glide__text" role="none">{text}</p>
                    {/each}
                </li>
            {/each}
        </ul>
    </div>
    <div
        class="glide__bullets text_slide__glide__bullets"
        data-glide-el="controls[nav]"
    >
        {#each textSlides as item, index}
            <button
                class="glide__bullet text_slide__glide__bullet {index === 0
                    ? 'glide__bullet--active'
                    : ''}"
                data-glide-dir="={index}"
            ></button>
        {/each}
    </div>
</div>

<style>
    .glide {
        padding: 0 clamp(0, 8.5vw, 116px);
    }

    .glide__slide {
        background-color: var(--light-font);
        padding: 2.125rem;
        border-radius: 14px;
    }

    .glide__text {
        margin: 0;
    }

    .glide__text:nth-child(n + 1) {
        margin-top: 1rem;
    }

    .text_slide__glide__bullets {
        display: flex;
        gap: 1.4rem;
        justify-content: center;
        flex-wrap: wrap;
        padding-top: 1rem;
    }

    .text_slide__glide__bullet {
        width: 2rem;
        height: 8px;
        background-color: var(--main-transition-state);
        border-radius: 2px;
        border: none;
        cursor: pointer;
        transition: background 0.4s ease;
    }

    .text_slide__glide__bullet:hover {
        background-color: var(--element-main);
    }

    .text_slide__glide__bullet.glide__bullet--active {
        background-color: var(--element-main);
    }
</style>
