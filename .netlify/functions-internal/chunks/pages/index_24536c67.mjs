/* empty css                           */import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent } from '../astro_bef4dcfc.mjs';
import 'clsx';
import { $ as $$Layout } from './about_c54dcb8f.mjs';
import 'html-escaper';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Coctails app" }, { "default": ($$result2) => renderTemplate`
La página principal de la app
` })}`;
}, "C:/Users/Claudio/Desktop/astro-main/src/pages/index.astro", void 0);

const $$file = "C:/Users/Claudio/Desktop/astro-main/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
