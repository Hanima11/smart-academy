import { useState } from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    badge: "Advanced Module",
    badgeColor: "bg-blue-700",
    modules: "6 semester , 22 modules",
    duration: "3 years",
    title: "BBA in Hospital & Office Administration with AI",
    description:
      "Master modern healthcare management and corporate operations through the lens of artificial intelligence. This program is designed to produce future-ready administrators who can lead hospitals, clinics, and offices with AI-powered efficiency.",
    bg: "from-blue-900 via-blue-800 to-slate-700",
    accent: "bg-blue-400",
    image: "/hospital-administration.jpeg",
    
  },
  {
    id: 2,
    badge: "Tech Stack 2024",
    badgeColor: "bg-blue-600",
    modules: "36 Modules (6 Semester)",
    duration: "3 Years",
    title: "BCA with AI",
    description:
      "The Bachelor of Computer Applications, evolved for the AI era. Deep dive into neural networks, machine learning models, and full-stack development empowered by Large Language Models and modern AI frameworks.",
    bg: "from-slate-900 via-blue-950 to-cyan-900",
    accent: "bg-cyan-400",
    image: "/BCA with AI.jpeg"
  },
  {
    id: 3,
    badge: "Management",
    badgeColor: "bg-blue-700",
    modules: "16 Modules (6 Semester)",
    duration: "3 Years",
    title: "BBA in Logistics with AI",
    description:
      "Blending business leadership with predictive logistics. Learn how AI transforms supply chains from reactive to autonomous systems. A future-facing BBA for the logistics economy.",
    bg: "from-gray-800 via-slate-700 to-gray-900",
    accent: "bg-yellow-400",
     image: "/BBA in Logistics with AI.jpeg"
  },
  {
    id: 4,
    badge: "Certificate Program",
    badgeColor: "bg-blue-600",
    modules: "5 Modules",
    duration: "12 Months",
    title: "Diploma in Logistics with AI",
    description:
      "An intensive 12-month specialized diploma focusing on the technical integration of AI within the global freight and supply chain ecosystem.",
    bg: "from-blue-950 via-indigo-900 to-slate-800",
    accent: "bg-indigo-400",
      image: "/Diploma-in-Logistics with AI.jpeg"
  },
 {
    id: 5,
    badge: "Certificate Program",
    badgeColor: "bg-blue-600",
    modules: "8 Modules",
    duration: "12 Months",
    title: "Diploma in Hospital & Office Administration with AI",
    description:
      "A focused diploma program bridging healthcare management and office administration through practical AI applications and real-world case studies.",
    bg: "from-violet-900 via-blue-900 to-slate-800",
    accent: "bg-violet-400",
      image: "/Diploma in Hospital & Office Administration with AI.jpeg"
  },
];

const BookIcon = () => (
  <svg className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col">
      {/* Image area */}
      <div className={`relative h-48 bg-gradient-to-br ${course.bg} overflow-hidden`}>
        {/* Ambient glow */}
        <img
  src={course.image}
  alt={course.title}
  className="w-full h-full object-cover absolute inset-0"
/>
        <div className="absolute inset-0">
          <div className={`absolute top-6 right-6 w-20 h-20 ${course.accent} rounded-full blur-3xl opacity-30`}></div>
          <div className="absolute bottom-0 left-0 w-32 h-16 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        </div>

        {/* Decorative person silhouette (CSS art) */}
        <div className="absolute bottom-0 right-4 opacity-15">
          <div className="w-16 h-28 bg-white rounded-t-full"></div>
        </div>
        {/* Laptop screen mock */}
        <div className="absolute bottom-4 left-6 opacity-20">
          <div className="w-20 h-14 border border-white/40 rounded-md bg-white/10 flex flex-col p-1 gap-1">
            {[60, 80, 45].map((w, i) => (
              <div key={i} className="h-1.5 rounded-full bg-white/60" style={{ width: `${w}%` }}></div>
            ))}
          </div>
        </div>

        {/* Badge */}
        <div className={`absolute top-3 left-3 ${course.badgeColor} text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-md`}>
          {course.badge}
        </div>

        {/* Modules pill — bottom */}
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[11px] px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <BookIcon />
          <span>{course.modules}</span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-2 p-5 flex-1">
        {/* Duration */}
        <div className="flex items-center gap-1.5 text-blue-500 text-xs font-semibold">
          <CalendarIcon />
          <span>{course.duration}</span>
        </div>

        {/* Title */}
        <h3 className="text-gray-900 font-bold text-base leading-snug">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
          {course.description}
        </p>
      </div>
    </div>
  );
}

export default function Coursepage() {
  const [query, setQuery] = useState("");

  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Search Bar */}
      <div className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-30 py-4">
        <div className="max-w-2xl mx-auto px-4">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search courses..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-3 rounded-2xl border border-gray-200 bg-white text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Count */}
        <p className="text-gray-500 text-sm mb-6">
          Showing <span className="font-bold text-gray-800">{filtered.length}</span> courses
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
{filtered.map((course) => (
  <Link
    key={course.id}
    to={`/courses/${course.id}`}
    className="block"
  >
    <CourseCard course={course} />
  </Link>
))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <svg className="w-16 h-16 text-gray-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            <p className="text-gray-400 text-base font-medium">No courses found for "{query}"</p>
            <p className="text-gray-300 text-sm mt-1">Try a different search term</p>
          </div>
        )}
      </div>
    </div>
  );
}