globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_Cgw2UP0D.mjs';
import { $ as $$Base, m as markdownify } from '../chunks/Base_DN9ImJ8y.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_pp92rEe0.mjs';
import { g as getEntry, r as renderEntry } from '../chunks/_astro_content_BEH0vpME.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_93vWgF-o.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await getEntry("about", "-index");
  const { Content } = await renderEntry(entry);
  const { title, meta_title, image } = entry.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "image": image }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row md:gx-4"> <div class="sm:col-5 md:col-4"> ${image && renderTemplate`<div class="img-cover mb-8"> ${renderComponent($$result2, "Image", $$Image, { "src": image, "width": 295, "height": 395, "alt": title, "class": "rounded-lg w-full" })} </div>`} </div> <div class="sm:col-7 md:col-8"> <h1 class="h3 mb-8">${unescapeHTML(markdownify(title))}</h1> <div class="content"> ${renderComponent($$result2, "Content", Content, {})} </div> <a href="/contact" class="btn btn-primary text-white py-2">聯絡我們</a> </div> </div> </div> </section> ` })}`;
}, "I:/\u963F\u91CC\u4E91\u76D8\u4E0B\u8F7D/Astro-main/Astro-main/src/pages/about.astro", void 0);

const $$file = "I:/阿里云盘下载/Astro-main/Astro-main/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
