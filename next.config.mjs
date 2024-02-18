// const { default: rehypeHighlight } = require('rehype-highlight');

// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [rehypeHighlight],
//   },
// });

// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
// });

// next.config.mjs
import rehypeHighlight from 'rehype-highlight';
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
});

export default withMDX(nextConfig);
