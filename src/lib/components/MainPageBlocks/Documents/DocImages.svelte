<div>
    <img
        src="documents/pismo.jpg"
        alt="Изображение письмо для ИП Демешко от МАРТ о соглаовании программы"
        loading="lazy"
        width="248"
        height="337"
    />
    <img
        src="documents/svidetelstvo.jpg"
        alt="Свидетельство о государственой регистрации"
        loading="lazy"
        width="248"
        height="337"
    />
</div>

<style>
    div {
        display: flex;
        flex-wrap: wrap;
        gap: clamp(30px, 5.7vw, 80px);
        justify-content: center;
    }

    img {
        display: block;
        border-radius: 80px 14px 80px 14px;
        transition: transform 0.4s ease;
    }

    img:hover {
        transform: scale(1.15);
    }
</style>
