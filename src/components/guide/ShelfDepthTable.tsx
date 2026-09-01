const rows = [
  ["Conserve, produse de bază", "40-45 cm", "Polițe medii și de jos"],
  ["Snacksuri, produse mici", "30-35 cm", "Nivelul ochilor"],
  ["Băuturi îmbuteliate", "45-50 cm", "Polițe de jos (greutate)"],
  ["Produse de îngrijire, cosmetice", "30-35 cm", "Nivelul ochilor"],
  ["Produse de curățenie", "40-45 cm", "Polițe de jos"],
];

export default function ShelfDepthTable() {
  return (
    <div className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-left text-sm md:text-base">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 font-semibold text-black whitespace-nowrap">Tip produs</th>
            <th className="px-4 py-3 font-semibold text-black whitespace-nowrap">Adâncime recomandată</th>
            <th className="px-4 py-3 font-semibold text-black whitespace-nowrap">Poziție recomandată</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td key={i} className="px-4 py-3 text-gray-600">
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
