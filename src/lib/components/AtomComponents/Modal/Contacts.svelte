<script>
    import Button from "../Button.svelte";
    import ModalHeading from "./ModalHeading.svelte";
    import { modalState } from "../stores";

    export let type = "";

    /**
     *
     * @param e {Event}
     */
    function copyToClipboard(e) {
        const anchor = e.target.previousElementSibling;
        if (anchor instanceof HTMLAnchorElement) {
            navigator.clipboard.writeText(anchor.textContent);
        }
    }
</script>

<div class="contacts__inner" aria-live="polite" role="alertdialog">
    <ModalHeading {type} />

    <div class="contacts__row">
        <a
            href="tel:+375292158632"
            aria-label="Позвонить по телефону +375292158632">+375292158632</a
        >
        <svg
            width="28"
            height="32"
            viewBox="0 0 28 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            tabindex="0"
            role="button"
            aria-label="Скопировать номер в буфер обмена"
            title="Скопировать номер в буфер обмена"
            on:click={copyToClipboard}
        >
            <path
                d="M20.6666 0.416748H3.66659C2.10117 0.416748 0.833252 1.68466 0.833252 3.25008V23.0834H3.66659V3.25008H20.6666V0.416748ZM24.9166 6.08341H9.33325C7.76784 6.08341 6.49992 7.35133 6.49992 8.91675V28.7501C6.49992 30.3155 7.76784 31.5834 9.33325 31.5834H24.9166C26.482 31.5834 27.7499 30.3155 27.7499 28.7501V8.91675C27.7499 7.35133 26.482 6.08341 24.9166 6.08341ZM24.9166 28.7501H9.33325V8.91675H24.9166V28.7501Z"
                fill="currentColor"
            />
        </svg>
    </div>

    <div class="contacts__row">
        <a
            href="mailto:demeshko.egor@gmail.com"
            aria-label="Электронная почта: demeshko.egor@gmail.com"
            >demeshko.egor@gmail.com</a
        >
        <svg
            width="28"
            height="32"
            viewBox="0 0 28 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            on:click={copyToClipboard}
            tabindex="0"
            role="button"
            aria-label="Скопировать почту в буфер обмена"
            title="Скопировать почту в буфер обмена"
        >
            <path
                d="M20.6666 0.416748H3.66659C2.10117 0.416748 0.833252 1.68466 0.833252 3.25008V23.0834H3.66659V3.25008H20.6666V0.416748ZM24.9166 6.08341H9.33325C7.76784 6.08341 6.49992 7.35133 6.49992 8.91675V28.7501C6.49992 30.3155 7.76784 31.5834 9.33325 31.5834H24.9166C26.482 31.5834 27.7499 30.3155 27.7499 28.7501V8.91675C27.7499 7.35133 26.482 6.08341 24.9166 6.08341ZM24.9166 28.7501H9.33325V8.91675H24.9166V28.7501Z"
                fill="currentColor"
            />
        </svg>
    </div>

    <div class="contacts__row_button">
        <Button
            data={{ name: "Назад", type: "secondary" }}
            clickHandle={() => {
                modalState.set({ type, show: false });
            }}
            ariaData={{ label: "Закрыть модальное окно" }}
        />
    </div>
</div>

<style>
    .contacts__row {
        color: var(--element-main);
        display: flex;
        gap: clamp(1.25rem, 4vw, 2.25rem);
    }

    .contacts__row:nth-child(n + 1) {
        margin-top: 1.5rem;
    }

    .contacts__row > a {
        font-size: clamp(1.25rem, 2.2vw, 2rem);
        text-transform: uppercase;
        margin: 0;
        text-decoration: none;
        word-break: break-word;
    }
    .contacts__row > svg {
        cursor: pointer;
    }

    .contacts__row_button {
        margin-top: clamp(80px, 10vw, 140px);
    }
</style>
