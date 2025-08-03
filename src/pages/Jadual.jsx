import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import SponsorBar from "../partials/SponsorBar";

// Jadual pertandingan Zapin (setiap kumpulan ada masa sendiri untuk persembahan)
const zapinPerformanceSchedule = [
  {
    day: "Hari 1 (Sabtu, 10 Ogos 2025)",
    performances: [
      {
        time: "11:00 pagi",
        group: "Zapin Johor",
        stage: "Dewan Utama",
      },
      {
        time: "12:00 tengah hari",
        group: "Zapin Selangor",
        stage: "Dewan Utama",
      },
      {
        time: "2:00 petang",
        group: "Zapin Melaka",
        stage: "Dewan Utama",
      },
      {
        time: "3:00 petang",
        group: "Zapin Perak",
        stage: "Dewan Utama",
      },
    ],
  },
  {
    day: "Hari 2 (Ahad, 11 Ogos 2025)",
    performances: [
      {
        time: "10:00 pagi",
        group: "Zapin Pahang",
        stage: "Dewan Utama",
      },
      {
        time: "11:00 pagi",
        group: "Zapin Johor (Finalis)",
        stage: "Dewan Utama",
      },
      {
        time: "12:00 tengah hari",
        group: "Zapin Melaka (Finalis)",
        stage: "Dewan Utama",
      },
      {
        time: "1:00 petang",
        group: "Persembahan Muzik Tradisional",
        stage: "Dewan Budaya",
      },
      {
        time: "2:00 petang",
        group: "Pengumuman pemenang & penyampaian hadiah",
        stage: "Dewan Utama",
      },
    ],
  },
];

function Jadual() {
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
              <h1 className="text-3xl font-bold mb-6 text-violet-700 dark:text-violet-300">
                Jadual Persembahan Kumpulan Zapin
              </h1>
              {zapinPerformanceSchedule.map((day, idx) => (
                <div key={idx} className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-violet-600 dark:text-violet-200">
                    {day.day}
                  </h2>
                  <table className="min-w-full text-left mb-4">
                    <thead>
                      <tr>
                        <th className="px-4 py-2">Masa</th>
                        <th className="px-4 py-2">Kumpulan</th>
                        <th className="px-4 py-2">Tempat</th>
                      </tr>
                    </thead>
                    <tbody>
                      {day.performances.map((perf, i) => (
                        <tr key={i} className="border-t">
                          <td className="px-4 py-2">{perf.time}</td>
                          <td className="px-4 py-2">{perf.group}</td>
                          <td className="px-4 py-2">{perf.stage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </main>
        <SponsorBar />
      </div>
    </div>
  );
}

export default Jadual;
