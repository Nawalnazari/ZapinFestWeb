import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import SponsorBar from "../partials/SponsorBar";
import MainMenu from "../partials/MainMenu";

function SiaranLangsung() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Data siaran langsung untuk pertandingan Zapin (setiap kumpulan ada masa sendiri untuk persembahan)
  const zapinLivestreams = [
    {
      group: "Zapin Johor",
      time: "11:00 pagi",
      stage: "Dewan Utama",
      nowShowing: false,
      link: "/livestream/zapin-johor"
    },
    {
      group: "Zapin Selangor",
      time: "12:00 tengah hari",
      stage: "Dewan Utama",
      nowShowing: false,
      link: "/livestream/zapin-selangor"
    },
    {
      group: "Zapin Melaka",
      time: "2:00 petang",
      stage: "Dewan Utama",
      nowShowing: true,
      link: "/livestream/zapin-melaka"
    },
    {
      group: "Zapin Perak",
      time: "3:00 petang",
      stage: "Dewan Utama",
      nowShowing: false,
      link: "/livestream/zapin-perak"
    },
    {
      group: "Zapin Pahang",
      time: "10:00 pagi (Hari 2)",
      stage: "Dewan Utama",
      nowShowing: false,
      link: "/livestream/zapin-pahang"
    },
    {
      group: "Zapin Johor (Finalis)",
      time: "11:00 pagi (Hari 2)",
      stage: "Dewan Utama",
      nowShowing: false,
      link: "/livestream/zapin-johor-final"
    },
    {
      group: "Zapin Melaka (Finalis)",
      time: "12:00 tengah hari (Hari 2)",
      stage: "Dewan Utama",
      nowShowing: false,
      link: "/livestream/zapin-melaka-final"
    }
  ];

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
          <div className="w-full max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold mb-6 text-violet-700 dark:text-violet-300 drop-shadow-lg">
              Siaran Langsung Persembahan Zapin
            </h1>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8 overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-violet-700 dark:text-violet-300">
                      Kumpulan
                    </th>
                    <th className="px-4 py-2 text-violet-700 dark:text-violet-300">
                      Masa
                    </th>
                    <th className="px-4 py-2 text-violet-700 dark:text-violet-300">
                      Tempat
                    </th>
                    <th className="px-4 py-2 text-violet-700 dark:text-violet-300">
                      Status
                    </th>
                    <th className="px-4 py-2 text-violet-700 dark:text-violet-300">
                      Tindakan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {zapinLivestreams.map((item, idx) => (
                    <tr
                      key={idx}
                      className="border-t hover:bg-violet-50 dark:hover:bg-violet-900 transition"
                    >
                      <td className="px-4 py-2">{item.group}</td>
                      <td className="px-4 py-2">{item.time}</td>
                      <td className="px-4 py-2">{item.stage}</td>
                      <td className="px-4 py-2">
                        {item.nowShowing ? (
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                            Sedang Berlangsung
                          </span>
                        ) : (
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            Akan Datang
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-2">
                        <a
                          href={item.link}
                          className={`px-3 py-1 rounded transition ${
                            item.nowShowing
                              ? "bg-violet-600 text-white hover:bg-violet-700"
                              : "bg-gray-300 text-gray-600 cursor-not-allowed"
                          }`}
                          {...(!item.nowShowing && {
                            tabIndex: -1,
                            "aria-disabled": true
                          })}
                        >
                          Tonton
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

export default SiaranLangsung;
