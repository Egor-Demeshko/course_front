<script>
    import { page } from "$app/stores";

    const { videourl, hello_images } = $page.data;
    let firstImg = hello_images[0];
    let secondImg = hello_images[1];
</script>

<section
    aria-label="Приветственный блок с видео в котором коротко рассказано о курсе"
    class="site_center"
>
    <div class="hello_block">
        <h1>
            Онлайн курс - проведение государственных закупок, с <span
                >выдачей</span
            >
            сертификата.
        </h1>
        <img
            class="first_img"
            src={firstImg.src}
            alt={firstImg.alt}
            width="260"
            height="208"
        />
        <div class="hello_block__media">
            <img class="second_img" src={secondImg.src} alt={secondImg.alt} />
            <iframe
                width="540"
                height="378"
                src="{videourl}&controls=0&modestbranding=1&showinfo=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        </div>
    </div>
</section>

<style>
    :root {
        --slide-up: translateY(-100px);
    }

    section {
        position: relative;
        height: 100vh;
    }

    .hello_block {
        position: absolute;
        top: 50%;
        width: 100%;
    }

    h1 {
        position: absolute;
        top: 0;
        margin: 0;
        transform: var(--slide-up);
        width: clamp(300px, 50vw, 730px);
        font-size: clamp(1.25rem, 2.6vw, 2.375rem);
    }

    span {
        display: inline-block;
        border-bottom: 4px solid var(--element-danger);
    }

    iframe {
        border-radius: 80px 14px 80px 14px;
        position: relative;
        width: clamp(300px, 90vw, 540px);
    }

    .hello_block__media {
        position: absolute;
        right: 40px;
        top: 0;
        transform: var(--slide-up);
    }

    /** IMAGES */
    img {
        display: block;
        position: absolute;
        border: 4px solid var(--element-main);
    }

    .first_img,
    .second_img {
        border-radius: 52px 14px 52px 14px;
    }

    .first_img {
        right: 0;
        top: 0;
        transform: translateY(-100%);
    }

    .second_img {
        left: 0;
        bottom: 0;
        transform: translate(-50%, 50%);
    }

    @media screen and (max-width: 1150px) {
        section {
            height: unset;
            padding-top: clamp(100px, 14vh, 200px);
            padding-bottom: var(--padding-betweenblocks);
        }
        .hello_block {
            position: relative;
            top: unset;
            display: flex;
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
        }

        h1 {
            position: relative;
            transform: none;
            top: unset;
            right: unset;
            transform: unset;
            width: unset;
        }

        .first_img {
            display: none;
        }

        .second_img {
            position: relative;
            left: unset;
            bottom: unset;
            transform: unset;
            border-radius: 14px;
            max-width: 300px;
        }

        .hello_block__media {
            position: relative;
            right: unset;
            top: unset;
            transform: unset;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }

        iframe {
            max-width: 580px;
            border-radius: 14px;
        }
    }

    @media screen and (max-width: 580px) {
        section {
            padding-bottom: var(--padding-betweenblocks);
        }
    }
</style>
