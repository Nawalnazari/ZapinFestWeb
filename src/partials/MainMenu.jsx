import React from "react";
import { NavLink } from "react-router-dom";

function MainMenu() {
  return (
    <nav className="hidden md:flex w-full bg-transparent shadow-none justify-center py-4 z-40">
      <div className="flex flex-wrap gap-4">
        <NavLink
          end
          to="/"
          className={({ isActive }) =>
            `text-violet-700 font-semibold py-2 px-5 border-b-2 ${
              isActive ? "border-violet-700" : "border-transparent"
            } hover:border-violet-900 bg-transparent transition`
          }
        >
          Laman Utama
        </NavLink>
        <NavLink
          end
          to="/jadual"
          className={({ isActive }) =>
            `text-violet-700 font-semibold py-2 px-5 border-b-2 ${
              isActive ? "border-violet-700" : "border-transparent"
            } hover:border-violet-900 bg-transparent transition`
          }
        >
          Lihat Jadual
        </NavLink>
        <NavLink
          end
          to="/dashboard"
          className={({ isActive }) =>
            `text-violet-700 font-semibold py-2 px-5 border-b-2 ${
              isActive ? "border-violet-700" : "border-transparent"
            } hover:border-violet-900 bg-transparent transition`
          }
        >
          Scoreboard
        </NavLink>
        <NavLink
          end
          to="/siaranLangsung"
          className={({ isActive }) =>
            `text-violet-700 font-semibold py-2 px-5 border-b-2 ${
              isActive ? "border-violet-700" : "border-transparent"
            } hover:border-violet-900 bg-transparent transition`
          }
        >
          Siaran Langsung
        </NavLink>
        <NavLink
          end
          to="/hubungi"
          className={({ isActive }) =>
            `text-violet-700 font-semibold py-2 px-5 border-b-2 ${
              isActive ? "border-violet-700" : "border-transparent"
            } hover:border-violet-900 bg-transparent transition`
          }
        >
          Hubungi
        </NavLink>
      </div>
    </nav>
  );
}

export default MainMenu;
