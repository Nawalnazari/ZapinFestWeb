import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import SponsorBar from "../partials/SponsorBar";
import MainMenu from "../partials/MainMenu";

// Jadual pertandingan Zapin (setiap kumpulan ada masa sendiri untuk persembahan)
const zapinPerformanceSchedule = [
  {
    day: "Hari 1 (Sabtu, 10 Ogos 2025)",
    performances: [
      {
        time: "11:00 pagi",
        group: "Zapin Johor",
        stage: "Dewan Utama"
      },
      {
        time: "12:00 tengah hari",
        group: "Zapin Selangor",
        stage: "Dewan Utama"
      },
      {
        time: "2:00 petang",
        group: "Zapin Melaka",
        stage: "Dewan Utama"
      },
      {
        time: "3:00 petang",
        group: "Zapin Perak",
        stage: "Dewan Utama"
      }
    ]
  },
  {
    day: "Hari 2 (Ahad, 11 Ogos 2025)",
    performances: [
      {
        time: "10:00 pagi",
        group: "Zapin Pahang",
        stage: "Dewan Utama"
      },
      {
        time: "11:00 pagi",
        group: "Zapin Johor (Finalis)",
        stage: "Dewan Utama"
      },
      {
        time: "12:00 tengah hari",
        group: "Zapin Melaka (Finalis)",
        stage: "Dewan Utama"
      },
      {
        time: "1:00 petang",
        group: "Persembahan Muzik Tradisional",
        stage: "Dewan Budaya"
      },
      {
        time: "2:00 petang",
        group: "Pengumuman pemenang & penyampaian hadiah",
        stage: "Dewan Utama"
      }
    ]
  }
];

function Jadual() {
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
          <div className="w-full max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold mb-6 text-violet-700 dark:text-violet-300 drop-shadow-lg">
              Jadual Persembahan Kumpulan Zapin
            </h1>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8 overflow-x-auto">
              {zapinPerformanceSchedule.map((day, idx) => (
                <div key={idx} className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-violet-600 dark:text-violet-200">
                    {day.day}
                  </h2>
                  <table className="min-w-full text-left mb-4">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-violet-700 dark:text-violet-300">
                          Masa
                        </th>
                        <th className="px-4 py-2 text-violet-700 dark:text-violet-300">
                          Kumpulan
                        </th>
                        <th className="px-4 py-2 text-violet-700 dark:text-violet-300">
                          Tempat
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {day.performances.map((perf, i) => (
                        <tr
                          key={i}
                          className="border-t hover:bg-violet-50 dark:hover:bg-violet-900 transition"
                        >
                          <td className="px-4 py-2 font-semibold">
                            {perf.time}
                          </td>
                          <td className="px-4 py-2">{perf.group}</td>
                          <td className="px-4 py-2">{perf.stage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
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

export default Jadual;
