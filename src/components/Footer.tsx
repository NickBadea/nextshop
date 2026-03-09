export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-14 items-start">

        {/* LOGO */}

        <div>
          <img
            src="/logo-footer.png"
            alt="NextShop Retail"
            className="w-70 mb-6"
          />

          <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
            Soluții complete pentru magazine retail: rafturi, gondole,
            vitrine frigorifice și mobilier comercial profesional.
          </p>

          {/* PARTENERI */}

          <div className="mt-10">
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">
              Partener oficial
            </p>

            <img
              src="/partener.png"
              alt="Partener oficial"
              className="h-8 object-contain opacity-90"
            />
          </div>

        </div>


        {/* NAVIGARE */}

        <div>
          <h4 className="font-semibold text-lg mb-6">
            Navigare
          </h4>

          <ul className="space-y-3 text-gray-400 text-sm">

            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>

            <li>
              <a href="/cine-suntem" className="hover:text-white transition">
                Cine suntem
              </a>
            </li>

            <li>
              <a href="/produse" className="hover:text-white transition">
                Produse
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>

            <li>
              <a href="/cere-oferta" className="hover:text-white transition">
                Cere ofertă
              </a>
            </li>

          </ul>
        </div>


        {/* CONTACT */}

        <div>

          <h4 className="font-semibold text-lg mb-6">
            Contact
          </h4>

          <div className="space-y-4 text-gray-400 text-sm mb-6">

            {/* LOCATION */}

            <div className="flex items-start gap-3">

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white mt-[2px]"
              >
                <path
                  d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="10"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>

              <p>
                Showroom: zona Metro, Calea București nr 139<br />
                Craiova, România
              </p>

            </div>


            {/* PHONE */}

            <div className="flex items-center gap-3">

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
              >
                <path
                  d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L9 10.4a16 16 0 0 0 4.6 4.6l1.0-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>

              <p>+40 763 990 927</p>

            </div>


            {/* EMAIL */}

            <div className="flex items-center gap-3">

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
              >
                <rect
                  x="2"
                  y="6"
                  width="20"
                  height="14"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="m2 8 10 6 10-6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>

              <p>contact@nextshopretail.ro</p>

            </div>

          </div>


          {/* GOOGLE MAP */}

          <div className="rounded-lg overflow-hidden border border-gray-800">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d814.2603581198393!2d23.897433775660975!3d44.31276006622484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4752d4235c890917%3A0x68aa176f3d98864a!2sCalea%20Bucure%C8%99ti%20nr%20139%2C%20207450!5e1!3m2!1sen!2sro!4v1773075623526!5m2!1sen!2sro"
              width="100%"
              height="180"
              loading="lazy"
              className="border-0"
            />

          </div>

        </div>

      </div>


      {/* COPYRIGHT */}

      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-xs">

        © {new Date().getFullYear()} NextShop Retail. Toate drepturile rezervate.

      </div>

    </footer>
  );
}