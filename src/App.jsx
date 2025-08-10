import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import SiaranLangsung from "./pages/SiaranLangsung";
import Info from "./pages/Info";
import Jadual from "./pages/Jadual";
import Hubungi from "./pages/Hubungi";
import Main from "./pages/Main";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/" element={<Info />} /> */}
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/jadual" element={<Jadual />} />
        <Route path="/siaranLangsung" element={<SiaranLangsung />} />
        <Route path="/hubungi" element={<Hubungi />} />
        {/* <Route path="/" element={<Info />} /> */}

        {/* Add more routes as needed */}
        {/* Example: <Route path="/analytics" element={<Analytics />} /> */}
      </Routes>
    </>
  );
}

export default App;
