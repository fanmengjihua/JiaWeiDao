globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, e as addAttribute } from '../chunks/astro/server_Cgw2UP0D.mjs';
import { G as GenIcon, $ as $$Base, m as markdownify, c as config } from '../chunks/Base_DN9ImJ8y.mjs';
import { g as getEntry } from '../chunks/_astro_content_BEH0vpME.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_93vWgF-o.mjs';

// THIS FILE IS AUTO GENERATED
function FaEnvelope (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},"child":[]}]})(props);
}

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await getEntry(
    "contact",
    "-index"
  );
  const { contact_form_action } = config.params;
  const { email } = config.contactinfo;
  const { title, description, meta_title, image } = entry.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <h1 class="h2 page-heading">${unescapeHTML(markdownify(title))}</h1> <div class="row md:gx-5 gy-5"> <div class="sm:col-5 md:col-4"> <p class="mb-8 text-2xl font-bold text-text-dark">聯絡資訊</p> <ul class="flex flex-col space-y-8"> <li> <div class="flex text-text-dark items-center text-xl"> ${renderComponent($$result2, "FaEnvelope", FaEnvelope, { "className": "mr-3 text-primary" })} <p class="font-semibold">電子郵件</p> </div> <p class="mt-2 leading-5 pl-8 content">${unescapeHTML(markdownify(email))}</p> </li> </ul> </div> <div class="sm:col-7 md:col-8"> <form class="contact-form row gy-2 justify-center" method="POST"${addAttribute(contact_form_action, "action")}> <div class="lg:col-6"> <label class="mb-2 block" for="name">姓名 <span class="text-red-600">*</span></label> <input class="form-input w-full" name="name" type="text" required> </div> <div class="lg:col-6"> <label class="mb-2 block" for="email">電子郵件 <span class="text-red-600">*</span></label> <input class="form-input w-full" name="email" type="email" required> </div> <div class="col-12"> <label class="mb-2 block" for="subject">主旨</label> <input class="form-input w-full" name="subject" type="text"> </div> <div class="col-12"> <label class="mb-2 block" for="message">訊息 <span class="text-red-600">*</span></label> <textarea class="form-textarea w-full" rows="4"></textarea> </div> <div class="col-12"> <button class="btn btn-primary mt-2">立即提交</button> </div> </form> </div> </div> </div> </section> ` })}`;
}, "I:/\u963F\u91CC\u4E91\u76D8\u4E0B\u8F7D/Astro-main/Astro-main/src/pages/contact.astro", void 0);

const $$file = "I:/阿里云盘下载/Astro-main/Astro-main/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
