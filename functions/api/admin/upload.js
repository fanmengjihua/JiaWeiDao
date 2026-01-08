export async function onRequestPost(context) {
  const request = context.request;
  const env = context.env;

  // 1. 取 R2 bucket
  const bucket = env.images;
  if (!bucket) {
    return new Response(
      JSON.stringify({
        error: "R2 bucket 'images' not configured",
        envKeys: Object.keys(env)
      }),
      { status: 500 }
    );
  }

  // 2. 解析 multipart/form-data
  const form = await request.formData();
  const file = form.get("file");

  if (!(file instanceof File)) {
    return new Response(
      JSON.stringify({ error: "No file uploaded" }),
      { status: 400 }
    );
  }

  // 3. 限制大小
  if (file.size > 500 * 1024) {
    return new Response(
      JSON.stringify({ error: "File too large (max 500KB)" }),
      { status: 400 }
    );
  }

  // 4. 生成 key
  const ext = file.name.split(".").pop() || "bin";
  const key = `images/${crypto.randomUUID()}.${ext}`;

  // 5. 上传到 R2
  const buffer = await file.arrayBuffer();

  await bucket.put(key, buffer, {
    httpMetadata: {
      contentType: file.type || "application/octet-stream"
    }
  });

  // 6. 返回访问地址
  return new Response(
    JSON.stringify({
      url: `https://img.125929.xyz/${key}`,
      key,
      size: file.size,
      type: file.type
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
