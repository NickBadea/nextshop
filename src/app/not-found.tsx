export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl text-black font-bold mb-6">404</h1>
      <p className="mb-8 text-gray-600">
        Pagina pe care o cauți nu există.
      </p>
      <a
        href="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Înapoi la homepage
      </a>
    </div>
  );
}