import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

function Info() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h1 className="text-3xl font-bold mb-4 text-violet-700 dark:text-violet-300">
                Zapin Festival Malaysia
              </h1>
              <p className="mb-6 text-gray-700 dark:text-gray-200">
                Selamat datang ke Zapin Festival Malaysia! Festival ini meraikan
                keindahan tarian tradisional Zapin yang terkenal di seluruh
                negara. Sertai kami dalam pertandingan tarian Zapin, pelbagai
                aktiviti kebudayaan, dan rasai kemeriahan suasana festival.
              </p>
              <h2 className="text-xl font-semibold mb-2 text-violet-600 dark:text-violet-200">
                Maklumat Pertandingan
              </h2>
              <ul className="mb-6 list-disc list-inside text-gray-700 dark:text-gray-200">
                <li>
                  Pertandingan tarian Zapin terbuka kepada semua kumpulan dari
                  seluruh Malaysia.
                </li>
                <li>
                  Setiap kumpulan akan mempersembahkan satu tarian Zapin
                  pilihan.
                </li>
                <li>
                  Juri profesional akan menilai kreativiti, teknik, dan
                  persembahan.
                </li>
              </ul>
              <h2 className="text-xl font-semibold mb-2 text-violet-600 dark:text-violet-200">
                Aturcara Festival
              </h2>
              <ul className="mb-6 list-disc list-inside text-gray-700 dark:text-gray-200">
                <li>9:00 pagi - Pendaftaran peserta</li>
                <li>10:00 pagi - Majlis pembukaan & ucapan perasmian</li>
                <li>11:00 pagi - Pertandingan tarian Zapin bermula</li>
                <li>1:00 tengah hari - Rehat & jamuan makan</li>
                <li>2:00 petang - Persembahan kebudayaan & bengkel tarian</li>
                <li>4:00 petang - Pengumuman pemenang & penyampaian hadiah</li>
                <li>5:00 petang - Penutup festival</li>
              </ul>
              <h2 className="text-xl font-semibold mb-2 text-violet-600 dark:text-violet-200">
                Aktiviti Menarik
              </h2>
              <ul className="mb-6 list-disc list-inside text-gray-700 dark:text-gray-200">
                <li>Bengkel tarian Zapin bersama penari profesional</li>
                <li>Pameran pakaian tradisional Melayu</li>
                <li>Gerai makanan dan kraftangan tempatan</li>
                <li>Persembahan muzik tradisional</li>
              </ul>
              <h2 className="text-xl font-semibold mb-2 text-violet-600 dark:text-violet-200">
                Lokasi Festival
              </h2>
              <p className="text-gray-700 dark:text-gray-200">
                Dewan Budaya, Kompleks Kebudayaan Negeri Johor, Johor Bahru,
                Malaysia
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default Info;
