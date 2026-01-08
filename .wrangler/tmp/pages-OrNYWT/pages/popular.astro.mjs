globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cgw2UP0D.mjs';
import { $ as $$Posts } from '../chunks/Posts_YScPo1Sa.mjs';
import { $ as $$Base } from '../chunks/Base_DN9ImJ8y.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_93vWgF-o.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Popular = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Popular;
  let posts = [];
  if (Astro2.locals?.runtime?.env?.DB) {
    const { DB } = Astro2.locals.runtime.env;
    const result = await DB.prepare(`
    SELECT
      slug,
      title,
      description,
      image,
      date,
      views
    FROM articles
    WHERE draft = 0
    ORDER BY views DESC
  `).all();
    posts = (result.results ?? []).map((row) => ({
      id: row.slug,
      slug: row.slug,
      body: "",
      // 添加空body字段
      data: {
        title: row.title,
        description: row.description,
        image: row.image,
        date: row.date,
        views: row.views,
        authors: [],
        // 添加空authors数组
        categories: []
        // 添加空categories数组
      }
    }));
  }
  const title = "\u70ED\u95E8\u6392\u884C";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="section"> <div class="container"> <p class="text-center text-2xl mb-4"></p> <h1 class="h2 mb-16 text-center text-primary">${title}</h1> ${renderComponent($$result2, "Posts", $$Posts, { "posts": posts, "fluid": false })} </div> </div> ` })}`;
}, "I:/\u963F\u91CC\u4E91\u76D8\u4E0B\u8F7D/Astro-main/Astro-main/src/pages/popular.astro", void 0);

const $$file = "I:/阿里云盘下载/Astro-main/Astro-main/src/pages/popular.astro";
const $$url = "/popular";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Popular,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
