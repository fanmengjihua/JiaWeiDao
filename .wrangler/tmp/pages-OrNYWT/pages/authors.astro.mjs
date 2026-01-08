globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cgw2UP0D.mjs';
import { $ as $$Authors } from '../chunks/Authors_D-h510eu.mjs';
import { c as config, $ as $$Base, m as markdownify } from '../chunks/Base_DN9ImJ8y.mjs';
import { $ as $$Pagination } from '../chunks/Pagination_C5NBh-o6.mjs';
import { g as getSinglePage } from '../chunks/contentParser_B-CJRfij.mjs';
import { s as sortByDate } from '../chunks/sortFunctions_Bo6ewfVN.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_93vWgF-o.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const authors = await getSinglePage("authors");
  const sortedPosts = sortByDate(authors);
  const totalPages = Math.ceil(authors.length / config.settings.pagination);
  const currentPosts = sortedPosts.slice(0, config.settings.pagination);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Authors" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container text-center"> <h1 class="page-heading h2">${markdownify("Authors")}</h1> ${renderComponent($$result2, "Authors", $$Authors, { "authors": currentPosts })} ${renderComponent($$result2, "Pagination", $$Pagination, { "section": "authors", "currentPage": 1, "totalPages": totalPages })} </div> </section> ` })}`;
}, "I:/\u963F\u91CC\u4E91\u76D8\u4E0B\u8F7D/Astro-main/Astro-main/src/pages/authors/index.astro", void 0);

const $$file = "I:/阿里云盘下载/Astro-main/Astro-main/src/pages/authors/index.astro";
const $$url = "/authors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
