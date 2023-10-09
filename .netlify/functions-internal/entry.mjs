import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_9701b4a0.mjs';
import 'react';
import 'react-dom/server';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_bef4dcfc.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_7e79d8c4.mjs');
const _page1  = () => import('./chunks/index_c26667c6.mjs');
const _page2  = () => import('./chunks/search_021ba2dd.mjs');
const _page3  = () => import('./chunks/about_9e11a854.mjs');
const _page4  = () => import('./chunks/news_28999666.mjs');
const _page5  = () => import('./chunks/tips_cd5b013e.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/search.astro", _page2],["src/pages/about.astro", _page3],["src/pages/news.md", _page4],["src/pages/tips.md", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
