export const prerender = false;
import type { APIRoute } from "astro";
import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";

const apiRouter = new Hono();
apiRouter.use(prettyJSON());
apiRouter.get("/api", (c) =>
  c.json({
    hello: "datastar",
  })
);

export const ALL: APIRoute = (context) => apiRouter.fetch(context.request);
