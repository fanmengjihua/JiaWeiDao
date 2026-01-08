export async function post({ request, locals }) {
  const env = locals.runtime.env;
  const DB = env["jiaweidao-db"];

  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return new Response("Missing article ID", { status: 400 });
  }

  await DB.prepare(`
    UPDATE articles
    SET draft = 0
    WHERE id = ?
  `)
    .bind(id)
    .run();

  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" }
  });
}
