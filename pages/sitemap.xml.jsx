import * as React from "react";
import { getAllPosts } from "../lib/posts";

const Sitemap = () => {
  return null;
};

const createSitemap = (slugs) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${slugs
  .map((slug) => {
    return `<url>
              <loc>${`http://localhost:3000/${slug}`}</loc>
          </url>`;
  })
  .join("")}
</urlset>`;

export const getServerSideProps = async ({ res }) => {
  const allPosts = getAllPosts();
  const allPages = [
    ...allPosts.map((post) => {
      return `blog/${post.meta.slug}`;
    }),
    ...["", "#projects", "blog"],
  ];

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );
  res.write(createSitemap(allPages));
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
