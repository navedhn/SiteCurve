import React, { Suspense, lazy, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/Sidebar/Sidebar.jsx";
const Header = lazy(() => import("../Shared/Header/Header.jsx"));

function AppLayout() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to update the state based on window resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener to update window width on resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {windowWidth > 1023 ? <Header /> : <Sidebar />}
      <Outlet />
    </div>
  );
}

export default AppLayout;
