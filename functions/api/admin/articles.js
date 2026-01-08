export async function onRequestGet(context) {
  const env = context.env;
  const DB = env["jiaweidao-db"];

  const result = await DB.prepare(`
    SELECT id, slug, title, description, image, date, draft
    FROM articles
    ORDER BY date DESC
  `).all();

  return new Response(JSON.stringify(result.results ?? []), {
    headers: { "Content-Type": "application/json" }
  });
}

export async function onRequestPost(context) {
  const env = context.env;
  const DB = env["jiaweidao-db"];

  const data = await context.request.json();

  const slug =
    data.slug ||
    data.title.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  await DB.prepare(`
    INSERT INTO articles
    (slug, title, meta_title, description, date, image,
     categories, authors, tags, draft, views, markdown, youtube)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)
    .bind(
      slug,
      data.title,
      data.meta_title ?? "",
      data.description ?? "",
      new Date().toISOString(),
      data.image ?? null,
      JSON.stringify(data.categories ?? []),
      JSON.stringify(data.authors ?? []),
      JSON.stringify(data.tags ?? []),
      data.draft ? 1 : 0,
      data.views ?? 0,
      data.markdown ?? "",
      data.youtube ?? null
    )
    .run();

  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" }
  });
}
