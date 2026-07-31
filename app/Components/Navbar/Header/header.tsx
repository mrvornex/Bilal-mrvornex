"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="py-8 font-mono">
      <nav className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-[22px] text-black w-fit"
        >
          Bilal
        </Link>

        {/* Navigation */}
        <div className="flex flex-wrap gap-6 text-[16px] text-gray-500">
          <a
            href="#work-experience"
            className="hover:text-black transition-colors"
          >
            experience
          </a>

          <Link
            href="/projects"
            className="hover:text-black transition-colors"
          >
            projects
          </Link>

          <a
            href="#contact"
            className="hover:text-black transition-colors"
          >
            contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;