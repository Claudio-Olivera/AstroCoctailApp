/* empty css                           */import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderComponent, h as renderHead } from '../astro_bef4dcfc.mjs';
import 'clsx';

const $$Astro$8 = createAstro();
const $$HeaderButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$HeaderButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="flex-row justify-center text-white cursor-pointer hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-70 hover:opacity-100"${addAttribute(href, "href")}>${renderSlot($$result, $$slots["before-text"])}${renderSlot($$result, $$slots["default"], renderTemplate`<!-- Si quisiera poder posicionar los iconos despues del texto (el slot que no tiene name) --><!-- <slot name="after-text" /> -->`)}</a>`;
}, "C:/Users/Claudio/Desktop/astro-main/src/components/HeaderButton.astro", void 0);

const $$Astro$7 = createAstro();
const $$InfoSvg = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$InfoSvg;
  return renderTemplate`${maybeRenderHead()}<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M12 9h.01"></path><path d="M11 12h1v4h1"></path></svg>`;
}, "C:/Users/Claudio/Desktop/astro-main/src/components/InfoSvg.astro", void 0);

const $$Astro$6 = createAstro();
const $$NewsSvg = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$NewsSvg;
  return renderTemplate`${maybeRenderHead()}<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"></path><path d="M8 8l4 0"></path><path d="M8 12l4 0"></path><path d="M8 16l4 0"></path></svg>`;
}, "C:/Users/Claudio/Desktop/astro-main/src/components/NewsSvg.astro", void 0);

const $$Astro$5 = createAstro();
const $$SearchSvg = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SearchSvg;
  return renderTemplate`${maybeRenderHead()}<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg>`;
}, "C:/Users/Claudio/Desktop/astro-main/src/components/SearchSvg.astro", void 0);

const $$Astro$4 = createAstro();
const $$TipsSvg = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TipsSvg;
  return renderTemplate`${maybeRenderHead()}<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"></path><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"></path><path d="M9.7 17l4.6 0"></path></svg>`;
}, "C:/Users/Claudio/Desktop/astro-main/src/components/TipsSvg.astro", void 0);

const $$Astro$3 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<nav class="flex flex-col justify-between items-center w-full text-center md:flex-row">${renderComponent($$result, "HeaderButton", $$HeaderButton, { "href": "/about" }, { "before-text": ($$result2) => renderTemplate`${renderComponent($$result2, "InfoSvg", $$InfoSvg, { "slot": "before-text" })}`, "default": ($$result2) => renderTemplate`
About
` })}${renderComponent($$result, "HeaderButton", $$HeaderButton, { "href": "/tips" }, { "before-text": ($$result2) => renderTemplate`${renderComponent($$result2, "TipsSvg", $$TipsSvg, { "slot": "before-text" })}`, "default": ($$result2) => renderTemplate`
Tips
` })}${renderComponent($$result, "HeaderButton", $$HeaderButton, { "href": "/news" }, { "before-text": ($$result2) => renderTemplate`${renderComponent($$result2, "NewsSvg", $$NewsSvg, { "slot": "before-text" })}`, "default": ($$result2) => renderTemplate`
News
` })}${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white", "href": "/search" }, { "before-text": ($$result2) => renderTemplate`${renderComponent($$result2, "SearchSvg", $$SearchSvg, { "slot": "before-text" })}`, "default": ($$result2) => renderTemplate`
Search
` })}</nav>`;
}, "C:/Users/Claudio/Desktop/astro-main/src/components/Nav.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="p-8 px-4 mx-auto max-w-xl lg:py-16 lg:px-6"><div class="mx-auto text-center mb-8 lg:mb-16"><h2 class="mb-4 text-5xl tracking-tight font-extrabold text-white">
You Cocktail 🍸
</h2><p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
All information about coktail's
</p></div>${renderComponent($$result, "Nav", $$Nav, {})}</header>`;
}, "C:/Users/Claudio/Desktop/astro-main/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head><body class="bg-gray-900 min-h-screen pb-32">${renderComponent($$result, "Header", $$Header, {})}<main class="max-w-5xl px-4 m-auto">${renderSlot($$result, $$slots["default"])}</main></body></html>`;
}, "C:/Users/Claudio/Desktop/astro-main/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "You Cocktail" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1 class="mb-4 text-5xl tracking-tight font-extrabold text-white">You Cocktail 🍸</h1><p>Tu fuente definitiva para explorar el emocionante mundo de los cócteles. Aquí, te sumergirás en un universo lleno de sabores, noticias intrigantes y consejos expertos que te ayudarán a perfeccionar tus habilidades en la preparación de cócteles. Nuestra pasión es hacer que tus cócteles sean inolvidables, y estamos aquí para guiar tu viaje por el arte de la mixología.</p><h2>Descubre el Arte de la Mixología</h2><p>Si eres un aficionado de los cócteles o un experto en mixología, encontrarás algo para ti en You Cocktail. Navega a través de nuestras detalladas guías de cócteles para aprender a preparar tus bebidas favoritas con precisión y estilo. Desde los clásicos, como el Martini y el Mojito, hasta creaciones innovadoras, nuestro equipo de expertos te llevará paso a paso a través de las recetas más deliciosas.</p><h2>Mantente Informado sobre el Mundo de los Cócteles y Bares</h2><p>En You Cocktail, no solo te ofrecemos recetas y consejos, sino que también te mantenemos al día con las últimas tendencias y noticias del mundo de los cócteles y bares. Descubre qué bebidas están en auge, aprende sobre los barmans más destacados y conoce las historias detrás de los cócteles icónicos. ¡La cultura de los cócteles está en constante evolución, y queremos que estés a la vanguardia!</p><h2>Consejos para Ser un Experto en la Preparación de Cócteles</h2><p>¿Quieres impresionar a tus amigos con cócteles excepcionales en tu próxima reunión? Nuestra sección de consejos te brindará las herramientas y técnicas necesarias para convertirte en un maestro de la mixología en tu propio hogar. Aprende a seleccionar los ingredientes adecuados, a medir con precisión y a presentar tus creaciones de manera espectacular. La clave para un cóctel perfecto está en los detalles, y nosotros te los revelamos.</p><h2>Explora, Experimenta y Disfruta Responsablemente</h2><p>Te alentamos a explorar nuevas recetas, experimentar con sabores únicos y disfrutar del proceso de preparación de cócteles. Sin embargo, también enfatizamos la responsabilidad. Beber con moderación es esencial para garantizar una experiencia segura y agradable. En You Cocktail, promovemos la cultura de beber de forma consciente y responsable.</p><p>Únete a nosotros en este emocionante viaje a través del mundo de los cócteles. Ya seas un principiante o un experto, estamos aquí para inspirarte y ayudarte a elevar tus habilidades en la mixología. ¡Prepárate para descubrir, aprender y disfrutar de los cócteles como nunca antes! ¡Salud! 🍹🍸🥂</p>` })}`;
}, "C:/Users/Claudio/Desktop/astro-main/src/pages/about.astro", void 0);

const $$file = "C:/Users/Claudio/Desktop/astro-main/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, about as a };
