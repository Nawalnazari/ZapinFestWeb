import React, { useState, useEffect } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import Banner from "../partials/Banner";
import { useLocation } from "react-router-dom";

// Contoh data peserta Zapin dan skor
const zapinTeams = [
  { name: "Zapin Johor", points: 85 },
  { name: "Zapin Selangor", points: 78 },
  { name: "Zapin Melaka", points: 82 },
  { name: "Zapin Perak", points: 75 },
  { name: "Zapin Pahang", points: 80 },
];

const zapinMatchResults = [
  { home: "Zapin Johor", homeScore: 85, away: "Zapin Selangor", awayScore: 78 },
  { home: "Zapin Melaka", homeScore: 82, away: "Zapin Perak", awayScore: 75 },
  { home: "Zapin Pahang", homeScore: 80, away: "Zapin Johor", awayScore: 85 },
];

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [teams, setTeams] = useState(zapinTeams);
  const [matchResults, setMatchResults] = useState(zapinMatchResults);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <h1 className="text-2xl font-bold mb-4 text-violet-700">
                Scoreboard Peserta Zapin
              </h1>
              <table className="min-w-full text-left mb-6">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Nama Kumpulan</th>
                    <th className="px-4 py-2">Skor</th>
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
              <h2 className="text-xl font-semibold mb-2 text-violet-600">
                Keputusan Pertandingan
              </h2>
              <table className="min-w-full text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Kumpulan 1</th>
                    <th className="px-4 py-2">Skor</th>
                    <th className="px-4 py-2">Kumpulan 2</th>
                    <th className="px-4 py-2">Skor</th>
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
        <Banner />
      </div>
    </div>
  );
}

export default Dashboard;
