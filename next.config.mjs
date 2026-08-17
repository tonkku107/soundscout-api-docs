import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const config = {
  output: 'export',
  reactStrictMode: true,
  basePath: process.env.PAGES_BASE_PATH,
};

export default withMDX(config);
