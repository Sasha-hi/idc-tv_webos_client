<script>
	import { Navigate } from 'svelte-router-spa'
</script>

<main>
	<h1>Hello, i am Third!</h1>
	<p>Navigate to <Navigate to="first">First</Navigate>.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>