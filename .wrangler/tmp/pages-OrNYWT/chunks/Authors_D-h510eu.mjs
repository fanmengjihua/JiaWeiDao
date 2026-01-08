globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_Cgw2UP0D.mjs';
import { G as GenIcon, s as slugify, m as markdownify } from './Base_DN9ImJ8y.mjs';
import { $ as $$Image } from './_astro_assets_pp92rEe0.mjs';

// THIS FILE IS AUTO GENERATED
function BsArrowRightCircle (props) {
  return GenIcon({"attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"},"child":[]}]})(props);
}

const $$Astro = createAstro();
const $$Authors = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Authors;
  const { authors } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="row justify-center"> ${authors.map((author) => renderTemplate`<div class="col-12 mb-8 sm:col-6 md:col-4"> ${author.data.image && renderTemplate`<div class="mb-4"> ${renderComponent($$result, "Image", $$Image, { "src": author.data.image, "alt": author.data.title, "height": 150, "width": 150, "class": "mx-auto rounded-lg" })} </div>`} <h3 class="h4 mt-8 mb-3"> <a${addAttribute(`/authors/${slugify(author.data.title)}`, "href")} class="block hover:text-primary transition duration-200"> ${author.data.title} </a> </h3> ${author.body && renderTemplate`<p class="mb-3">${markdownify(author.body.slice(0, 100))}</p>`} <a${addAttribute(`/authors/${slugify(author.data.title)}`, "href")} class="inline-flex items-center text-primary transition duration-200 hover:opacity-70">
Read More ${renderComponent($$result, "BsArrowRightCircle", BsArrowRightCircle, { "className": "inline ml-2" })} </a> </div>`)} </div>`;
}, "I:/\u963F\u91CC\u4E91\u76D8\u4E0B\u8F7D/Astro-main/Astro-main/src/layouts/components/Authors.astro", void 0);

export { $$Authors as $ };
