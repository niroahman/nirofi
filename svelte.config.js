//import adapter from '@sveltejs/adapter-static';
import appengine from 'svelte-adapter-appengine';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: appengine()
	},
	vite: {
		svelte: { configFile: '../svelte.config.js' }
	}
};

export default config;
