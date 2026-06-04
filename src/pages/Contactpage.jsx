import { useState } from "react";

export default function Contactpage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ fullName: "", email: "", phone: "", course: "", message: "" });
  };

  const programs = [
    "BBA in Hospital & Office Administration with AI",
    "BCA with AI",
    "BBA in Logistics with AI",
    "Diploma in Logistics with AI",
    "Diploma in Hospital & Office Administration with AI",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

        {/* Page Heading */}
        <div className="mb-12 max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            <span className="text-blue-900">Connect with the</span>
            <br />
            <span className="text-blue-500">Intelligence Layer</span>
          </h1>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">
            Have questions about our AI-driven curriculum or enrollment process?
            <br />
            Our academic curators are here to guide your journey.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Left — Enquiry Form */}
          <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">

            {/* Form header */}
            <div className="flex items-center gap-2 mb-8">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
              <h2 className="text-xl font-bold text-gray-900">Send an Enquiry</h2>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="mb-6 flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-green-700 text-sm font-medium">
                  Enquiry submitted successfully! We'll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              {/* Row 1 — Full Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-gray-600 font-medium">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-gray-600 font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all"
                  />
                </div>
              </div>

              {/* Row 2 — Phone + Course */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-gray-600 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-gray-600 font-medium">Course of Interest</label>
                  <div className="relative">
                    <select
                      name="course"
                      value={form.course}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a Program</option>
                      {programs.map((p) => (
                        <option key={p} value={p} className="text-gray-800">{p}</option>
                      ))}
                    </select>
                    {/* Chevron */}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3 — Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-gray-600 font-medium">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Write your message or any questions here..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>

          {/* Right — Info Cards */}
          <div className="w-full lg:w-80 xl:w-96 flex flex-col gap-5">

            {/* Campus Location */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-blue-600 font-bold text-base mb-1">Campus Location</h3>
                <p className="font-semibold text-gray-800 text-sm">Smart Academy</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  NP Road, Iritty, Kannur,<br />
                  Kerala – 670703
                </p>
                <p className="font-semibold text-gray-800 text-sm mt-1">Opposite Fire Station</p>
              </div>
            </div>

            {/* Direct Reach */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-blue-600 font-bold text-base mb-2">Direct Reach</h3>
                <a href="tel:8086035533" className="block text-blue-500 hover:text-blue-700 text-sm font-medium transition-colors">
                  8086035533
                </a>
                <a href="tel:8086035544" className="block text-blue-500 hover:text-blue-700 text-sm font-medium transition-colors mt-0.5">
                  8086035544
                </a>
              </div>
            </div>

            {/* Email Us */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h3 className="text-blue-600 font-bold text-base mb-2">Email Us</h3>
                <a href="mailto:info@smartacademy.edu.in" className="block text-blue-500 hover:text-blue-700 text-sm font-medium transition-colors">
                  info@smartacademy.edu.in
                </a>
                <p className="text-gray-400 text-xs mt-1">We respond within 24 hours</p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-blue-700 rounded-2xl p-6 flex gap-4 shadow-lg shadow-blue-200">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-2">Office Hours</h3>
                <p className="text-white/80 text-sm">Mon – Sat: 9:00 AM – 5:00 PM</p>
                <p className="text-white/60 text-xs mt-1">Sunday: Closed</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}