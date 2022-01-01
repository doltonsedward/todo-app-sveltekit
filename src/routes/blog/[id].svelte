<script context="module">
    export const load = ({ params }) => {
        const id = params.id
        
        return {
            props: {
                id
            }
        }
    }
</script>

<script>
    export let id
</script>

{id}
<h1 class="text-4xl">Welcome to blog</h1>