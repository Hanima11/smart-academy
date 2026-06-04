import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import courses from "../data";


const otherCourses = [
  {
    id: 1,
    badge: "Advanced Module",
    badgeColor: "bg-blue-700",
    modules: "6 semester , 22 modules",
    duration: "3 years",
    title: "BBA in Hospital & Office Administration with AI",
    image: "/hospital-administration.jpeg",
  },
  {
    id: 2,
    badge: "Tech Stack 2024",
    badgeColor: "text-cyan-300",
    title: "BCA with AI",
    duration: "3 YEARS",
    modules: "36 MODULES (6 SEMESTER)",
    image: "/BCA with AI.jpeg",
  },
  {
    id: 3,
    badge: "Management",
    badgeColor: "text-blue-300",
    title: "BBA in Logistics with AI",
    duration: "3 YEARS",
    modules: "16 MODULES (6 SEMESTER)",
    image: "/BBA in Logistics with AI.jpeg",
  },
  {
    id: 4,
    badge: "Certificate Program",
    badgeColor: "text-indigo-300",
    title: "Diploma in Logistics with AI",
    duration: "12 MONTHS",
    modules: "5 MODULES",
    image: "/Diploma-in-Logistics with AI.jpeg",
  },
  {
    id: 5,
    badge: "Certificate Program",
    badgeColor: "text-teal-300",
    title: "Diploma in Hospital & Office Administration with AI",
    duration: "12 MONTHS",
    modules: "8 MODULES",
    image: "/Diploma in Hospital & Office Administration with AI.jpeg",
  },
];

const tabs = ["OVERVIEW", "CURRICULUM", "OUTCOMES"];

