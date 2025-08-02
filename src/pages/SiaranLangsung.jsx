import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

function SiaranLangsung() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Data siaran langsung untuk pertandingan Zapin
  const zapinLivestreams = [
    {
      round: "Suku Akhir",
      teams: "Zapin Johor vs Zapin Selangor",
      time: "10:00 pagi",
      nowShowing: false,
      link: "/livestream/zapin1",
    },
    {
      round: "Separuh Akhir",
      teams: "Zapin Melaka vs Zapin Perak",
      time: "12:00 tengah hari",
      nowShowing: true,
      link: "/livestream/zapin2",
    },
    {
      round: "Akhir",
      teams: "Zapin Johor vs Zapin Melaka",
      time: "2:00 petang",
      nowShowing: false,
      link: "/livestream/zapin3",
    },
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
                Siaran Langsung Pertandingan Zapin
              </h1>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left">Pusingan</th>
                      <th className="px-4 py-2 text-left">Pasukan Berlawan</th>
                      <th className="px-4 py-2 text-left">Masa</th>
                      <th className="px-4 py-2 text-left">Status</th>
                      <th className="px-4 py-2 text-left">Tindakan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {zapinLivestreams.map((item, idx) => (
                      <tr key={idx} className="border-t">
                        <td className="px-4 py-2">{item.round}</td>
                        <td className="px-4 py-2">{item.teams}</td>
                        <td className="px-4 py-2">{item.time}</td>
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
                              "aria-disabled": true,
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
