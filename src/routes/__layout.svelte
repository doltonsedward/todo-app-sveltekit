<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
</script>

<Header />
<div class="main-app px-10 sm:px-20">
	<slot />
</div>
