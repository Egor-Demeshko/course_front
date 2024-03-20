<script>
    export let name = "";
</script>

<div style="overflow: hidden">
    <div class="site_center">
        <h2>{name}</h2>
    </div>
</div>

<style>
    h2 {
        font-size: clamp(1.125rem, 2.2vw, 2rem);
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
        z-index: 4;
    }

    h2:after {
        content: "";
        height: 8px;
        position: absolute;
        background-color: var(--element-main);
        top: 50%;
        left: 100%;
        transform: translateX(34px);
        width: 90vw;
        border-radius: 4px;
    }
</style>
