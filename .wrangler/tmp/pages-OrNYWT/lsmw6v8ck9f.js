// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/_astro/*",
    "/.htaccess",
    "/robots.txt",
    "/images/about.jpg",
    "/images/favicon.png",
    "/images/image-placeholder.png",
    "/images/jiaweidao.png",
    "/images/jiaweidao_zuoze.jpg",
    "/images/logo.png",
    "/images/logo.svg",
    "/images/posts/01.jpg",
    "/images/posts/02.jpg",
    "/images/posts/03.jpg",
    "/images/posts/04.jpg",
    "/images/posts/05.jpg",
    "/images/posts/06.jpg",
    "/images/posts/07.jpg",
    "/authors/jiaweidao",
    "/\u9748\u9B42\u91AC\u6599",
    "/\u70B8\u70E4\u6EF7\u5473",
    "/\u751C\u9EDE\u51B0\u54C1",
    "/\u7D93\u5178\u9905\u985E",
    "/\u98FD\u809A\u4E3B\u98DF",
    "/elements",
    "/privacy-policy"
  ]
};

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "I:\\\u963F\u91CC\u4E91\u76D8\u4E0B\u8F7D\\Astro-main\\Astro-main\\.wrangler\\tmp\\pages-OrNYWT\\bundledWorker-0.25003550870813185.mjs";
import { isRoutingRuleMatch } from "I:\\\u963F\u91CC\u4E91\u76D8\u4E0B\u8F7D\\Astro-main\\Astro-main\\node_modules\\wrangler\\templates\\pages-dev-util.ts";
export * from "I:\\\u963F\u91CC\u4E91\u76D8\u4E0B\u8F7D\\Astro-main\\Astro-main\\.wrangler\\tmp\\pages-OrNYWT\\bundledWorker-0.25003550870813185.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=lsmw6v8ck9f.js.map
