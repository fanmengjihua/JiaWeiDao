export default {
  async fetch(request, env) {
    let response = 'API 测试结果:\n\n';
    
    // 测试 D1 数据库连接
    try {
      const result = await env.DB.prepare('SELECT * FROM articles LIMIT 5').all();
      response += '✅ D1 数据库测试成功:\n';
      response += `返回了 ${result.results?.length || 0} 条文章记录\n\n`;
    } catch (error) {
      response += '❌ D1 数据库测试失败:\n';
      response += `${error.message}\n\n`;
    }
    
    // 测试 R2 存储桶连接
    try {
      const objects = await env.BUCKET.list();
      response += '✅ R2 存储桶测试成功:\n';
      response += `返回了 ${objects.objects?.length || 0} 个对象\n\n`;
    } catch (error) {
      response += '❌ R2 存储桶测试失败:\n';
      response += `${error.message}\n\n`;
    }
    
    return new Response(response, {
      headers: { 'Content-Type': 'text/plain' },
    });
  },
};