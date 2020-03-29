<script>
    import { Route } from 'svelte-router-spa'
    export let currentRoute

    const params = { validCheck: true }
</script>

<div class="app">
    <section class="section">
        <Route {currentRoute} {params} />
        <p>Route params are: {currentRoute.namedParams} and {currentRoute.queryParams}</p>
    </section>
</div>