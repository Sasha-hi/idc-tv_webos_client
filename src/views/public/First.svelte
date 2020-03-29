<script>
	import { Navigate } from 'svelte-router-spa'
</script>

<main>
	<h1>Hello, i am First!</h1>
	<p>Navigate to <Navigate to="second">Second</Navigate>.</p>
	<p>Navigate to <Navigate to="third">Third</Navigate>.</p>
	<p>Navigate to <Navigate to="fourth">Fourth</Navigate>.</p>
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