"use client";

export default function DeleteCategoryButton({
  hasProducts,
}: {
  hasProducts: boolean;
}) {
  return (
    <button
      type="submit"
      className="text-red-600 hover:underline"
      onClick={(e) => {
        const message = hasProducts
  ? "Această categorie conține produse. Dacă o ștergi, produsele vor rămâne fără categorie. Ești sigur?"
  : "Ești sigur că vrei să ștergi această categorie?";

        if (!confirm(message)) {
          e.preventDefault();
        }
      }}
    >
      Delete
    </button>
  );
}