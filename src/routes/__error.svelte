<script context="module">
    export const load = ({ error, status }) => ({
        props: {
            error: error,
            status: status
        }
    })
</script>

<script>
    export let error
    export let status
</script>

<div class="error__pages text-center">
    <h1 class="text-5xl">{error.name} {status}</h1>
    <p class="text-lg">{error.message}</p>
    <button on:click={() => history.back()}>Go back</button>
</div>

<style>
    .error__pages {
        display: grid;
        place-content: center;
        height: calc(100vh - var(--header-height));
    }

    h1 {
        margin-bottom: 10px;
    }
</style>