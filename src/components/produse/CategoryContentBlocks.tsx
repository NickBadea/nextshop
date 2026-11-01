import type { ReactNode } from "react";
import Link from "next/link";
import { Check, ClipboardCheck, Info, Lightbulb } from "lucide-react";
import FaqDetails from "@/components/produse/FaqDetails";
import RichText from "@/components/produse/RichText";
import type { CategoryBlock, CategoryContent } from "@/lib/category-content/types";

const h2Class = "text-3xl md:text-4xl font-bold text-black mb-6";
const paragraphClass = "text-gray-600 leading-relaxed text-base md:text-lg";

export function CategoryIntro({ text }: { text: string }) {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
        <p className={`max-w-4xl ${paragraphClass}`}>
          <RichText text={text} />
        </p>
      </div>
    </section>
  );
}

type Callout = Extract<CategoryBlock, { type: "callout" }>;

const calloutStyles: Record<
  Callout["variant"],
  { box: string; icon: string; Icon: typeof Info }
> = {
  summary: { box: "bg-blue-50 border-blue-600", icon: "text-blue-600", Icon: Info },
  tip: { box: "bg-amber-50 border-amber-500", icon: "text-amber-500", Icon: Lightbulb },
  check: {
    box: "bg-emerald-50 border-emerald-600",
    icon: "text-emerald-600",
    Icon: ClipboardCheck,
  },
};

function CalloutBox({ block }: { block: Callout }) {
  const style = calloutStyles[block.variant];

  return (
    <aside
      role="note"
      aria-label={block.title}
      className={`rounded-xl border-l-4 p-6 md:p-8 ${style.box}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <style.Icon className={style.icon} size={24} aria-hidden="true" />
        <p className="text-xl font-bold text-black">{block.title}</p>
      </div>

      {block.items && (
        <ul className="space-y-2">
          {block.items.map((item) => (
            <li key={item} className={`flex gap-3 ${paragraphClass}`}>
              <Check className={`${style.icon} mt-1.5 shrink-0`} size={18} aria-hidden="true" />
              <span>
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ul>
      )}

      {block.text && (
        <p className={paragraphClass}>
          <RichText text={block.text} />
        </p>
      )}

      {block.note && (
        <p className={`${paragraphClass} mt-4`}>
          <RichText text={block.note} />
        </p>
      )}
    </aside>
  );
}

// Tabel: pe ecrane mici fiecare rând devine un card (nu iese din ecran), de la md în sus e tabel clasic.
function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm md:overflow-hidden">
      <table className="block md:table w-full text-left text-base">
        <thead className="sr-only md:not-sr-only md:table-header-group bg-gray-50">
          <tr className="md:table-row">
            {headers.map((header) => (
              <th key={header} scope="col" className="px-4 py-3 font-semibold text-black">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="block md:table-row-group divide-y divide-gray-100">
          {rows.map((row) => (
            <tr key={row[0]} className="block md:table-row px-4 py-4 md:p-0">
              {row.map((cell, index) => (
                <td
                  key={headers[index]}
                  data-label={headers[index]}
                  className={`block md:table-cell md:px-4 md:py-3 ${
                    index === 0
                      ? "mb-2 md:mb-0 text-lg font-semibold text-black"
                      : "py-1 text-gray-600 before:block before:text-xs before:font-semibold before:uppercase before:tracking-wide before:text-gray-400 before:content-[attr(data-label)] md:before:hidden"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Steps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="space-y-5">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="flex gap-4 md:gap-5 items-start rounded-xl bg-white border border-gray-100 shadow-sm p-5 md:p-6"
        >
          <span
            aria-hidden="true"
            className="shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center"
          >
            {index + 1}
          </span>

          <p className={paragraphClass}>
            <strong className="text-black font-semibold">{step.title}</strong> {step.text}
          </p>
        </li>
      ))}
    </ol>
  );
}

