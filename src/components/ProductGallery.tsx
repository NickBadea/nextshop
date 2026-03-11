"use client";

import { useState, useEffect } from "react";

export default function ProductGallery({ images }: { images: string[] }) {

  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  // =========================
  // next / prev
  // =========================

  function next() {
    setActive((prev) => (prev + 1) % images.length);
  }

  function prev() {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  }

  // =========================
  // keyboard navigation
  // =========================

  useEffect(() => {

    function handleKey(e: KeyboardEvent) {

      if (!open) return;

      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setOpen(false);

    }

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);

  }, [open]);

  // =========================
  // swipe mobile
  // =========================

  let touchStartX = 0;

  function handleTouchStart(e: any) {
    touchStartX = e.touches[0].clientX;
  }

  function handleTouchEnd(e: any) {

    const diff = e.changedTouches[0].clientX - touchStartX;

    if (diff > 50) prev();
    if (diff < -50) next();

  }

  if (!images || images.length === 0) return null;

  return (

    <div>

      {/* MAIN IMAGE */}

      <div
        className="cursor-zoom-in"
        onClick={() => setOpen(true)}
      >

        <img
  src={images[active]}
  className="max-h-[520px] w-auto mx-auto rounded-xl object-contain"
/>

      </div>

      {/* THUMBNAILS */}

{images.length > 1 && (

  <div className="flex gap-4 mt-4 overflow-x-auto pb-2">

    {images.map((img, i) => (

      <img
        key={i}
        src={img}
        onClick={() => setActive(i)}
        className={`w-20 h-20 min-w-[80px] object-cover rounded-lg cursor-pointer border ${
          active === i
            ? "border-black"
            : "border-gray-200"
        }`}
      />

    ))}

  </div>

)}
      {/* LIGHTBOX */}

      {open && (

        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          {/* CLOSE */}

          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white text-4xl"
          >
            ×
          </button>

          {/* PREV */}

          {images.length > 1 && (

            <button
              onClick={prev}
              className="absolute left-6 text-white text-5xl"
            >
              ‹
            </button>

          )}

          {/* IMAGE */}

          <img
            src={images[active]}
            className="max-h-[85vh] max-w-[90vw] object-contain"
          />

          {/* NEXT */}

          {images.length > 1 && (

            <button
              onClick={next}
              className="absolute right-6 text-white text-5xl"
            >
              ›
            </button>

          )}

        </div>

      )}

    </div>

  );

}