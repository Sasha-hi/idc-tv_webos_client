<script>
	import { Router } from 'svelte-router-spa'
	import { routes } from './routes'
</script>
<style>
	:global(body) {
		/* this will apply to <body> */
		padding: 0;
		display: flex;
		background: #76b852; /* fallback for old browsers */
		background: -webkit-linear-gradient(right, #76b852, #8DC26F);
		background: -moz-linear-gradient(right, #76b852, #8DC26F);
		background: -o-linear-gradient(right, #76b852, #8DC26F);
		background: linear-gradient(to left, #76b852, #8DC26F);
		font-family: "Roboto", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>

<Router {routes} />