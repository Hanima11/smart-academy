export default function Footer() {
  const programs = [
    "BBA in Hospital & Office Administration with AI",
    "BCA with AI",
    "BBA in Logistics with AI",
    "Diploma in Logistics with AI",
    "Diploma in Hospital & Office Administration with AI",
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 - Brand */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">
              <span className="text-gray-800">Smart </span>
              <span className="text-blue-500">Academy</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Empowering the next generation of global professionals through
              AI-integrated curriculum and practical excellence.
            </p>
            {/* Instagram Icon */}
            <div className="mt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-500 hover:border-blue-400 hover:text-blue-500 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Our Programs */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-gray-800">Our Programs</h3>
            <ul className="flex flex-col gap-3">
              {programs.map((program) => (
                <li key={program} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-blue-500 transition-colors leading-snug"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-gray-800">Support</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-blue-500 transition-colors"
                >
                  {/* Info icon */}
                  <svg
                    className="w-4 h-4 text-blue-500 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H10z"
                      clipRule="evenodd"
                    />
                  </svg>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-blue-500 transition-colors"
                >
                  {/* Phone icon */}
                  <svg
                    className="w-4 h-4 text-blue-500 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Campus Location */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-gray-800">Campus Location</h3>
            <div className="text-sm text-gray-600 leading-relaxed">
              <p className="font-semibold text-gray-800">Smart Academy</p>
              <p>NP Road, Iritty, Kannur,</p>
              <p>Kerala – 670703</p>
              <p className="font-semibold text-gray-800 mt-1">Opposite Fire Station</p>
            </div>

            {/* Admissions Open Box */}
            <div className="mt-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
              <p className="text-xs font-bold tracking-widest text-gray-700 uppercase mb-1">
                Admissions Open
              </p>
              <p className="text-sm text-blue-500 font-medium">
                +91 8086035533,{" "}
                <span className="text-blue-500">+91 8086035544</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-gray-500">
            © 2026 Smart Academy Iritty. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-1.5">
            Designed by{" "}
            <a
              href="#"
              className="text-blue-500 font-semibold hover:text-blue-600 transition-colors"
            >
              Ektova Technologies
            </a>
            {/* Rocket emoji substitute */}
            <svg
              className="w-4 h-4 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </p>
        </div>
      </div>
    </footer>
  );
}