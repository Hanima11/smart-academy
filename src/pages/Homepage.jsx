import { Link } from "react-router-dom";
export default function Homepage() {
  return (
    <section className="w-full bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-6 max-w-xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 w-fit">
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">
                Next-Gen Learning
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-blue-900">
              Master the Future{" "}
              <span className="text-blue-500">with AI-Integrated</span>{" "}
              Excellence.
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-base leading-relaxed">
              Smart Academy delivers industry-driven education powered by AI,
              combining real-world projects, expert mentorship, and career-focused
              training to help you build in-demand skills and stay ahead in a
              rapidly evolving digital landscape.
            </p>

            {/* CTA Button */}
            <div>
  <Link
  to="/courses"
  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5"
>
  Explore Courses
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</Link>
</div>

            {/* Students Row */}
            <div className="flex items-center gap-4 mt-2">
              {/* Avatar Stack */}
              <div className="flex -space-x-3">
                {[
                  { bg: "bg-orange-400", initials: "A" },
                  { bg: "bg-pink-400", initials: "B" },
                  { bg: "bg-blue-400", initials: "C" },
                  { bg: "bg-green-400", initials: "D" },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full ${avatar.bg} border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm`}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-blue-600 font-bold text-sm">500+ Students</p>
                <p className="text-gray-400 text-xs">Enrolled Successfully</p>
              </div>
            </div>
          </div>

          {/* Right — Image Card */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">

            {/* 95% Placement Badge — top right */}
            <div className="absolute -top-4 right-0 z-10 bg-blue-600 text-white text-sm font-bold px-5 py-2 rounded-full shadow-lg shadow-blue-300">
              95% Placement
            </div>

            {/* Main Image Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-100 bg-gray-900 aspect-[4/3]">
              {/* Placeholder image with gradient overlay mimicking the dark tech background */}
              <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 flex items-center justify-center">
                {/* Decorative screen glow */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-400 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500 rounded-full blur-3xl"></div>
                </div>

                {/* Mock laptop screen UI */}
                <div className="relative z-10 w-56 bg-gray-800 rounded-xl p-3 shadow-2xl border border-gray-700">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <div className="ml-2 flex-1 bg-gray-700 rounded h-2"></div>
                  </div>
                  {/* Fake chart bars */}
                  <div className="flex items-end gap-1 h-20 mt-2">
                    {[40, 65, 45, 80, 55, 90, 60, 75, 50, 85].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h}%`,
                          background: i % 2 === 0
                            ? "linear-gradient(to top, #3b82f6, #60a5fa)"
                            : "linear-gradient(to top, #10b981, #34d399)",
                          opacity: 0.85,
                        }}
                      ></div>
                    ))}
                  </div>
                  {/* Fake line chart */}
                  <svg className="w-full mt-2" height="24" viewBox="0 0 200 24">
                    <polyline
                      points="0,18 30,14 60,16 90,8 120,12 150,4 180,8 200,2"
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="0,22 30,20 60,21 90,16 120,18 150,12 180,15 200,10"
                      fill="none"
                      stroke="#34d399"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="4 2"
                    />
                  </svg>
                  {/* Fake data rows */}
                  <div className="mt-2 flex flex-col gap-1">
                    {[70, 50, 85].map((w, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        <div className="h-1.5 rounded-full bg-gray-600" style={{ width: `${w}%` }}></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Silhouette of person (CSS art) */}
                <div className="absolute bottom-0 right-8 opacity-20">
                  <div className="w-24 h-32 bg-gradient-to-t from-white to-transparent rounded-t-full"></div>
                </div>
              </div>
            </div>

            {/* AI-Powered Learning badge — bottom left */}
            <div className="absolute -bottom-5 left-4 z-10 bg-white rounded-2xl shadow-xl shadow-blue-100 border border-gray-100 px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.607L5 14.5m14.8.5l1.196 4.785a1 1 0 01-.964 1.215H3.968a1 1 0 01-.964-1.215L4.2 15M5 14.5l-.8.393" />
                </svg>
              </div>
              <div>
                <p className="text-gray-800 font-bold text-sm leading-none mb-0.5">AI-Powered Learning</p>
                <p className="text-gray-400 text-xs">Real-time insights</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}