function Sources({ sources }: { sources: { text: string; href: string }[] }) {
  return (
    <ul className="mt-1 space-y-1 text-sm text-gray-500">
      {sources.map((source) => (
        <li key={source.href}>
          Sursa:{" "}
          <a
            href={source.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-600 underline underline-offset-2 hover:text-blue-600"
          >
            {source.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function CategorySections({
  content,
  whatsappUrl,
}: {
  content: CategoryContent;
  whatsappUrl: string;
}) {
  const elements: ReactNode[] = [];
  // Fundalurile ușoare alternează; benzile albastre (CTA) nu intră în alternanță.
  let tone: "white" | "gray" = "gray"; // blocul de după grilă (fundal gri) începe pe alb
  const nextTone = () => {
    tone = tone === "white" ? "gray" : "white";
    return tone === "white" ? "bg-white" : "bg-gray-50";
  };

  for (let i = 0; i < content.blocks.length; i++) {
    const block = content.blocks[i];

    switch (block.type) {
      case "section":
        elements.push(
          <section key={i} className={`py-14 md:py-20 ${nextTone()}`}>
            <div className="max-w-4xl mx-auto px-6">
              <h2 className={h2Class}>{block.heading}</h2>

              {block.paragraphs.map((paragraph) => (
                <p key={paragraph} className={`${paragraphClass} mb-5`}>
                  <RichText text={paragraph} />
                </p>
              ))}

              {block.sources && <Sources sources={block.sources} />}
            </div>
          </section>
        );
        break;

      case "cta":
        elements.push(
          <section key={i} className="bg-blue-600 py-10 md:py-12">
            <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <p className="text-white text-lg md:text-xl font-semibold">{block.text}</p>

              <Link
                href={block.href}
                className="shrink-0 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                {block.button}
              </Link>
            </div>
          </section>
        );
        break;

      case "callout": {
        // Casetele consecutive stau împreună, în aceeași secțiune.
        const group: Callout[] = [block];

        while (content.blocks[i + 1]?.type === "callout") {
          group.push(content.blocks[++i] as Callout);
        }

        elements.push(
          <section key={i} className={`py-14 md:py-20 ${nextTone()}`}>
            <div className="max-w-4xl mx-auto px-6 space-y-6">
              {group.map((callout) => (
                <CalloutBox key={callout.title} block={callout} />
              ))}
            </div>
          </section>
        );
        break;
      }

      case "table":
        elements.push(
          <section key={i} className={`py-14 md:py-20 ${nextTone()}`}>
            <div className="max-w-5xl mx-auto px-6">
              <h2 className={h2Class}>{block.title}</h2>
              <DataTable headers={block.headers} rows={block.rows} />
            </div>
          </section>
        );
        break;

      case "steps":
        elements.push(
          <section key={i} className={`py-14 md:py-20 ${nextTone()}`}>
            <div className="max-w-4xl mx-auto px-6">
              <h2 className={h2Class}>{block.title}</h2>
              <Steps steps={block.steps} />
            </div>
          </section>
        );
        break;

      case "faq":
        elements.push(
          <section key={i} className={`py-14 md:py-20 ${nextTone()}`}>
            <div className="max-w-3xl mx-auto px-6">
              <h2 className={`${h2Class} text-center md:mb-10`}>{block.title}</h2>

              <FaqDetails
                items={block.items.map((item) => ({
                  question: item.question,
                  answer: <RichText text={item.answer} />,
                }))}
              />
            </div>
          </section>
        );
        break;

      case "seeAlso":
        elements.push(
          <section key={i} className={`py-14 md:py-20 ${nextTone()}`}>
            <div className="max-w-5xl mx-auto px-6">
              <h2 className={h2Class}>{block.title}</h2>

              <ul className="grid sm:grid-cols-2 gap-5">
                {block.links.map((link) => (
                  <li
                    key={link.href}
                    className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <Link
                      href={link.href}
                      className="text-lg font-semibold text-blue-600 after:absolute after:inset-0 hover:underline"
                    >
                      {link.text}
                    </Link>

                    <p className="mt-2 text-gray-600 leading-relaxed">{link.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
        break;

      case "finalCta":
        elements.push(
          <section key={i} className="bg-blue-600 text-white py-16 md:py-24 text-center">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{block.heading}</h2>

              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8">
                {block.text}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={block.primary.href}
                  className="inline-block bg-white text-blue-600 px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold hover:bg-gray-100 transition"
                >
                  {block.primary.text}
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-white text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition"
                >
                  {block.secondary}
                </a>
              </div>
            </div>
          </section>
        );
        break;
    }
  }

  return <>{elements}</>;
}
