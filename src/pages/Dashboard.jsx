import React, { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import SponsorBar from "../partials/SponsorBar";
import MainMenu from "../partials/MainMenu";

// Contoh data peserta Zapin dan skor
const zapinTeams = [
  { name: "Zapin Johor", points: 85 },
  { name: "Zapin Selangor", points: 78 },
  { name: "Zapin Melaka", points: 82 },
  { name: "Zapin Perak", points: 75 },
  { name: "Zapin Pahang", points: 80 }
];

const zapinMatchResults = [
  { home: "Zapin Johor", homeScore: 85, away: "Zapin Selangor", awayScore: 78 },
  { home: "Zapin Melaka", homeScore: 82, away: "Zapin Perak", awayScore: 75 },
  { home: "Zapin Pahang", homeScore: 80, away: "Zapin Johor", awayScore: 85 }
];

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [teams] = useState(zapinTeams);
  const [matchResults] = useState(zapinMatchResults);

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
          <div className="w-full max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold mb-6 text-violet-700 dark:text-violet-300 drop-shadow-lg">
              Scoreboard Peserta Zapin
            </h1>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8 overflow-x-auto">
              <table className="min-w-full text-left mb-6">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-violet-700 dark:text-violet-300">
                      Nama Kumpulan
                    </th>
                    <th className="px-4 py-2 text-violet-700 dark:text-violet-300">
                      Skor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map((team, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="px-4 py-2">{team.name}</td>
                      <td className="px-4 py-2">{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h2 className="text-xl font-semibold mb-2 text-violet-600 dark:text-violet-200">
                Keputusan Pertandingan
              </h2>
              <table className="min-w-full text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-violet-700 dark:text-violet-300">
                      Kumpulan 1
                    </th>
                    <th className="px-4 py-2 text-violet-700 dark:text-violet-300">
                      Skor
                    </th>
                    <th className="px-4 py-2 text-violet-700 dark:text-violet-300">
                      Kumpulan 2
                    </th>
                    <th className="px-4 py-2 text-violet-700 dark:text-violet-300">
                      Skor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {matchResults.map((result, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="px-4 py-2">{result.home}</td>
                      <td className="px-4 py-2">{result.homeScore}</td>
                      <td className="px-4 py-2">{result.away}</td>
                      <td className="px-4 py-2">{result.awayScore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
