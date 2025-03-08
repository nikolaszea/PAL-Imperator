import React, { useState, useEffect } from "react";

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [systemStats, setSystemStats] = useState({ cpu: 0, gpu: 0, ram: 0 });

  useEffect(() => {
    const fetchSystemStats = () => {
      setSystemStats({
        cpu: Math.floor(Math.random() * 100),
        gpu: Math.floor(Math.random() * 100),
        ram: Math.floor(Math.random() * 100),
      });
    };
    fetchSystemStats();
    const interval = setInterval(fetchSystemStats, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundColor: darkMode ? "#111" : "#f4f4f4", color: darkMode ? "white" : "black" }}>
      <h1 style={{ textAlign: "center", padding: "20px" }}>PAL-Imperator</h1>
      <div style={{ position: "absolute", top: "10px", right: "10px", width: "180px", backgroundColor: "#222", color: "white", borderRadius: "8px", padding: "8px", border: "1px solid yellow" }}>
        <h3 style={{ fontSize: "14px", fontWeight: "bold" }}>System Stats</h3>
        <p>CPU: {systemStats.cpu}%</p>
        <p>GPU: {systemStats.gpu}%</p>
        <p>RAM: {systemStats.ram}%</p>
      </div>
    </div>
  );
};

export default LandingPage;