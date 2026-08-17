import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

export default async function MdxStringWrapper({ content }) {
  const { default: MDXContent } = await evaluate(content, { ...runtime });

  return <MDXContent />;
}
