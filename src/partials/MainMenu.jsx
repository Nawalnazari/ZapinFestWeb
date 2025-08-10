import React from "react";

function MainMenu() {
  return (
    <nav className="hidden md:flex w-full bg-transparent shadow-none justify-center py-4 z-40">
      <div className="flex flex-wrap gap-4">
        <a
          href="/"
          className={`text-violet-700 font-semibold py-2 px-5 border-b-2 ${
            window.location.pathname === "/"
              ? "border-violet-700"
              : "border-transparent"
          } hover:border-violet-900 bg-transparent transition`}
        >
          Laman Utama
        </a>
        <a
          href="/jadual"
          className={`text-violet-700 font-semibold py-2 px-5 border-b-2 ${
            window.location.pathname === "/jadual"
              ? "border-violet-700"
              : "border-transparent"
          } hover:border-violet-900 bg-transparent transition`}
        >
          Lihat Jadual
        </a>
        <a
          href="/dashboard"
          className={`text-violet-700 font-semibold py-2 px-5 border-b-2 ${
            window.location.pathname === "/dashboard"
              ? "border-violet-700"
              : "border-transparent"
          } hover:border-violet-900 bg-transparent transition`}
        >
          Scoreboard
        </a>
        <a
          href="/siaranLangsung"
          className={`text-violet-700 font-semibold py-2 px-5 border-b-2 ${
            window.location.pathname === "/siaranLangsung"
              ? "border-violet-700"
              : "border-transparent"
          } hover:border-violet-900 bg-transparent transition`}
        >
          Siaran Langsung
        </a>
        <a
          href="/hubungi"
          className={`text-violet-700 font-semibold py-2 px-5 border-b-2 ${
            window.location.pathname === "/hubungi"
              ? "border-violet-700"
              : "border-transparent"
          } hover:border-violet-900 bg-transparent transition`}
        >
          Hubungi
        </a>
      </div>
    </nav>
  );
}

export default MainMenu;
