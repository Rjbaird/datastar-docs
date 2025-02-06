// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Datastar 🚀",
      head: [
        {
          // Datastar
          tag: "script",
          attrs: {
            src: "https://cdn.jsdelivr.net/gh/starfederation/datastar@v1.0.0-beta.3/bundles/datastar.js",
            type: "module",
          },
        },
      ],
      social: {
        github: "https://github.com/starfederation/datastar/tree/develop",
        discord: "https://discord.gg/bnRNgZjgPh",
        youtube: "https://www.youtube.com/@data-star",
        reddit: "https://www.reddit.com/r/datastardev/",
        blueSky: "https://bsky.app/profile/data-star.dev",
      },
      sidebar: [
        {
          label: "Introduction",
          items: [
            { label: "Getting Started", slug: "intro/getting-started" },
            { label: "Going Deeper", slug: "intro/going-deeper" },
            // { label: "Vs SPAs", slug: "intro/vs-spas" },
            // { label: "Vs MPAs", slug: "intro/vs-mpas" },
            // { label: "YAGNI", slug: "intro/yagni" },
            {
              label: "Stop Overcomplicating It",
              slug: "intro/stop-overcomplicating-it",
            },
          ],
        },
        // {
        //   label: "Essentials",
        //   collapsed: true,
        //   items: [
        //     { label: "Hypermedia", slug: "essentials/hypermedia" },
        //     { label: "REST", slug: "essentials/rest" },
        //     { label: "Signals", slug: "essentials/signals" },
        //     { label: "Server Sent Events", slug: "essentials/sse" },
        //     { label: "Expressions", slug: "essentials/expressions" },
        //     { label: "Accessibility", slug: "essentials/accessibility" },
        //   ],
        // },
        {
          label: "References",
          collapsed: true,
          items: [
            // { label: "Core Plugins", slug: "references/core-plugins" },
            { label: "Actions Plugins", slug: "references/actions-plugins" },
            {
              label: "Attribute Plugins",
              slug: "references/attribute-plugins",
            },
            { label: "Javascript API", slug: "references/javascript-api" },
            { label: "Server Sent Events", slug: "references/sse" },
            { label: "SDKs", slug: "references/sdks" },
          ],
        },
        {
          label: "Examples",
          autogenerate: { directory: "examples" },
        },
        {
          label: "Essays",
          items: [
            {
              label: "Another Dependency",
              slug: "essays/another-dependency",
            },
            {
              label: "Streams All the Way Down",
              slug: "essays/event_streams_all_the_way_down",
            },
            {
              label: "Grugs around the fire",
              slug: "essays/grugs_around_fire",
            },
            {
              label: "Haikus",
              slug: "essays/haikus",
            },
            {
              label: "HTMX Sucks (kinda)",
              slug: "essays/htmx_sucks",
            },
            {
              label: "418 I'm a teapot",
              slug: "essays/i_am_a_teapot",
            },
            {
              label: "The Road to V1",
              slug: "essays/the_road_to_v1",
            },
            {
              label: "Why another framework?",
              slug: "essays/why_another_framework",
            },
            {
              label: "Yes, you want a build step",
              slug: "essays/yes_you_want_a_build_step",
            },
          ],
        },
        // {
        //   label: "Misc.",
        //   items: [
        //     // { label: "Spec Compliance", slug: "misc/spec-compliance" },
        //     // { label: "The Datastar Challenge", slug: "misc/the-datastar-challenge" },
        //   ],
        // },
      ],
    }),
  ],

  adapter: netlify(),
});
