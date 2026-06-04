export default function Aboutpage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left Content */}
            <div className="flex-1 flex flex-col gap-6 max-w-xl">

              {/* Badge */}
              <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 w-fit">
                <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">
                  Established 2014
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-blue-900">
                Synthesizing{" "}
                <br className="hidden sm:block" />
                Intelligence &{" "}
                <br className="hidden sm:block" />
                <span className="text-blue-500">Education.</span>
              </h1>

              {/* Description */}
              <p className="text-gray-500 text-base leading-relaxed max-w-md">
                Smart Academy is Kerala's premier technical institute dedicated to
                curating an intelligence-led learning environment where AI
                integration meets vocational excellence.
              </p>

              {/* CTA Button */}
              <div className="mt-2">
                <button className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white px-7 py-3.5 rounded-xl font-bold text-base transition-all duration-200 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5">
                  Explore Courses
                </button>
              </div>
            </div>

            {/* Right — Campus Image Card */}
            <div className="flex-1 relative w-full max-w-2xl">

              {/* Main Campus Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-100 aspect-[4/3] bg-gradient-to-br from-sky-200 via-blue-100 to-green-100">

                {/* Sky background */}
                <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100"></div>

                {/* Ground / lawn */}
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-green-500 via-green-400 to-green-300 opacity-80"></div>

                {/* Driveway */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-2/5 bg-gradient-to-t from-gray-400 to-gray-300 opacity-70 rounded-t-full"></div>

                {/* Building body */}
                <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-3/4">
                  {/* Main facade */}
                  <div className="w-full bg-gradient-to-b from-slate-500 via-slate-400 to-slate-500 rounded-t-xl overflow-hidden shadow-xl">
                    {/* Horizontal panel lines */}
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="w-full border-b border-slate-600/30 py-3 px-4 flex gap-1.5">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <div
                            key={j}
                            className="flex-1 h-4 bg-sky-300/30 rounded-sm border border-slate-600/20"
                          ></div>
                        ))}
                      </div>
                    ))}

                    {/* Ground floor entrance */}
                    <div className="flex justify-center pb-0">
                      <div className="w-1/3 h-10 bg-sky-200/40 border-t-2 border-slate-400/50 rounded-t-lg"></div>
                    </div>
                  </div>
                </div>

                {/* Trees */}
                {[
                  { left: "8%", h: "h-20", trunk: "h-6" },
                  { left: "18%", h: "h-24", trunk: "h-7" },
                  { right: "8%", h: "h-20", trunk: "h-6" },
                  { right: "18%", h: "h-24", trunk: "h-7" },
                ].map((tree, i) => (
                  <div
                    key={i}
                    className="absolute bottom-[30%] flex flex-col items-center"
                    style={tree.left ? { left: tree.left } : { right: tree.right }}
                  >
                    <div className={`w-10 ${tree.h} bg-gradient-to-b from-green-500 to-green-700 rounded-full shadow-md`}></div>
                    <div className={`w-2 ${tree.trunk} bg-amber-700 rounded-b`}></div>
                  </div>
                ))}

                {/* Building sign */}
                <div className="absolute top-[22%] left-1/2 -translate-x-1/2 text-center">
                  <p className="text-white/90 text-[10px] font-bold tracking-widest uppercase drop-shadow">
                    Smart
                  </p>
                  <p className="text-white font-extrabold text-sm tracking-wide drop-shadow-lg">
                    Smart Academy
                  </p>
                  <p className="text-white/80 text-[10px] tracking-widest drop-shadow">
                    Campus Campus
                  </p>
                </div>

                {/* Big K logo on building */}
                <div className="absolute top-[20%] left-[28%] w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center border border-white/30 backdrop-blur-sm">
                  <span className="text-white font-black text-xl drop-shadow">K</span>
                </div>
              </div>

              {/* ISO Certified badge — bottom center */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-10 bg-white rounded-2xl shadow-xl shadow-blue-100 border border-gray-100 px-5 py-3 flex items-center gap-3 whitespace-nowrap">
                <div className="w-9 h-9 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-bold text-sm leading-none">ISO Certified</p>
                  <p className="text-gray-400 text-xs mt-0.5">Quality Assured</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-blue-50 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "2014", label: "Year Established" },
              { value: "500+", label: "Students Enrolled" },
              { value: "95%", label: "Placement Rate" },
              { value: "6+", label: "AI-Integrated Programs" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-3xl font-extrabold text-blue-700">{stat.value}</span>
                <span className="text-sm text-gray-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Mission */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                To deliver transformative, AI-powered education that bridges the gap
                between academic knowledge and real-world industry demands — producing
                graduates who lead with intelligence and integrity.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-blue-700 rounded-2xl p-8 flex flex-col gap-4 shadow-lg shadow-blue-200">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Our Vision</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                To become South India's most forward-thinking institution — where every
                classroom is a launchpad for tomorrow's AI-empowered professionals across
                healthcare, logistics, and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full bg-slate-50 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-3">Why Choose Smart Academy?</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              We combine cutting-edge AI curriculum with industry mentorship to ensure
              every student is career-ready from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082" />
                  </svg>
                ),
                title: "AI-Integrated Curriculum",
                desc: "Every program is designed with AI tools and real-world applications at its core.",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
                title: "Expert Mentorship",
                desc: "Learn from industry veterans and AI practitioners with real-world experience.",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                ),
                title: "95% Placement Rate",
                desc: "Our career support team ensures every graduate enters the workforce confidently.",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                ),
                title: "Modern Campus",
                desc: "State-of-the-art facilities in Iritty, Kannur, designed for collaborative learning.",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
                title: "ISO Certified",
                desc: "Internationally recognized quality standards in education delivery and management.",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                ),
                title: "Real-World Projects",
                desc: "Hands-on projects and industry collaborations that build a portfolio employers value.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col gap-3"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-gray-900 font-bold text-base">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}