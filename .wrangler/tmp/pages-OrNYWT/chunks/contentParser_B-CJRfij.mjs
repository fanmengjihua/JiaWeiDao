globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, a as renderTemplate } from './astro/server_Cgw2UP0D.mjs';
import { a as getCollection } from './_astro_content_BEH0vpME.mjs';

const getSinglePage = async (collectionName) => {
  const allPages = await getCollection(collectionName);
  const removeIndex = allPages.filter((data) => data.id.match(/^(?!-)/));
  const removeDrafts = removeIndex.filter((data) => {
    const pageData = data.data;
    return pageData.draft !== true;
  });
  return removeDrafts;
};
createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "I:/\u963F\u91CC\u4E91\u76D8\u4E0B\u8F7D/Astro-main/Astro-main/src/lib/contentParser.astro", void 0);

export { getSinglePage as g };
