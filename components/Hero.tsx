export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white pt-24">
      <div className="text-center px-6">
        <p className="text-blue-400 text-lg font-medium mb-2">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Kiran R
        </h1>

        <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
          Software Engineer
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-8">
          C++ • Qt • Windows Desktop Applications • Hardware Communication
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
            View Projects
          </button>

          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}