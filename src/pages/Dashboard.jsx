import React, { use, useState, useEffect } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import Banner from "../partials/Banner";
import ScoreboardCard from "../components/ScoreboardCard";
import ResultCard from "../components/ResultCard";
import { useLocation } from "react-router-dom";
import {
  bolaJaringMatchResults,
  bolaJaringTeams,
  futsalMatchResults,
  futsalTeams,
  takrawMatchResults,
  takrawTeams,
} from "../mockData/scoreboardData";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tableName, setTableName] = useState("Futsal");
  const [teams, setTeams] = useState([]);
  const [matchResults, setMatchResults] = useState([]);
  const location = useLocation();
  const { flagMenu } = location.state || {};

  console.log("Flag Menu:", flagMenu); // Debugging line to check the flagMenu value

  useEffect(() => {
    if (flagMenu === "takraw") {
      setTableName("Takraw");
      setTeams(takrawTeams);
      setMatchResults(takrawMatchResults);
    } else if (flagMenu === "bolaJaring") {
      setTableName("Bola Jaring");
      setTeams(bolaJaringTeams);
      setMatchResults(bolaJaringMatchResults);
    } else {
      setTableName("Futsal");
      setTeams(futsalTeams);
      setMatchResults(futsalMatchResults);
    }
  }, [flagMenu]);

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
              <ScoreboardCard tableName={tableName} teams={teams} />
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
