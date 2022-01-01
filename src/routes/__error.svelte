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

<div class="text-center">
    <h1 class="text-4xl">{error.name} {status}</h1>
    <p>{error.message}</p>
</div>