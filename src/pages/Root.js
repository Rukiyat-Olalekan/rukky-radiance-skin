import React from "react";
import { Outlet } from "react-router";

import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

function Root() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Root;
