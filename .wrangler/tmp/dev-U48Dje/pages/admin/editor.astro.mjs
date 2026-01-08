globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript } from '../../chunks/astro/server_Cgw2UP0D.mjs';
import { $ as $$Base } from '../../chunks/Base_DN9ImJ8y.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_93vWgF-o.mjs';

const prerender = false;
const $$Editor = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "\u53D1\u5E03\u6587\u7AE0 - \u7BA1\u7406\u540E\u53F0", "description": "\u521B\u5EFA\u548C\u7F16\u8F91\u6587\u7AE0\u7684\u7BA1\u7406\u754C\u9762" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-8"> <div class="flex items-center justify-between mb-8"> <h1 class="text-3xl font-bold">发布文章</h1> <a href="/admin" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors">
返回管理后台
</a> </div> <div class="bg-white rounded-lg shadow-md p-6 mb-8"> <form id="article-form" class="space-y-6"> <div> <label for="title" class="block text-sm font-medium text-gray-700 mb-1">
文章标题 *
</label> <input type="text" id="title" name="title" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="请输入文章标题" required> </div> <div> <label for="meta_title" class="block text-sm font-medium text-gray-700 mb-1">
Meta 标题
</label> <input type="text" id="meta_title" name="meta_title" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="请输入 Meta 标题"> </div> <div> <label for="image" class="block text-sm font-medium text-gray-700 mb-1">
文章图片
</label> <div class="flex space-x-2"> <input type="text" id="image" name="image" class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="图片路径"> <input type="file" id="image-upload" name="image-upload" accept="image/*" class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <p class="text-xs text-gray-500 mt-1">支持 JPG、PNG、GIF 格式</p> </div> <div> <label for="youtube" class="block text-sm font-medium text-gray-700 mb-1">
YouTube 视频 ID
</label> <input type="text" id="youtube" name="youtube" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="请输入 YouTube 视频 ID"> </div> <div> <label for="authors" class="block text-sm font-medium text-gray-700 mb-1">
作者
</label> <select id="authors" name="authors" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"> <option value="JiaWeiDao" selected>JiaWeiDao</option> </select> </div> <div> <label for="views" class="block text-sm font-medium text-gray-700 mb-1">
浏览量
</label> <input type="number" id="views" name="views" min="0" value="0" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <div> <label for="markdown" class="block text-sm font-medium text-gray-700 mb-1">
文章内容 *
</label> <textarea id="markdown" name="markdown" rows="12" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm" placeholder="请输入 Markdown 格式的文章内容" required></textarea> </div> <div> <label for="categories" class="block text-sm font-medium text-gray-700 mb-1">
分类
</label> <select id="categories" name="categories" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"> <option value="">请选择分类</option> <option value="靈魂醬料">靈魂醬料</option> <option value="經典餅類">經典餅類</option> <option value="炸烤滷味">炸烤滷味</option> <option value="飽肚主食">飽肚主食</option> <option value="甜點冰品">甜點冰品</option> </select> </div> <div class="flex items-center"> <input type="checkbox" id="draft" name="draft" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked> <label for="draft" class="ml-2 block text-sm text-gray-700">
保存为草稿
</label> </div> <div class="flex justify-end space-x-4 pt-4"> <button type="button" id="preview-btn" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors">
预览
</button> <button type="submit" id="save-btn" class="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-colors">
保存文章
</button> </div> </form> </div> <div id="preview-container" class="bg-white rounded-lg shadow-md p-6 hidden"> <div class="flex items-center justify-between mb-4"> <h2 class="text-xl font-bold">预览</h2> <button id="close-preview" class="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors text-sm">
关闭
</button> </div> <div id="preview-content" class="prose max-w-none"></div> </div> </div> ${renderScript($$result2, "I:/\u963F\u91CC\u4E91\u76D8\u4E0B\u8F7D/Astro-main/Astro-main/src/pages/admin/editor.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "I:/\u963F\u91CC\u4E91\u76D8\u4E0B\u8F7D/Astro-main/Astro-main/src/pages/admin/editor.astro", void 0);

const $$file = "I:/阿里云盘下载/Astro-main/Astro-main/src/pages/admin/editor.astro";
const $$url = "/admin/editor";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Editor,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
