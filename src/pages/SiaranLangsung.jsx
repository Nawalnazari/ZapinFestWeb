import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

function SiaranLangsung() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const livestreams = [
    {
      category: "Futsal",
      teams: "Thunder FC vs Red Dragons",
      link: "/livestream/futsal1",
    },
    {
      category: "Takraw",
      teams: "Golden Smashers vs Sky Spikers",
      link: "/livestream/takraw1",
    },
    {
      category: "Bola Jaring",
      teams: "Net Queens vs Shooting Stars",
      link: "/livestream/bolajaring1",
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
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="flex-auto bg-white rounded-lg shadow p-6 mb-8">
              <h1 className="text-2xl font-bold mb-6">Siaran Langsung</h1>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left">Kategori</th>
                      <th className="px-4 py-2 text-left">Pasukan</th>
                      <th className="px-4 py-2 text-left">Tindakan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {livestreams.map((item, idx) => (
                      <tr key={idx} className="border-t">
                        <td className="px-4 py-2">{item.category}</td>
                        <td className="px-4 py-2">{item.teams}</td>
                        <td className="px-4 py-2">
                          <a
                            href={item.link}
                            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
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
