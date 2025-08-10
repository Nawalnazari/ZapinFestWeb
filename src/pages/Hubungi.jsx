import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import SponsorBar from "../partials/SponsorBar";
import MainMenu from "../partials/MainMenu";

function Hubungi() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-violet-100 via-white to-violet-300 dark:from-gray-900 dark:via-gray-800 dark:to-violet-900">
      {/* Sidebar hanya untuk mobile */}
      {!window.matchMedia("(min-width: 768px)").matches && (
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      )}
      {/* Menu utama di atas untuk desktop/tablet */}
      <MainMenu />
      {/* Header hanya untuk mobile */}
      <div className="md:hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      {/* Jadikan content scrollable */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <main className="flex flex-col items-center justify-start min-h-[80vh] py-8">
          <div className="w-full max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold mb-6 text-violet-700 dark:text-violet-300 drop-shadow-lg">
              Hubungi & Info Jawatankuasa
            </h1>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8 text-left">
              <h2 className="text-xl font-semibold mb-2 text-violet-600 dark:text-violet-200">
                Penganjur
              </h2>
              <ul className="mb-6 list-disc list-inside text-gray-700 dark:text-gray-200">
                <li>Nama: Encik Ahmad Zainal</li>
                <li>Telefon: 012-3456789</li>
                <li>Email: ahmad.zainal@zapinmalaysia.com</li>
              </ul>
              <h2 className="text-xl font-semibold mb-2 text-violet-600 dark:text-violet-200">
                Ahli Jawatankuasa
              </h2>
              <ul className="mb-6 list-disc list-inside text-gray-700 dark:text-gray-200">
                <li>Pn. Siti Aminah (Setiausaha) - 013-9876543</li>
                <li>En. Faizal Rahman (Bendahari) - 019-2233445</li>
                <li>Pn. Noraini Hassan (Logistik) - 017-5566778</li>
              </ul>
              <h2 className="text-xl font-semibold mb-2 text-violet-600 dark:text-violet-200">
                Juri Pertandingan
              </h2>
              <ul className="mb-6 list-disc list-inside text-gray-700 dark:text-gray-200">
                <li>Prof. Madya Dr. Azman Ismail</li>
                <li>Pn. Roslina Mohd Noor</li>
                <li>En. Syahrul Nizam</li>
              </ul>
              <h2 className="text-xl font-semibold mb-2 text-violet-600 dark:text-violet-200">
                Lain-lain Pertanyaan
              </h2>
              <ul className="mb-2 list-disc list-inside text-gray-700 dark:text-gray-200">
                <li>Email rasmi: info@zapinmalaysia.com</li>
                <li>Telefon pejabat: 07-1234567</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Hubungi;
