<script context="module">
    export const load = ({ error, status }) => ({
        props: {
            error: error,
            status: status
        }
    })
</script>

<script>
    import Head from '$lib/Head.svelte'
    export let error
    export let status
</script>

<Head title={error.name} />
<div class="error__pages text-center">
    <h1 class="text-5xl">{error.name} {status}</h1>
    <p class="text-lg">{error.message}</p>
    <button class="bg-indigo-400 text-white rounded py-2 mt-5 drop-shadow-xl hover:bg-indigo-500 hover:ring-offset-2 hover:ring-2" on:click={() => history.back()}>Go back</button>
</div>

<style>
    .error__pages {
        display: grid;
        place-content: center;
        height: calc(100vh - var(--header-height));
    }

    h1 { margin-bottom: 10px }
    button:hover {
        transform: scale(1.12);
    }
</style>