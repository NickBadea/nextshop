import { Children, type ReactNode } from "react";
import type { MDXComponents } from "mdx/types";

function isExternalHref(href?: string) {
  return !!href && /^https?:\/\//.test(href);
}

// Liniile de tip "*- Sursa: [Nume](link)*" sunt citări: apar sub paragraf, cu stil discret.
function isCitation(children: ReactNode) {
  const first = Children.toArray(children)[0];

  return typeof first === "string" && /^- Surs[ae]:/.test(first);
}

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
  em: ({ children, ...props }) =>
    isCitation(children) ? (
      <em
        className="mt-2 block text-sm leading-snug text-gray-500 not-italic [&_a]:font-medium [&_a]:text-gray-600 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-blue-600"
        {...props}
      >
        {children}
      </em>
    ) : (
      <em {...props}>{children}</em>
    ),
  a: ({ href, ...props }) =>
    isExternalHref(href) ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-semibold hover:underline"
        {...props}
      />
    ) : (
      <a href={href} className="text-blue-600 font-semibold hover:underline" {...props} />
    ),
};
