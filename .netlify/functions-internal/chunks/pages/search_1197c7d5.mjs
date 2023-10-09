/* empty css                           */import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_bef4dcfc.mjs';
import 'clsx';
import { $ as $$Layout } from './about_c54dcb8f.mjs';
import 'html-escaper';

const $$Astro = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Search" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1 class="text-5xl text-center">Search Coctails 🍹</h1>${renderComponent($$result2, "GetDrinks", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/Claudio/Desktop/astro-main/src/components/GetDrinks.tsx", "client:component-export": "default" })}` })}`;
}, "C:/Users/Claudio/Desktop/astro-main/src/pages/search.astro", void 0);

const $$file = "C:/Users/Claudio/Desktop/astro-main/src/pages/search.astro";
const $$url = "/search";

export { $$Search as default, $$file as file, $$url as url };
