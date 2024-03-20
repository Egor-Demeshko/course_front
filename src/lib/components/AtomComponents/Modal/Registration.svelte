<script>
    import Button from "../Button.svelte";
    import ModalHeading from "./ModalHeading.svelte";
    import { modalState } from "../stores";
    import Input from "../Input.svelte";

    export let type = "";

    /**
     * @param e {Event}
     */
    function startRegistration(e) {
        e.preventDefault();
        //TODO РЕГИСТРАЦИЯ
    }
</script>

<form
    id="registration"
    class="contacts__inner"
    aria-live="polite"
    role="alertdialog"
>
    <ModalHeading {type} />

    <div class="contacts__row">
        <Input name="username" type="text" placeholder="Имя учетной записи" />
        <Input name="email" type="email" placeholder="Ваша электронная почта" />
        <Input name="password" type="password" placeholder="Ваш пароль" />
        <Input
            name="passwordRepeat"
            type="password"
            placeholder="Повторите пароль"
        />
        <Input name="nounce" type="hidden" />
    </div>

    <div class="contacts__row contacts__row--row">
        <Button
            data={{ name: "Войти", type: "main", isSubmit: true }}
            clickHandle={startRegistration}
        />
        <Button
            data={{ name: "Назад", type: "secondary" }}
            clickHandle={() => {
                modalState.set({ type, show: false });
            }}
        />
    </div>
</form>

<style>
    .contacts__row {
        display: flex;
        flex-direction: column;
        gap: 2.625rem;
        margin-top: 60px;
    }

    .contacts__row--row {
        flex-direction: row;
        gap: clamp(2rem, 8vw, 112px);
        justify-content: center;
    }
</style>
