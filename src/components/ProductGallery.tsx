"use client";

import { useState } from "react";

export default function ProductGallery({ images }: { images: string[] }) {

  const [active, setActive] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
        Fără imagini
      </div>
    );
  }

  return (
    <div className="w-full">

      {/* MAIN IMAGE */}

      <div className="relative w-full aspect-square md:aspect-[4/3] bg-white rounded-xl overflow-hidden border">

        <img
          src={images[active]}
          alt=""
          className="w-full h-full object-contain"
        />

      </div>


      {/* THUMBNAILS */}

      {images.length > 1 && (

        <div className="flex gap-3 mt-4 overflow-x-auto pb-1">

          {images.map((img, index) => (

            <button
              key={index}
              onClick={() => setActive(index)}
              className={`
              relative
              w-20
              h-20
              rounded-lg
              overflow-hidden
              border
              flex-shrink-0
              ${active === index ? "border-black" : "border-gray-200"}
              `}
            >

              <img
                src={img}
                alt=""
                className="w-full h-full object-contain"
              />

            </button>

          ))}

        </div>

      )}

    </div>
  );
}