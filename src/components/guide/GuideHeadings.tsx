export function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 text-2xl md:text-3xl font-bold text-blue-600 mt-14 mb-5 pb-3 border-b border-gray-100"
    >
      {children}
    </h2>
  );
}

export function H3({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h3 id={id} className="scroll-mt-28 text-xl md:text-2xl font-semibold text-blue-600 mt-9 mb-4">
      {children}
    </h3>
  );
}
