globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cgw2UP0D.mjs';
import { $ as $$Posts } from '../chunks/Posts_YScPo1Sa.mjs';
import { $ as $$Base } from '../chunks/Base_DN9ImJ8y.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_93vWgF-o.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let posts = [];
  if (Astro2.locals?.runtime?.env?.DB) {
    const { DB } = Astro2.locals.runtime.env;
    const result = await DB.prepare(`
    SELECT *
    FROM articles
    WHERE draft = 0
    ORDER BY date DESC
  `).all();
    posts = (result.results ?? []).map((row) => ({
      id: row.slug,
      slug: row.slug,
      body: "",
      data: {
        title: row.title,
        description: row.description,
        image: row.image,
        date: row.date,
        views: row.views,
        authors: [],
        categories: []
      }
    }));
  }
  const title = "\u535A\u5BA2";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="section"> <div class="container"> <h1 class="h2 mb-16 text-center text-primary">${title}</h1> ${renderComponent($$result2, "Posts", $$Posts, { "posts": posts, "fluid": false })} </div> </div> ` })}`;
}, "I:/\u963F\u91CC\u4E91\u76D8\u4E0B\u8F7D/Astro-main/Astro-main/src/pages/blog/index.astro", void 0);

const $$file = "I:/阿里云盘下载/Astro-main/Astro-main/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
