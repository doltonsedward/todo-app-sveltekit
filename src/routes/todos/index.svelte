

<script>
    import Head from '$lib/Head.svelte' 
    import { onMount } from 'svelte';
    
    export let todoName = ''
    let dataTodo = []

    const getDataTodos = async () => {
        try {
            const response = await fetch('/api/todos')
            const todos = await response.json()
            dataTodo = todos.data
        } catch (error) {
            console.log(error)
        }
    }

    onMount(() => {
        getDataTodos()
    })

    const handleSubmit = async (name) => {
        try {
            const config = {
                method: "POST",
                body: JSON.stringify({
                    name
                })
            }
            
            await fetch('/api/todos', config)
            getDataTodos()
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleCreateTodo = () => {
        handleSubmit(todoName)
        todoName = ''
    }
</script>

<Head title="Todos" />
<h1 class="text-center text-4xl">Todos</h1>
<form on:submit|preventDefault={handleCreateTodo}>
    <input class="mt-5 py-1.5 px-1.5 w-full rounded ring-offset-2 ring-2" type="text" bind:value={todoName} placeholder="Write your todo" />
</form>

<div>
    {#each dataTodo as todo}
        <p>{todo.name}</p>
    {/each}
</div>