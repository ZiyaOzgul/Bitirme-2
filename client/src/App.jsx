import React from "react";
import { HomePage, InputPage, Navbar, ProductPage } from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="flex items-center justify-start w-full h-screen">
      <div className="w-1/6 bg-gradient-to-br from-slate-800 to-gray-800 shadow-2xl shadow-gray-800">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/newProduct" element={<InputPage />} />
        <Route path="/products/:productid" element={<ProductPage />} />
      </Routes>
    </div>
  );
};

export default App;
