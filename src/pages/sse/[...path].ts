export const prerender = false;
import type { APIRoute } from "astro";
import { Hono } from "hono";
import { html } from "hono/html";
import { streamSSE } from "hono/streaming";

import {
  DatastarMergeFragments,
  DatastarMessage,
  eventID,
  fragments,
} from "@utils/datastar";

const sseRouter = new Hono();

sseRouter.get("/sse", (c) => {
  return streamSSE(c, async (stream) => {
    let num = 0;
    while (num < 15) {
      await stream.writeSSE({
        data: DatastarMessage([
          fragments(html`<p id="merge-text">Merge ${num}</p>`),
        ]),
        event: DatastarMergeFragments,
        id: eventID(),
      });
      await stream.sleep(1000);
      num++;
    }
  });
});

export const ALL: APIRoute = (context) => sseRouter.fetch(context.request);
