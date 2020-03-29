import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
import '../public/global.css'
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
	}
});

M.AutoInit()

export default app;