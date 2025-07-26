import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import Banner from "../partials/Banner";
import ScoreboardCard from "../components/ScoreboardCard";
import ResultCard from "../components/ResultCard";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Scoreboard mock data
  const futsalTeams = [
    { name: "Thunder FC", points: 15 },
    { name: "Lightning United", points: 12 },
    { name: "Red Dragons", points: 10 },
    { name: "Blue Sharks", points: 8 },
    { name: "Green Eagles", points: 6 },
  ];

  // Mock match results
  const matchResults = [
    { home: "Thunder FC", homeScore: 1, away: "Red Dragons", awayScore: 0 },
    {
      home: "Lightning United",
      homeScore: 2,
      away: "Blue Sharks",
      awayScore: 2,
    },
    { home: "Green Eagles", homeScore: 0, away: "Thunder FC", awayScore: 3 },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                  Papan Skor
                </h1>
              </div>
            </div>

            <div className="flex flex-row max-sm:flex-col gap-6">
              {/* Scoreboard Table */}
              <ScoreboardCard tableName={"Futsal"} teams={futsalTeams} />
              {/* End Scoreboard Table */}

              {/* Result Card */}
              <ResultCard matchResults={matchResults} />
              {/* End Result Card */}
            </div>
          </div>
        </main>

        <Banner />
      </div>
    </div>
  );
}

export default Dashboard;
