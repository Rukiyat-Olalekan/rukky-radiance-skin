import React from "react";
import { Outlet } from "react-router";

import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

function Root() {
  return (
    <div className="content-container">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
