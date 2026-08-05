import type { MDXComponents } from "mdx/types";

export const blogMdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="text-2xl md:text-3xl font-bold text-black mt-10 mb-4"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-xl md:text-2xl font-semibold text-black mt-8 mb-3"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="text-gray-600 leading-relaxed text-base md:text-lg mb-5"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed text-base md:text-lg mb-5"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal pl-6 space-y-2 text-gray-600 leading-relaxed text-base md:text-lg mb-5"
      {...props}
    />
  ),
  li: (props) => <li {...props} />,
  strong: (props) => <strong className="text-black font-semibold" {...props} />,
  a: (props) => (
    <a className="text-blue-600 font-semibold hover:underline" {...props} />
  ),
};
