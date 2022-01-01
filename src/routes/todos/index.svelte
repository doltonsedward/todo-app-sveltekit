<script>
	import Head from '$lib/Head.svelte';
	import { onMount } from 'svelte';

	export let todoName = '';
	let dataTodo = [];

	const getDataTodos = async () => {
		try {
			const response = await fetch('/api/todos');
			const todos = await response.json();
			dataTodo = todos.data;
		} catch (error) {
			console.log(error);
		}
	};

	onMount(() => {
		getDataTodos();
	});

	const handleSubmit = async (name, id) => {
		try {
			const config = {
				method: !id ? 'POST' : 'PUT',
				body: JSON.stringify({
					name,
					status: 'waiting'
				})
			};

			await fetch(`/api${!id ? '/todos' : '/todos' + id}`, config);
			getDataTodos();
		} catch (error) {
			console.log(error);
		}
	};

	const handleUpdate = async (id) => {
		try {
			const config = {
				method: 'PUT',
				body: JSON.stringify({
					name: 'oke',
					status: 'done'
				})
			};

			await fetch('/api/todos/' + id, config);
		} catch (error) {
			console.log(error);
		}
	};

	const handleCreateTodo = () => {
		handleSubmit(todoName);
		todoName = '';
	};

	$: console.log(dataTodo);
</script>

<Head title="Todos" />
<h1 class="text-center text-4xl">Todos</h1>
<form on:submit|preventDefault={handleCreateTodo}>
	<input
		class="mt-5 py-1.5 px-1.5 w-full rounded ring-offset-2 ring-2"
		type="text"
		bind:value={todoName}
		placeholder="Write your todo"
	/>
</form>
<div class="mt-5">
	{#each dataTodo as todo, id}
		<div class="p-4 my-2 card shadow-lg">
			<label on:click={() => handleUpdate(id)} class="flex">
				<input type="checkbox" class="checkbox mr-3" />
				<span>{todo.name}</span>
			</label>
		</div>
	{/each}
</div>
