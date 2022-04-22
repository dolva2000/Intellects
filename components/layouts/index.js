import React from "react";
import Header from "./components/header";
import Fotter from "./components/fotter";
import Backtop from "./components/backtop";
import Preloader from "./components/preloader";

export default function index({ children }) {
  return (
    <>
      <Header />
      {children}
      <Fotter />
      <Backtop />
    </>
  );
}
