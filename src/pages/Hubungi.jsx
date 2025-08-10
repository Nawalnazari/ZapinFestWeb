import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

function Hubungi() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h1 className="text-3xl font-bold mb-6 text-violet-700 dark:text-violet-300">
                Hubungi & Info Jawatankuasa
              </h1>
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
