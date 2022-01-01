<script>
    import Header from '$lib/Header.svelte'
</script>

<div class="layout px-10 sm:px-20">
    <Header />
    <div class="main-app py-4">
        <slot></slot>
    </div>
</div>