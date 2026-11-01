import type { ReactNode } from "react";
import Link from "next/link";

export const inlineLinkClass = "text-blue-600 font-semibold hover:underline";

// Transformă textul cu [text](href) și **îngroșat** în noduri React.
// Linkurile interne folosesc next/link; cele externe se deschid în tab nou.
export default function RichText({
  text,
  linkClassName = inlineLinkClass,
}: {
  text: string;
  linkClassName?: string;
}) {
  const nodes: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));

    if (match[1] !== undefined) {
      const href = match[2];

      nodes.push(
        /^https?:\/\//.test(href) ? (
          <a
            key={key++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            {match[1]}
          </a>
        ) : (
          <Link key={key++} href={href} className={linkClassName}>
            {match[1]}
          </Link>
        )
      );
    } else {
      nodes.push(
        <strong key={key++} className="text-black font-semibold">
          {match[3]}
        </strong>
      );
    }

    last = pattern.lastIndex;
  }

  if (last < text.length) nodes.push(text.slice(last));

  return <>{nodes}</>;
}
