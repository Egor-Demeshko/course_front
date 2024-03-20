<script>
    /**
     * @type {HTMLElement}
     */
    let copyText;

    const organization = {
        name: "ИП Демешко Е.Д.",
        address: "г. Минск, ул. Княгининская, д.8, кв. 90",
    };

    const bank = {
        УНП: "391709480",
        "БИК БАНКА": "ALFABY2X",
        "Номер счета": "BY57ALFA30132242400080270000 в BYN в ЗАО 'Альфа-Банк'",
    };

    function clickHandle() {
        navigator.clipboard.writeText(`
        Название компании: ${organization.name}
        УНП: ${bank.УНП}
        Адрес компании: ${organization.address}
        Контактный телефон: +375 (29) 2158632
        Банковские данные: ${JSON.stringify(bank)}
        `);
        copyText.textContent = "Реквизиты скопированы";
    }
</script>

<footer class="site_center">
    <div class="footer__requisites">
        <!-- Contacts -->
        <div class="footer_contacts">
            <p><a href="tel:+375292158632">Телефон: +375 (29) 2158632</a></p>
            <p>
                <a href="mailto:demeshko.egor@gmail.com"
                    >Электронная почта: demeshko.egor@gmail.com</a
                >
            </p>
        </div>

        <!-- Bank -->
        <div class="footer_bank">
            {#each Object.values(organization) as value}
                <p>{value}</p>
            {/each}
            {#each Object.entries(bank) as [key, value]}
                <p>{key}: {value}</p>
            {/each}
        </div>
    </div>

    <div class="copy">
        <div class="copy__inner" on:click={clickHandle}>
            <p bind:this={copyText}>Скопировать реквизиты</p>
            <svg
                width="28"
                height="32"
                viewBox="0 0 28 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M20.6666 0.416748H3.66659C2.10117 0.416748 0.833252 1.68466 0.833252 3.25008V23.0834H3.66659V3.25008H20.6666V0.416748ZM24.9166 6.08341H9.33325C7.76784 6.08341 6.49992 7.35133 6.49992 8.91675V28.7501C6.49992 30.3155 7.76784 31.5834 9.33325 31.5834H24.9166C26.482 31.5834 27.7499 30.3155 27.7499 28.7501V8.91675C27.7499 7.35133 26.482 6.08341 24.9166 6.08341ZM24.9166 28.7501H9.33325V8.91675H24.9166V28.7501Z"
                    fill="white"
                />
            </svg>
        </div>
    </div>
</footer>

<style>
    footer {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 160px;
        padding: 28px 36px 40px;
        background-color: var(--element-main);
        border-radius: 14px 14px 0 0;
        color: var(--light-font);
    }

    .footer__requisites {
        display: flex;
        gap: 54px;
        flex-wrap: wrap;
    }

    .footer_contacts {
        font-size: 1rem;
        max-width: 180px;
    }

    .footer_contacts p {
        transition: opacity 0.4s ease;
    }

    .footer_contacts p:hover {
        opacity: 0.8;
    }

    .footer_bank p {
        margin: 0.5rem 0;
    }

    .copy {
        display: flex;
        align-items: start;
        gap: 0.875rem;
    }

    .copy__inner {
        display: flex;
        gap: 0.875rem;
        align-items: center;
        cursor: pointer;
        transition: opacity 0.4s ease;
    }

    .copy__inner:hover {
        opacity: 0.8;
    }

    @media screen and (max-width: 720px) {
        footer {
            padding: 28px 36px 100px;
        }
    }
</style>
