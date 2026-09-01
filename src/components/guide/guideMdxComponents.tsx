import type { MDXComponents } from "mdx/types";
import AutorizatiiChecklist from "./AutorizatiiChecklist";
import FinalChecklist from "./FinalChecklist";
import LayoutQuiz from "./LayoutQuiz";
import LayoutComparator from "./LayoutComparator";
import ShelfCalculator from "./ShelfCalculator";
import GuideFaq from "./GuideFaq";

function isExternalHref(href?: string) {
  return !!href && /^https?:\/\//.test(href);
}

export const guideMdxComponents: MDXComponents = {
  h2: ({ id, ...props }) => (
    <h2
      id={id}
      className="scroll-mt-28 text-2xl md:text-3xl font-bold text-black mt-14 mb-5 pb-3 border-b border-gray-100"
      {...props}
    />
  ),
  h3: ({ id, ...props }) => (
    <h3
      id={id}
      className="scroll-mt-28 text-xl md:text-2xl font-semibold text-black mt-9 mb-4"
      {...props}
    />
  ),
  p: (props) => (
    <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-5" {...props} />
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
  em: (props) => <em className="text-gray-400 text-sm not-italic" {...props} />,
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
  hr: () => <hr className="my-12 border-gray-100" />,
  table: (props) => (
    <div className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-left text-sm md:text-base" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-gray-50" {...props} />,
  tbody: (props) => <tbody className="divide-y divide-gray-100" {...props} />,
  tr: (props) => <tr {...props} />,
  th: (props) => (
    <th className="px-4 py-3 font-semibold text-black whitespace-nowrap" {...props} />
  ),
  td: (props) => <td className="px-4 py-3 text-gray-600" {...props} />,
  AutorizatiiChecklist,
  FinalChecklist,
  LayoutQuiz,
  LayoutComparator,
  ShelfCalculator,
  GuideFaq,
};
