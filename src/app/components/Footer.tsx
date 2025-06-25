import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#111827] text-gray-300 py-8 px-4 border-t border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">

        {/* Left: Clickable Brand Link */}
        <Link href="#hero" className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-sky-500 text-transparent bg-clip-text transition hover:scale-105 duration-300">
          Minhaj Ahmed
        </Link>

        {/* Right: Copyright */}
        <p className="text-sm sm:text-base text-gray-400 tracking-wide text-center sm:text-right">
          © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Minhaj Ahmed</span>. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
