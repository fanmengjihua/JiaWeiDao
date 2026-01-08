globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_Cgw2UP0D.mjs';
import { $ as $$Pagination } from '../chunks/Pagination_C5NBh-o6.mjs';
import { c as config, $ as $$Base } from '../chunks/Base_DN9ImJ8y.mjs';
import { d as dateFormat } from '../chunks/dateFormat_B6sxLX_1.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_93vWgF-o.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let posts = [];
  if (Astro2.locals?.runtime?.env?.DB) {
    const { DB } = Astro2.locals.runtime.env;
    const result = await DB.prepare(`
    SELECT
      slug,
      title,
      description,
      image,
      date
    FROM articles
    WHERE draft = 0
    ORDER BY date DESC
  `).all();
    posts = result.results ?? [];
  }
  const pageSize = config.settings.pagination;
  const totalPages = Math.ceil(posts.length / pageSize);
  const currentPosts = posts.slice(0, pageSize);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row gy-5 gx-4 mb-16"> ${currentPosts.map((post, i) => renderTemplate`<div${addAttribute(i === 0 ? "col-12" : "col-12 sm:col-6", "class")}> ${post.image && renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="rounded-lg block hover:text-primary overflow-hidden group"> <img class="group-hover:scale-[1.03] transition duration-300 w-full"${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")}${addAttribute(i === 0 ? 925 : 445, "width")}${addAttribute(i === 0 ? 475 : 230, "height")}> </a>`} <ul class="mt-6 mb-4 flex flex-wrap items-center text-text"> <li class="mr-5 flex items-center flex-wrap font-medium"> ${dateFormat(post.date)} </li> </ul> <h3 class="mb-4"> <a${addAttribute(`/blog/${post.slug}`, "href")} class="block hover:text-primary transition duration-300"> ${post.title} </a> </h3> <p class="text-text line-clamp-2">${post.description}</p> </div>`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": 1, "totalPages": totalPages })} </div> </section> ` })}`;
}, "I:/\u963F\u91CC\u4E91\u76D8\u4E0B\u8F7D/Astro-main/Astro-main/src/pages/index.astro", void 0);

const $$file = "I:/阿里云盘下载/Astro-main/Astro-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
