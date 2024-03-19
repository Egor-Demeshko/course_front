<script>
    export let name = "";
</script>

<div>
    <h2>{name}</h2>
</div>

<style>
    h2 {
        font-size: 2rem;
        font-weight: bold;
        color: var(--element-main);
        position: relative;
        display: inline-block;
    }

    h2:before {
        content: "";
        height: 8px;
        position: absolute;
        background-color: var(--element-main);
        top: 50%;
        right: 100%;
        transform: translateX(-34px);
        width: 20vw;
        border-radius: 4px;
    }

    h2:after {
        content: "";
        height: 8px;
        position: absolute;
        background-color: var(--element-main);
        top: 50%;
        left: 100%;
        transform: translateX(34px);
        width: 100%;
        border-radius: 4px;
    }
</style>
