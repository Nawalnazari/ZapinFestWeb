import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

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
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-4xl mx-auto">
            <div className="flex-auto bg-white rounded-lg shadow p-6 mb-8">
              <h1 className="text-2xl font-bold mb-6 text-violet-700">
                Siaran Langsung Persembahan Zapin
              </h1>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left">Kumpulan</th>
                      <th className="px-4 py-2 text-left">Masa</th>
                      <th className="px-4 py-2 text-left">Tempat</th>
                      <th className="px-4 py-2 text-left">Status</th>
                      <th className="px-4 py-2 text-left">Tindakan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {zapinLivestreams.map((item, idx) => (
                      <tr key={idx} className="border-t">
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
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default SiaranLangsung;
