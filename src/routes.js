import First from './views/public/First.svelte'
import Second from './views/public/Second.svelte'
import Third from './views/public/Third.svelte'
import Fourth from './views/public/Fourth.svelte'
import Login from './views/public/Login.svelte'
import Video from './views/public/video_stream/Index.svelte'

const routes = [
    { name: '/', component: Login },
    { name: 'first', component: First },
    { name: 'second', component: Second },
    { name: 'third', component: Third },
    { name: 'fourth', component: Fourth },
    { name: 'video', component: Video }
]

export { routes }