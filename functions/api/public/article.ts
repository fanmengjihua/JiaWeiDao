import { marked } from "marked";

marked.setOptions({
  mangle: false,
} as any);

export async function onRequest({ request, env }: { request: Request, env: any }) {
  try {
    const slug = new URL(request.url).searchParams.get("slug");

    if (!slug) {
      return new Response("Missing slug", { status: 400 });
    }

    if (!env.DB) {
      return new Response("Not found", { status: 404 });
    }

    const article = await env.DB.prepare(`
      SELECT
        slug,
        title,
        meta_title,
        description,
        image,
        date,
        categories,
        tags,
        authors,
        markdown
      FROM articles
      WHERE slug = ? AND draft = 0
      LIMIT 1
    `).bind(slug).first();

    if (!article) {
      return new Response("Not found", { status: 404 });
    }

    return Response.json({
      id: article.slug,
      body: marked(article.markdown),
      data: {
        title: article.title,
        meta_title: article.meta_title ?? article.title,
        description: article.description,
        image: article.image,
        date: article.date,
        categories: JSON.parse(article.categories ?? "[]"),
        tags: JSON.parse(article.tags ?? "[]"),
        authors: JSON.parse(article.authors ?? "[]"),
      },
    });
  } catch (error) {
    console.error('Article API error:', error);
    return new Response("Not found", { status: 404 });
  }
}
