import React, { useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import useHeaderStore from "../../../stores/useHeaderStore";
import "../../../styles/HomePage.css";

const PublicLayout = () => {
  const { isDarkMode } = useHeaderStore();

  return (
    <div className={`app ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;
