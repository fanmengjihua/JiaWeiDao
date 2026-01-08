export async function onRequest({ env }: { env: any }) {
  try {
    if (!env.DB) {
      return Response.json([], { status: 200 });
    }

    const result = await env.DB.prepare(`
      SELECT
        slug,
        title,
        description,
        image,
        date
      FROM articles
      WHERE draft = 0
      ORDER BY date DESC
    `).all();

    return Response.json(
      (result.results || []).map((post: any) => ({
        ...post,
        frontmatter: {
          title: post.title,
          description: post.description,
          image: post.image,
          date: post.date,
        },
        slug: post.slug,
      }))
    );
  } catch (error) {
    console.error('Articles API error:', error);
    return Response.json([], { status: 200 });
  }
}
