export async function onRequest(context) {
  const request = context.request;
  const env = context.env;

  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return new Response("Missing article ID", { status: 400 });
  }

  try {
    const DB = env["jiaweidao-db"];

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
  } catch (error) {
    console.error("Publish error:", error);
    return new Response("Failed to publish article", { status: 500 });
  }
}
