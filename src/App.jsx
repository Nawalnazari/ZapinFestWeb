import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import SiaranLangsung from "./pages/SiaranLangsung";
import Info from "./pages/Info";

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
        <Route path="/info" element={<Info />} />
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/siaranLangsung" element={<SiaranLangsung />} />

        {/* Add more routes as needed */}
        {/* Example: <Route path="/analytics" element={<Analytics />} /> */}
      </Routes>
    </>
  );
}

export default App;
