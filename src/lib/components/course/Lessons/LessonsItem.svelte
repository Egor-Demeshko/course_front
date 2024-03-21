<script>
    /**
     * @type {{name: string, type: string, watched: boolean}}
     */
    export let lessonData = { name: "", type: "", watched: false };

    const { name, type, watched } = lessonData;
</script>

<li class="lesson-item">
    <div class="lesson__checkbox">
        {#if watched}
            <svg
                width="31"
                height="23"
                viewBox="0 0 31 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10.9169 22.9988C10.3372 22.9988 9.79471 22.6965 9.46807 22.1902C6.73947 17.9509 3.92571 14.9735 0.866976 13.091C0.0328807 12.5774 -0.248262 11.4481 0.239363 10.5695C0.725821 9.69092 1.7979 9.39232 2.63316 9.90842C5.5834 11.7246 8.29801 14.3653 10.882 17.9435C15.8527 10.5609 21.7112 4.62583 28.3245 0.279578C29.1469 -0.258634 30.2236 0.00309916 30.7346 0.868171C31.2455 1.73201 30.9971 2.86865 30.1758 3.40686C23.2522 7.95586 17.4311 14.0937 12.3763 22.1706C12.0543 22.6854 11.5107 22.9963 10.9263 23C10.9239 22.9988 10.9204 22.9988 10.9169 22.9988Z"
                    fill="currentColor"
                />
            </svg>
        {/if}
    </div>

    <p>{name}</p>
</li>

<style>
    .lesson__checkbox {
        position: relative;
        border: 4px solid var(--element-secondary);
        border-radius: 2px;
        width: 1.82rem;
        height: 1.82rem;
        flex: 0 0 1.82rem;
    }

    .lesson__checkbox svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--element-main);
    }

    .lesson-item {
        list-style: none;
        padding: 1rem 2.25rem;
        display: flex;
        gap: 1rem;
        align-items: center;
        cursor: pointer;
        background-color: transparent;
        transition: background 0.3s ease;
    }

    .lesson-item:hover {
        background-color: var(--background);
    }
</style>
