"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export type TocSection = {
  id: string;
  label: string;
};

const NAV_HEIGHT = 80;

function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;

      setProgress(pct);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed left-0 right-0 z-40 h-1 bg-gray-100"
      style={{ top: NAV_HEIGHT }}
    >
      <div
        className="h-full bg-blue-600 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function useScrollSpy(sections: TocSection[]) {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);

    if (elements.length === 0) return;

    observerRef.current?.disconnect();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-96px 0px -70% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    observerRef.current = observer;

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return activeId;
}

function TocLink({
  section,
  active,
  onClick,
}: {
  section: TocSection;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <a
      href={`#${section.id}`}
      onClick={onClick}
      className={`block py-1.5 text-sm leading-snug border-l-2 pl-3 transition ${
        active
          ? "border-blue-600 text-blue-600 font-semibold"
          : "border-transparent text-gray-500 hover:text-black hover:border-gray-300"
      }`}
    >
      {section.label}
    </a>
  );
}

export default function GuideToc({
  sections,
  children,
}: {
  sections: TocSection[];
  children: React.ReactNode;
}) {
  const activeId = useScrollSpy(sections);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <ReadingProgressBar />

      {/* MOBIL: cuprins colapsabil */}
      <div className="lg:hidden mb-8 rounded-xl border border-gray-200 bg-white shadow-sm">
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="w-full flex items-center justify-between px-5 py-4"
        >
          <span className="font-semibold text-black">Cuprins</span>
          <ChevronDown
            size={18}
            className={`text-gray-500 transition-transform ${mobileOpen ? "rotate-180" : ""}`}
          />
        </button>

        {mobileOpen && (
          <nav className="px-5 pb-4 space-y-0.5 max-h-80 overflow-y-auto">
            {sections.map((section) => (
              <TocLink
                key={section.id}
                section={section}
                active={section.id === activeId}
                onClick={() => setMobileOpen(false)}
              />
            ))}
          </nav>
        )}
      </div>

      <div className="lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
        {/* DESKTOP: cuprins sticky lateral */}
        <aside className="hidden lg:block">
          <nav
            className="sticky space-y-0.5"
            style={{ top: NAV_HEIGHT + 32 }}
          >
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
              Cuprins
            </p>

            <div className="max-h-[calc(100vh-160px)] overflow-y-auto pr-2">
              {sections.map((section) => (
                <TocLink
                  key={section.id}
                  section={section}
                  active={section.id === activeId}
                />
              ))}
            </div>
          </nav>
        </aside>

        <div className="min-w-0">{children}</div>
      </div>
    </>
  );
}
