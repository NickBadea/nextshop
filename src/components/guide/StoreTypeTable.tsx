const headers = ["Tip magazin", "Layout recomandat", "Suprafață tipică", "Element critic de amenajare"];

const rows = [
  ["Magazin alimentar de cartier", "Grid sau herringbone", "40-100 mp", "Rafturi reglabile, vitrină compactă"],
  ["Minimarket", "Grid", "60-150 mp", "Alocare eficientă a nivelului ochilor"],
  ["Supermarket", "Loop sau hibrid", "300+ mp", "Organizare pe raioane, vitrine extinse"],
  ["Magazin mixt", "Hibrid (grid + insule)", "80-200 mp", "Zonare vizuală clară, coffee corner opțional"],
  ["Brutărie / cofetărie", "Free-flow sau spine", "30-80 mp", "Vitrine cu temperatură controlată, iluminat cald"],
  ["Cafenea / coffee corner", "Free-flow", "15-40 mp (integrat)", "Tejghea dedicată, flux separat de casă"],
];

export default function StoreTypeTable() {
  return (
    <div className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-left text-sm md:text-base">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 font-semibold text-black whitespace-nowrap">
                {header}
              </th>
            ))}
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
