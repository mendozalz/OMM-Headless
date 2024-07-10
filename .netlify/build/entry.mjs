import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BJjMbn1T.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/biografia.astro.mjs');
const _page2 = () => import('./pages/contacto.astro.mjs');
const _page3 = () => import('./pages/folclor.astro.mjs');
const _page4 = () => import('./pages/gal.astro.mjs');
const _page5 = () => import('./pages/galeria.astro.mjs');
const _page6 = () => import('./pages/home.astro.mjs');
const _page7 = () => import('./pages/libros/_---slug_.astro.mjs');
const _page8 = () => import('./pages/musica.astro.mjs');
const _page9 = () => import('./pages/teatro.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/biografia.astro", _page1],
    ["src/pages/contacto.astro", _page2],
    ["src/pages/folclor.astro", _page3],
    ["src/pages/gal.astro", _page4],
    ["src/pages/galeria.astro", _page5],
    ["src/pages/home.astro", _page6],
    ["src/pages/libros/[...slug].astro", _page7],
    ["src/pages/musica.astro", _page8],
    ["src/pages/teatro.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "74f62555-8f9e-4479-b78f-70400f16560f"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
