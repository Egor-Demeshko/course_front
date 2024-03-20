<script>
    import {
        MODAL_TYPES_CONTACTS,
        MODAL_TYPES_LOGIN,
        MODAL_TYPES_REGISTRATION,
    } from "../modalConst.js";
    export let type = "";
</script>

<h4>
    {type === MODAL_TYPES_CONTACTS
        ? "Контакты:"
        : type === MODAL_TYPES_LOGIN
          ? "Войти в рабочий кабинет:"
          : type === MODAL_TYPES_REGISTRATION
            ? "Зарегистрировать новую учетную запись:"
            : ""}
</h4>

<style>
    h4 {
        font-size: clamp(1.25rem, 2.2vw, 2rem);
        margin: 0;
        margin-bottom: 38px;
        color: var(--element-main);
    }
</style>
