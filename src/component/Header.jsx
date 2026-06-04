import { useState } from "react";
import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/" className="flex items-center gap-3">
    <img
      src="/logo.jpeg"
      alt="Smart Academy Logo"
      className="w-12 h-12 rounded-full object-cover"
    />

    <span className="text-blue-600 text-2xl font-bold tracking-tight">
      Smart <span className="text-blue-800">Academy</span>
    </span>
  </Link>
);

const NavLinks = ({ mobile = false, onClose }) => {
  const [coursesOpen, setCoursesOpen] = useState(false);

  const courses = [
  {
    id: 1,
    name: "BBA in Hospital & Office Administration with AI",
  },
  {
    id: 2,
    name: "BCA with AI",
  },
  {
    id: 3,
    name: "BBA in Logistics with AI",
  },
  {
    id: 4,
    name: "Diploma in Logistics with AI",
  },
  {
    id: 5,
    name: "Diploma in Hospital & Office Administration with AI",
  },
];
  if (mobile) {
    return (
      <nav className="flex flex-col gap-1 px-4 pb-4">
        <Link to="/" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">
          Home
        </Link>
        <div>
          <button
            onClick={() => setCoursesOpen(!coursesOpen)}
            className="w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium flex items-center justify-between"
          >
            Courses
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${coursesOpen ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        {coursesOpen && (
  <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-blue-100 pl-3">
    {courses.map((c) => (
      <Link
        key={c.id}
        to={`/courses/${c.id}`}
        className="py-1.5 px-2 text-sm text-gray-600 hover:text-blue-600 transition-colors rounded"
        onClick={onClose}
      >
        {c.name}
      </Link>
    ))}
  </div>
)}
        </div>
        <Link to="/about" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">
          About
        </Link>
        <Link to="/contact" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">
          Contact
        </Link>
        <button className="mt-3 mx-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors shadow-md shadow-blue-200">
  Enroll Now
</button>
      </nav>
    );
  }

  return (
    <nav className="hidden md:flex items-center gap-1">
      <Link to="/" className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium">
        Home
      </Link>

      {/* Courses Dropdown */}
      <div className="relative group">
        <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium">
          Courses
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl shadow-blue-100/50 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50">
          <div className="p-2">
           {courses.map((course) => (
  <Link
    key={course.id}
    to={`/courses/${course.id}`}
    className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
  >
    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
    {course.name}
  </Link>
))}
          </div>
        </div>
      </div>

      <Link to="/about" className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium">
        About
      </Link>
      <Link to="/contact" className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium">
        Contact
      </Link>
    </nav>
  );
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm shadow-blue-50/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <NavLinks />

          {/* Enroll Now Button - Desktop */}
          <div className="hidden md:block">
           <Link
  to="/contact"
  className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5 inline-block"
>
  Enroll Now
</Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-200 ${mobileOpen ? "rotate-90" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <NavLinks mobile onClose={() => setMobileOpen(false)} />
      </div>
    </header>
  );
}