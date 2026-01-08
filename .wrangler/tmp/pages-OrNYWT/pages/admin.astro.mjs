globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cgw2UP0D.mjs';
import { $ as $$Base } from '../chunks/Base_DN9ImJ8y.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_93vWgF-o.mjs';

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "\u6587\u7AE0\u7BA1\u7406 - \u7BA1\u7406\u540E\u53F0", "description": "\u7BA1\u7406\u548C\u53D1\u5E03\u6587\u7AE0\u7684\u7BA1\u7406\u754C\u9762" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-8"> <div class="flex items-center justify-between mb-8"> <h1 class="text-3xl font-bold">文章管理</h1> <a href="/admin/editor" class="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-colors">
➕ 新建文章
</a> </div> <div class="bg-white rounded-lg shadow-md p-6"> <h2 class="text-xl font-semibold mb-4">文章管理</h2> <div class="py-12 text-center text-gray-500"> <p class="text-lg">使用右侧按钮创建新文章</p> </div> </div> </div>  ` })}`;
}, "I:/\u963F\u91CC\u4E91\u76D8\u4E0B\u8F7D/Astro-main/Astro-main/src/pages/admin/index.astro", void 0);

const $$file = "I:/阿里云盘下载/Astro-main/Astro-main/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
