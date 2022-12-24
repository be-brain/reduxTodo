import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Main from "../pages/Main";
import Header from "../redux/components/Header";
import Footer from "../redux/components/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
