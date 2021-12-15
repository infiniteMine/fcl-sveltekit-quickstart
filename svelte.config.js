/** @type {import('@sveltejs/kit').Config} */

import resolve from '@rollup/plugin-node-resolve'
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

const config = {
  // options passed to svelte.compile (https://svelte.dev/docs#svelte_compile)
  compilerOptions: null,
  
  // an array of file extensions that should be treated as Svelte components
  extensions: ['.svelte'],
  
  kit: {
    files: {
      assets: 'static',
      hooks: 'src/hooks',
      lib: 'src/lib',
      routes: 'src/routes',
      serviceWorker: 'src/service-worker',
      template: 'src/app.html'
    },
    paths: {
			assets: '',
			base: ''
		},
    // hydrate: false,
    prerender: {
      crawl: false,
      enabled: false
    },
    router: true,
    ssr: false,
    vite: () => ({
      plugins: [
        builtins(),
        resolve({
          browser: true,
        }),
        globals(),
      ],
    }),
  },
  
  // SvelteKit uses vite-plugin-svelte. Its options can be provided directly here.

  // See the available options at https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md

};

export default config;