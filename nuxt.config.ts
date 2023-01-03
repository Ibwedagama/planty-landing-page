// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "Planty - House Plants",
      meta: [
        { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Best house plants varieties. Beautiful living greenery for homes and offices",
        },
        {
          name: "twitter:card",
          content:
            "Best house plants varieties. Beautiful living greenery for homes and offices",
        },
        {
          name: "twitter:title",
          content: "Planty - House Plants",
        },
        {
          name: "twitter:description",
          content:
            "Best house plants varieties. Beautiful living greenery for homes and offices",
        },
        {
          name: "twitter:image",
          content: "/thumbnail.webp",
        },
        {
          property: "og:title",
          content: "Planty - House Plants",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://ibwedagama-planty.netlify.app/",
        },
        {
          property: "og:image",
          content: "/thumbnail.webp",
        },
        {
          property: "og:description",
          content:
            "Best house plants varieties. Beautiful living greenery for homes and offices",
        },
        {
          property: "og:site_name",
          content: "Planty - House Plants",
        },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
