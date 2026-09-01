import type { MDXComponents } from "mdx/types";
import AutorizatiiChecklist from "./AutorizatiiChecklist";
import FinalChecklist from "./FinalChecklist";
import LayoutQuiz from "./LayoutQuiz";
import LayoutComparator from "./LayoutComparator";
import ShelfCalculator from "./ShelfCalculator";
import GuideFaq from "./GuideFaq";
import { H2, H3 } from "./GuideHeadings";
import ShelfDepthTable from "./ShelfDepthTable";
import StoreTypeTable from "./StoreTypeTable";

function isExternalHref(href?: string) {
  return !!href && /^https?:\/\//.test(href);
}

export const guideMdxComponents: MDXComponents = {
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
  H2,
  H3,
  ShelfDepthTable,
  StoreTypeTable,
  AutorizatiiChecklist,
  FinalChecklist,
  LayoutQuiz,
  LayoutComparator,
  ShelfCalculator,
  GuideFaq,
};