export default function Coursedetails() {
      const { id } = useParams();

  const [activeTab, setActiveTab] = useState("OVERVIEW");
  const [openSemester, setOpenSemester] = useState(null);

const selectedCourse = courses.find(
  (course) => course.id === Number(id)
);

if (!selectedCourse) {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold">Course Not Found</h2>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Main Content */}
          <div className="flex-1 min-w-0">

            {/* Hero Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">

              {/* Hero Image */}
             {/* Hero Image */}
<div className="relative h-72 sm:h-80 overflow-hidden">

  {/* Course Image */}
  <img
    src={selectedCourse.image}
    alt={selectedCourse.title}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Ambient Glow */}
  <div className="absolute inset-0">
    <div className="absolute top-8 right-12 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
    <div className="absolute bottom-0 left-0 w-48 h-24 bg-cyan-500 rounded-full blur-3xl opacity-10"></div>
  </div>

  {/* Badge */}
  <div className="absolute top-5 left-5">
    <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
      {selectedCourse.badge}
    </span>
  </div>

  {/* Title + Meta */}
  <div className="absolute bottom-5 left-5 right-5">
    <h1 className="text-white text-2xl sm:text-3xl font-extrabold leading-tight mb-3 drop-shadow-lg">
      {selectedCourse.title}
    </h1>

    <div className="flex flex-wrap items-center gap-2">
      <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/20">
        {selectedCourse.duration}
      </span>

      <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/20">
        {selectedCourse.level}
      </span>

      <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/20">
        {selectedCourse.modules}
      </span>
    </div>
  </div>

</div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-100 border-b border-gray-100">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.25 9.71 2 12 2c2.291 0 4.545.25 6.75.721v1.515M5.25 4.236c.982.143 1.954.317 2.916.52" />
                      </svg>
                    ),
                    label: "PLACEMENT",
                    value: selectedCourse.placement,
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    ),
                    label: "CERTIFICATE",
                    value: selectedCourse.certificate,
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
                      </svg>
                    ),
                    label: "MODE",
                    value: selectedCourse.mode,
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                    ),
                    label: "ELIGIBILITY",
                    value: selectedCourse.eligibility,
                  },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center gap-1.5 py-5 px-3">
                    {stat.icon}
                    <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">{stat.label}</span>
                    <span className="text-gray-900 font-bold text-base">{stat.value}</span>
                  </div>
                ))}
              </div>

              {/* Tabs */}
              <div className="px-6 py-5 border-b border-gray-100">
  <Link
    to={`/enroll?course=${selectedCourse.id}`}
    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
  >
    Apply Now
  </Link>

                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-4 text-sm font-bold tracking-wide transition-all border-b-2 -mb-px ${
                      activeTab === tab
                        ? "border-blue-600 text-white bg-blue-600 rounded-t-lg -mb-0.5"
                        : "border-transparent text-gray-500 hover:text-blue-500"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6 sm:p-8">

                {/* Overview */}
                {activeTab === "OVERVIEW" && (
                  <div className="flex flex-col gap-5">
                    <h2 className="text-xl font-bold text-gray-900">Program Overview</h2>
                    {selectedCourse.overview.split("\n\n").map((para, i) => (
                      <p key={i} className="text-gray-500 text-sm leading-relaxed">{para}</p>
                    ))}

                    {/* Highlights */}
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { label: "Program Duration", value: "3 Years (6 Semesters)" },
                        { label: "Total Modules", value: "22 Modules" },
                        { label: "Study Mode", value: "Hybrid (Online + Offline)" },
                        { label: "Certification", value: "Dual Certificate" },
                        { label: "Eligibility", value: "10+2 in any stream" },
                        { label: "Placement Support", value: "94% Placement Rate" },
                      ].map((item) => (
                        <div key={item.label} className="flex items-start gap-3 bg-blue-50 rounded-xl px-4 py-3">
                          <span className="mt-0.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                          <div>
                            <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                            <p className="text-sm font-bold text-gray-800">{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Curriculum */}
                {activeTab === "CURRICULUM" && (
                  <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold text-gray-900">Curriculum</h2>
                    <p className="text-gray-400 text-sm">6 Semesters · 22 Modules</p>
                    <div className="flex flex-col gap-3">
                      {selectedCourse.curriculum.map((sem, i) => (
                        <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                          <button
                            onClick={() => setOpenSemester(openSemester === i ? null : i)}
                            className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-blue-50 transition-colors"
                          >
                            <span className="font-bold text-gray-800 text-sm">{sem.semester}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-gray-400">{sem.subjects.length} subjects</span>
                              <svg
                                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openSemester === i ? "rotate-180" : ""}`}
                                fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </button>
                          {openSemester === i && (
                            <div className="px-5 pb-4 pt-1 bg-slate-50 flex flex-col gap-2">
                              {sem.subjects.map((sub, j) => (
                                <div key={j} className="flex items-center gap-2.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                  <span className="text-sm text-gray-600">{sub}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Outcomes */}
                {activeTab === "OUTCOMES" && (
                  <div className="flex flex-col gap-5">
                    <h2 className="text-xl font-bold text-gray-900">Learning Outcomes</h2>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      By the end of this program, graduates will be able to:
                    </p>
                    <div className="flex flex-col gap-4">
                      {selectedCourse.outcomes.map((outcome, i) => (
                        <div key={i} className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {i + 1}
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed mt-1">{outcome}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar — Other Programs */}
          <div className="w-full lg:w-72 xl:w-80 flex-shrink-0">
            <div className="sticky top-6">
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">
                Other AI Programs
              </p>
              <div className="flex flex-col gap-4">
                {otherCourses.map((c) => (
                  <Link
                    key={c.id}
                    to={`/courses/${c.id}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {/* Thumbnail */}
                    
<div className="relative h-32 overflow-hidden">
  <img
    src={c.image}
    alt={c.title}
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/40"></div>

  <div className="absolute top-3 left-3">
    <span className="bg-white/20 backdrop-blur-sm text-white text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-full">
      {c.badge}
    </span>
  </div>
</div>

                    {/* Info */}
                    <div className="px-4 py-3">
                      <h4 className="text-gray-900 font-bold text-sm leading-snug mb-2">{c.title}</h4>
                      <div className="flex flex-wrap items-center gap-1 text-[10px] text-gray-400 font-medium tracking-wide">
                        <span>{c.duration}</span>
                        <span className="text-gray-200">·</span>
                        <span>{c.modules}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Enroll CTA */}
              <div className="mt-6 bg-blue-700 rounded-2xl p-5 shadow-lg shadow-blue-200">
                <p className="text-white font-bold text-base mb-1">Ready to Enroll?</p>
                <p className="text-white/70 text-xs mb-4">Admissions are open for 2026 batch.</p>
               <Link
  to={`/enroll?course=${selectedCourse.id}`}
  className="block w-full text-center bg-white text-blue-700 font-bold text-sm py-2.5 rounded-xl hover:bg-blue-50 transition-colors shadow-sm"
>
  Apply Now
</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}