import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  // 将 Cloudflare 环境变量传递给页面和 API 路由
  if (context.locals) {
    context.locals.env = (context.request as any).cf?.env || (globalThis as any).env;
  }
  return next();
});