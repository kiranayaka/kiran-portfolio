export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-400">
          KR
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-slate-300 font-medium">
          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#journey" className="hover:text-blue-400 transition">
              Journey
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#blog" className="hover:text-blue-400 transition">
              Blog
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Resume Button */}
        <a
          href="#"
          className="hidden md:block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-white transition"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}