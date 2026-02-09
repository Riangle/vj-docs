import nextMdx from "@next/mdx";

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: ["rehype-highlight"],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = withMdx({
  compiler: {
    styledComponents: true,
  },
  transpilePackages: ["lucide-react", "cherry-styled-components"],
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
});

export default nextConfig;
