import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import SponsorBar from "../partials/SponsorBar";
import MainMenu from "../partials/MainMenu";

function Main() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-violet-100 via-white to-violet-300 dark:from-gray-900 dark:via-gray-800 dark:to-violet-900">
      {/* Sidebar hanya untuk mobile */}
      {!window.matchMedia("(min-width: 768px)").matches && (
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      )}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Menu utama di atas untuk desktop/tablet */}
        <MainMenu />
        {/* Header hanya untuk mobile */}
        <div className="md:hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
        <main className="grow flex flex-col items-center justify-center min-h-[80vh]">
          <div className="w-full max-w-2xl mx-auto text-center">
            <img
              src="/src/images/zapin-logo.png"
              alt="Zapin Festival Logo"
              className="mx-auto mb-6 h-24"
            />
            <h1 className="text-5xl font-extrabold mb-4 text-violet-700 dark:text-violet-300 drop-shadow-lg">
              Zapin Festival Malaysia 2026
            </h1>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-200">
              Selamat datang ke festival tarian Zapin terbesar di Malaysia!
              Sertai kami untuk menyaksikan keindahan budaya, pertandingan
              tarian, bengkel, persembahan muzik dan banyak lagi.
            </p>
            <div className="flex flex-col items-center mt-8">
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Lokasi: Dewan Budaya, Kompleks Kebudayaan Negeri Johor, Johor
                Bahru
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Tarikh: 10 - 11 Ogos 2025
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Main;
