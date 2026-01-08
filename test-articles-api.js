import { onRequest } from './functions/api/admin/articles.ts';

export default {
  async fetch(request, env) {
    return onRequest({ request, env });
  },
};